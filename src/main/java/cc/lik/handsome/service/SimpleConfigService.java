package cc.lik.handsome.service;

import cc.lik.handsome.dto.BaseConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import run.halo.app.plugin.ReactiveSettingFetcher;

import java.util.Map;

/**
 * 简化版配置服务
 * 直接从设置获取配置，不进行持久化存储
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class SimpleConfigService {
    private final ReactiveSettingFetcher settingFetcher;
    
    /**
     * 获取配置的JavaScript代码
     * 
     * @return 包含配置的JavaScript代码
     */
    public Mono<String> getConfigJavaScript() {
        return buildConfigFromSettings()
                .map(this::convertToJavaScript);
    }
    
    /**
     * 将配置对象转换为JavaScript定义
     * 
     * @param config 配置对象
     * @return JavaScript代码字符串
     */
    private String convertToJavaScript(BaseConfig config) {
        try {
            String configJson = convertToJsonString(config);
            log.info("Generated config JSON: {}", configJson);
            return "window.SWISS_KNIFE_CONFIG = " + configJson + ";";
        } catch (Exception e) {
            log.error("Failed to serialize config to JSON", e);
            return "window.SWISS_KNIFE_CONFIG = {};";
        }
    }
    
    /**
     * 将配置对象转换为JSON字符串
     * 
     * @param config 配置对象
     * @return JSON字符串
     */
    private String convertToJsonString(BaseConfig config) {
        StringBuilder json = new StringBuilder();
        json.append("{");
        
        // 添加深色模式配置
        if (config.getDarkMode() != null) {
            json.append("\"darkMode\":{");
            json.append("\"autoDetect\":").append(config.getDarkMode().getAutoDetect()).append(",");
            json.append("\"selector\":\"").append(escapeJsonString(config.getDarkMode().getSelector())).append("\",");
            json.append("\"themeClass\":\"").append(escapeJsonString(config.getDarkMode().getThemeClass())).append("\"");
            json.append("},");
        }
        
        // 添加通知组件配置
        if (config.getNotice() != null) {
            json.append("\"notice\":{");
            json.append("\"enable\":").append(config.getNotice().getEnable()).append(",");
            json.append("\"showInterval\":").append(config.getNotice().getShowInterval()).append(",");
            json.append("\"showDelay\":").append(config.getNotice().getShowDelay()).append(",");
            json.append("\"title\":\"").append(escapeJsonString(config.getNotice().getTitle())).append("\",");
            json.append("\"content\":\"").append(escapeJsonString(config.getNotice().getContent())).append("\",");
            json.append("\"showTime\":").append(config.getNotice().getShowTime()).append(",");
            json.append("\"position\":\"").append(escapeJsonString(config.getNotice().getPosition())).append("\"");
            
            if (config.getNotice().getButtons() != null) {
                json.append(",\"buttons\":{");
                json.append("\"confirm\":\"").append(escapeJsonString(config.getNotice().getButtons().getConfirm())).append("\",");
                json.append("\"close\":\"").append(escapeJsonString(config.getNotice().getButtons().getClose())).append("\"");
                json.append("}");
            }
            
            json.append("},");
        }
        
        // 添加字体设置组件配置
        if (config.getTypography() != null) {
            json.append("\"typography\":{");
            json.append("\"enable\":").append(config.getTypography().getEnable()).append(",");
            json.append("\"fontName\":\"").append(escapeJsonString(config.getTypography().getFontName())).append("\",");
            json.append("\"fontUrl\":\"").append(escapeJsonString(config.getTypography().getFontUrl())).append("\"");
            json.append("},");
        }
        
        // 添加Aurora组件配置
        if (config.getAurora() != null) {
            json.append("\"aurora\":{");
            json.append("\"enable\":").append(config.getAurora().getEnable()).append(",");
            json.append("\"position\":\"").append(escapeJsonString(config.getAurora().getPosition())).append("\",");
            json.append("\"locale\":\"").append(escapeJsonString(config.getAurora().getLocale())).append("\"");
            json.append("}");
        }
        
        // 如果最后一个字符是逗号，去掉它
        if (json.charAt(json.length() - 1) == ',') {
            json.deleteCharAt(json.length() - 1);
        }
        
        json.append("}");
        return json.toString();
    }
    
    /**
     * 转义JSON字符串
     * 
     * @param str 输入字符串
     * @return 转义后的字符串
     */
    private String escapeJsonString(String str) {
        if (str == null) {
            return "";
        }
        return str.replace("\\", "\\\\")
                 .replace("\"", "\\\"")
                 .replace("\n", "\\n")
                 .replace("\r", "\\r")
                 .replace("\t", "\\t");
    }

    /**
     * 从设置构建配置对象
     * 
     * @return 配置对象
     */
    public Mono<BaseConfig> buildConfigFromSettings() {
        return settingFetcher.fetch("base", Map.class)
                .map(settings -> {
                    log.debug("Original settings: {}", settings);
                    BaseConfig baseConfig = new BaseConfig();
                    
                    // 设置深色模式配置
                    BaseConfig.DarkModeConfig darkModeConfig = new BaseConfig.DarkModeConfig();
                    darkModeConfig.setAutoDetect(getBooleanValue(settings, "autoDetect", true));
                    darkModeConfig.setSelector(getStringValue(settings, "selector", "[data-color-schema=\"dark\"]"));
                    darkModeConfig.setThemeClass(getStringValue(settings, "themeClass", "dark"));
                    baseConfig.setDarkMode(darkModeConfig);
                    
                    // 设置通知组件配置
                    BaseConfig.NoticeConfig noticeConfig = new BaseConfig.NoticeConfig();
                    // 确保通知组件启用状态正确设置
                    boolean enableNotice = getBooleanValue(settings, "enableNotice", false);
                    log.debug("enableNotice setting: {} (raw: {})", enableNotice, settings.get("enableNotice"));
                    noticeConfig.setEnable(enableNotice);
                    noticeConfig.setShowInterval(getIntValue(settings, "showInterval", 0));
                    noticeConfig.setShowDelay(getIntValue(settings, "showDelay", 1000));
                    noticeConfig.setTitle(getStringValue(settings, "title", "网站公告"));
                    noticeConfig.setContent(getStringValue(settings, "content", "欢迎访问我的博客！"));
                    noticeConfig.setShowTime(getIntValue(settings, "showTime", 5000));
                    noticeConfig.setPosition(getStringValue(settings, "position", "center"));
                    
                    BaseConfig.ButtonsConfig buttonsConfig = new BaseConfig.ButtonsConfig();
                    buttonsConfig.setConfirm(getStringValue(settings, "confirm", "<a href=\"#\">查看详情</a>"));
                    buttonsConfig.setClose(getStringValue(settings, "close", "关闭"));
                    noticeConfig.setButtons(buttonsConfig);
                    
                    baseConfig.setNotice(noticeConfig);
                    
                    // 设置字体设置组件配置
                    BaseConfig.TypographyConfig typographyConfig = new BaseConfig.TypographyConfig();
                    boolean enableTypography = getBooleanValue(settings, "enableTypography", false);
                    log.debug("enableTypography setting: {} (raw: {})", enableTypography, settings.get("enableTypography"));
                    typographyConfig.setEnable(enableTypography);
                    typographyConfig.setFontName(getStringValue(settings, "fontName", ""));
                    typographyConfig.setFontUrl(getStringValue(settings, "fontUrl", ""));
                    baseConfig.setTypography(typographyConfig);
                    
                    // 设置Aurora-Dia小球组件配置
                    BaseConfig.AuroraConfig auroraConfig = new BaseConfig.AuroraConfig();
                    boolean enableAurora = getBooleanValue(settings, "enableAurora", true);
                    log.debug("enableAurora setting: {} (raw: {})", enableAurora, settings.get("enableAurora"));
                    auroraConfig.setEnable(enableAurora);
                    auroraConfig.setPosition(getStringValue(settings, "auroraPosition", "left"));
                    auroraConfig.setLocale(getStringValue(settings, "auroraLocale", "zh-CN"));
                    baseConfig.setAurora(auroraConfig);
                    
                    log.info("Generated config: {}", baseConfig);
                    return baseConfig;
                });
    }

    // 辅助方法：从设置中获取字符串值
    private String getStringValue(Map<String, Object> settings, String key, String defaultValue) {
        Object value = settings.get(key);
        return value instanceof String ? (String) value : defaultValue;
    }
    
    // 辅助方法：从设置中获取布尔值
    private Boolean getBooleanValue(Map<String, Object> settings, String key, Boolean defaultValue) {
        Object value = settings.get(key);
        if (value instanceof Boolean) {
            return (Boolean) value;
        }
        if (value instanceof String) {
            return Boolean.parseBoolean((String) value);
        }
        return defaultValue;
    }
    
    // 辅助方法：从设置中获取整数值
    private Integer getIntValue(Map<String, Object> settings, String key, Integer defaultValue) {
        Object value = settings.get(key);
        if (value instanceof Integer) {
            return (Integer) value;
        }
        if (value instanceof String) {
            try {
                return Integer.parseInt((String) value);
            } catch (NumberFormatException e) {
                return defaultValue;
            }
        }
        return defaultValue;
    }
} 
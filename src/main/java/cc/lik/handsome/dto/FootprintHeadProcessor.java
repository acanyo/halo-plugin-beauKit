package cc.lik.handsome.dto;

import cc.lik.handsome.service.SimpleConfigService;
import lombok.RequiredArgsConstructor;
import org.pf4j.PluginWrapper;
import org.springframework.stereotype.Component;
import org.springframework.util.PropertyPlaceholderHelper;
import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.model.IModel;
import org.thymeleaf.model.IModelFactory;
import org.thymeleaf.processor.element.IElementModelStructureHandler;
import reactor.core.publisher.Mono;
import run.halo.app.theme.dialect.TemplateHeadProcessor;

import java.util.Properties;

/**
 * 页面头部处理器
 * 负责在页面头部注入beauKit的配置和脚本
 */
@Component
@RequiredArgsConstructor
public class FootprintHeadProcessor implements TemplateHeadProcessor {

    static final PropertyPlaceholderHelper PROPERTY_PLACEHOLDER_HELPER =
        new PropertyPlaceholderHelper("${", "}");

    private final PluginWrapper pluginWrapper;
    private final SimpleConfigService configService;

    @Override
    public Mono<Void> process(ITemplateContext context, IModel model,
        IElementModelStructureHandler structureHandler) {
        return configService.getConfigJavaScript()
            .flatMap(configJs -> {
                final IModelFactory modelFactory = context.getModelFactory();
                
                Properties properties = new Properties();
                properties.setProperty("version", pluginWrapper.getDescriptor().getVersion());
                properties.setProperty("configJs", configJs);

                String script = PROPERTY_PLACEHOLDER_HELPER.replacePlaceholders("""
                    <!-- beauKit assets start -->
                    <!-- 预编译样式 -->
                    <link rel="stylesheet" href="/plugins/beauKit/assets/static/@css/beauKitLit.css?v=${version}">
                    
                    <!-- 配置脚本 -->
                    <script type="text/javascript">
                    // 插件配置
                    ${configJs}
                    console.log("beauKit配置已加载:", window.SWISS_KNIFE_CONFIG);
                    </script>
                    
                    <!-- 组件库脚本 -->
                    <script type="module" src="/plugins/beauKit/assets/static/@js/beauKitLit.js?v=${version}"></script>
                    
                    <!-- 组件初始化脚本 -->
                    <script type="text/javascript">
                        // 调试函数
                        function debugLog(message, data) {
                            console.log(`[beauKit] ${message}`, data || '');
                        }
                        
                        // 等待DOM加载完成
                        document.addEventListener('DOMContentLoaded', function() {
                            debugLog('DOM加载完成，初始化组件');
                            
                            // 等待组件库加载完成
                            setTimeout(function() {
                                // 获取配置
                                const config = window.SWISS_KNIFE_CONFIG || {};
                                debugLog('配置获取成功', config);
                                
                                // 初始化通知组件
                                if (config.notice && config.notice.enable) {
                                    debugLog('通知组件启用状态:', config.notice.enable);
                                    try {
                                        // 检查自定义组件是否注册成功
                                        if (window.customElements && window.customElements.get('notice-popup')) {
                                            debugLog('通知组件已注册，开始创建元素');
                                            const element = document.createElement('notice-popup');
                                            document.body.appendChild(element);
                                            debugLog('通知组件创建并附加到body');
                                        } else {
                                            console.error('通知组件未注册，等待组件加载完成');
                                            // 再次尝试延迟加载
                                            setTimeout(() => {
                                                if (window.customElements && window.customElements.get('notice-popup')) {
                                                    const element = document.createElement('notice-popup');
                                                    document.body.appendChild(element);
                                                    debugLog('通知组件延迟创建成功');
                                                } else {
                                                    console.error('通知组件最终加载失败');
                                                }
                                            }, 1000);
                                        }
                                    } catch(e) {
                                        console.error('初始化通知组件失败', e);
                                    }
                                }
                                
                                // 初始化字体设置组件
                                if (config.typography && config.typography.enable) {
                                    debugLog('字体设置组件启用状态:', config.typography.enable);
                                    try {
                                        // 检查自定义组件是否注册成功
                                        if (window.customElements && window.customElements.get('typography-settings')) {
                                            debugLog('字体设置组件已注册，开始创建元素');
                                            const element = document.createElement('typography-settings');
                                            element.setAttribute('force-config', 'true');
                                            document.body.appendChild(element);
                                            debugLog('字体设置组件创建并附加到body');
                                        } else {
                                            console.error('字体设置组件未注册，等待组件加载完成');
                                            // 再次尝试延迟加载
                                            setTimeout(() => {
                                                if (window.customElements && window.customElements.get('typography-settings')) {
                                                    const element = document.createElement('typography-settings');
                                                    element.setAttribute('force-config', 'true');
                                                    document.body.appendChild(element);
                                                    debugLog('字体设置组件延迟创建成功');
                                                } else {
                                                    console.error('字体设置组件最终加载失败');
                                                }
                                            }, 1000);
                                        }
                                        
                                        // 直接应用字体设置，不依赖组件
                                        if (config.typography.fontName && config.typography.fontUrl) {
                                            debugLog('应用自定义字体', {
                                                fontName: config.typography.fontName,
                                                fontUrl: config.typography.fontUrl
                                            });
                                            
                                            // 创建全局样式元素
                                            const style = document.createElement('style');
                                            style.id = 'beaukit-typography-style';
                                            style.textContent = `
                                                /* 自定义字体定义 */
                                                @font-face {
                                                    font-family: "${config.typography.fontName}";
                                                    src: url("${config.typography.fontUrl}");
                                                    font-display: swap;
                                                }
                                                
                                                /* 应用到全局 */
                                                body {
                                                    font-family: "${config.typography.fontName}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
                                                }
                                            `;
                                            
                                            // 移除已存在的样式（如果有）
                                            const existingStyle = document.getElementById('beaukit-typography-style');
                                            if (existingStyle) {
                                                existingStyle.remove();
                                            }
                                            
                                            // 添加到文档头部
                                            document.head.appendChild(style);
                                            debugLog('自定义字体样式已添加到文档');
                                        } else {
                                            debugLog('自定义字体配置不完整，未应用字体');
                                        }
                                    } catch(e) {
                                        console.error('初始化字体设置组件失败', e);
                                    }
                                }
                                
                                // 初始化Aurora-Dia小球组件
                                if (config.aurora && config.aurora.enable) {
                                    debugLog('Aurora小球组件启用状态:', config.aurora.enable);
                                    try {
                                        debugLog('正在加载Aurora小球组件...');
                                        
                                        // 创建aurora-loader脚本
                                        const script = document.createElement('script');
                                        script.type = 'module';
                                        script.src = '/plugins/beauKit/assets/static/js/index-_C78b3jH.js?v=${version}';
                                        
                                        // 添加加载事件监听
                                        script.onload = function() {
                                            debugLog('Aurora小球组件脚本加载成功');
                                            // 创建并配置Aurora小球元素
                                            setTimeout(function() {
                                                try {
                                                    // 尝试通过定制元素创建
                                                    if (window.customElements && window.customElements.get('aurora-dia')) {
                                                        debugLog('创建Aurora小球元素');
                                                        const aurora = document.createElement('aurora-dia');
                                                        if (config.aurora.position) {
                                                            aurora.setAttribute('position', config.aurora.position);
                                                            debugLog('设置Aurora位置:', config.aurora.position);
                                                        }
                                                        if (config.aurora.locale) {
                                                            aurora.setAttribute('locale', config.aurora.locale);
                                                            debugLog('设置Aurora语言:', config.aurora.locale);
                                                        }
                                                        document.body.appendChild(aurora);
                                                        debugLog('Aurora小球元素创建成功');
                                                    } else {
                                                        console.warn('Aurora小球组件未注册，无法创建元素');
                                                        // 检查全局定义
                                                        debugLog('检查全局定义:', {
                                                            customElements: !!window.customElements,
                                                            BeauKitComponents: !!window.BeauKitComponents
                                                        });
                                                    }
                                                } catch(e) {
                                                    console.error('创建Aurora小球元素失败', e);
                                                }
                                            }, 500);
                                        };
                                        
                                        script.onerror = function() {
                                            console.error('Aurora小球组件加载失败');
                                        };
                                        
                                        // 添加到文档中
                                        document.head.appendChild(script);
                                    } catch(e) {
                                        console.error('初始化Aurora组件失败', e);
                                    }
                                }
                                
                                // 应用深色模式设置
                                if (config.darkMode && config.darkMode.autoDetect) {
                                    debugLog('深色模式自动检测已启用');
                                    try {
                                        // 系统深色模式检测
                                        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
                                        
                                        // 网站深色模式检测
                                        const checkDarkMode = () => {
                                            const selector = config.darkMode.selector || '[data-color-schema="dark"]';
                                            
                                            try {
                                                // 如果是属性选择器
                                                if (selector.startsWith('[')) {
                                                    const isDark = !!document.querySelector(selector);
                                                    debugLog('深色模式检测(属性):', isDark);
                                                    return isDark;
                                                }
                                                // 如果是类选择器
                                                else if (selector.includes('.')) {
                                                    const [tagName, className] = selector.split('.');
                                                    const targetElement = tagName ? document.querySelector(tagName) : document.documentElement;
                                                    const isDark = targetElement && targetElement.classList.contains(className);
                                                    debugLog('深色模式检测(类名):', isDark);
                                                    return isDark;
                                                }
                                                // 默认情况
                                                else {
                                                    const isDark = document.documentElement.classList.contains(selector);
                                                    debugLog('深色模式检测(默认):', isDark);
                                                    return isDark;
                                                }
                                            } catch (e) {
                                                console.error('深色模式检测发生错误:', e);
                                                return prefersDark.matches;
                                            }
                                        };
                                        
                                        // 设置文档主题
                                        const setTheme = (isDark) => {
                                            const themeClass = config.darkMode.themeClass || 'dark';
                                            document.documentElement.classList.toggle(themeClass, isDark);
                                            
                                            // 设置全局变量供组件使用
                                            window.SWISS_KNIFE_DARK_MODE = isDark;
                                            
                                            // 触发主题变更事件，通知所有组件
                                            document.dispatchEvent(new CustomEvent('beaukit-theme-change', { 
                                                detail: { isDark }
                                            }));
                                            
                                            debugLog('设置深色模式完成:', isDark);
                                        };
                                        
                                        // 初始检测
                                        const isDark = checkDarkMode() || prefersDark.matches;
                                        setTheme(isDark);
                                        
                                        // 监听系统主题变化
                                        prefersDark.addEventListener('change', (e) => {
                                            debugLog('系统主题变化:', e.matches);
                                            if (!checkDarkMode()) {
                                                setTheme(e.matches);
                                            }
                                        });
                                        
                                        // 监听DOM变化，检测网站主题变化
                                        const observer = new MutationObserver(() => {
                                            const isDarkNow = checkDarkMode();
                                            if (window.SWISS_KNIFE_DARK_MODE !== isDarkNow) {
                                                debugLog('网站主题变化检测:', isDarkNow);
                                                setTheme(isDarkNow);
                                            }
                                        });
                                        
                                        observer.observe(document.documentElement, {
                                            attributes: true,
                                            attributeFilter: ['data-color-schema', 'class']
                                        });
                                        debugLog('深色模式设置应用成功');
                                    } catch(e) {
                                        console.error('应用深色模式设置失败', e);
                                    }
                                }
                            }, 500); // 等待组件库加载完成
                        });
                    </script>
                    <!-- beauKit assets end -->
                    """, properties);
                
                model.add(modelFactory.createText(script));
                return Mono.empty();
            });
    }
}

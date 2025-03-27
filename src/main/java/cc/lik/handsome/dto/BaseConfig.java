package cc.lik.handsome.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseConfig {
    @Schema(description = "通知组件配置")
    private NoticeConfig notice;
    @Schema(description = "字体设置组件配置")
    private TypographyConfig typography;
    @Schema(description = "Aurora-Dia 小球组件配置")
    private AuroraConfig aurora;
    @Schema(description = "深色模式配置")
    private DarkModeConfig darkMode;
    @Data
    @Schema(description = "通知组件配置")
    public static class NoticeConfig {

        @Schema(description = "是否启用公告组件", defaultValue = "false")
        private Boolean enable;

        @Schema(description = "显示间隔时间（小时）", defaultValue = "0")
        @Min(0)
        private Integer showInterval;

        @Schema(description = "显示延迟时间（毫秒）", defaultValue = "1000")
        @Min(0)
        private Integer showDelay;

        @Schema(description = "公告标题", defaultValue = "网站公告")
        @NotBlank
        private String title;

        @Schema(description = "公告正文内容")
        private String content;

        @Schema(description = "公告显示时长（毫秒）", defaultValue = "5000")
        @Min(0)
        private Integer showTime;

        @Schema(description = "通知显示位置", defaultValue = "center")
        @Pattern(regexp = "^(center|top-left|top-right|bottom-right|bottom-left)$")
        private String position;

        @Schema(description = "按钮配置")
        private ButtonsConfig buttons;
    }

    @Data
    @Schema(description = "按钮配置")
    public static class ButtonsConfig {

        @Schema(description = "确认按钮HTML内容")
        private String confirm;

        @Schema(description = "关闭按钮HTML内容")
        private String close;
    }

    @Data
    @Schema(description = "深色模式配置")
    public static class DarkModeConfig {

        @Schema(description = "是否自动跟随系统或网站主题", defaultValue = "true")
        private Boolean autoDetect;

        @Schema(description = "深色模式检测选择器")
        private String selector;

        @Schema(description = "自定义深色模式适配", defaultValue = "dark")
        private String themeClass;
    }

    @Data
    @Schema(description = "字体设置组件配置")
    public static class TypographyConfig {

        @Schema(description = "是否启用字体设置组件", defaultValue = "false")
        private Boolean enable;

        @Schema(description = "字体名称")
        private String fontName;

        @Schema(description = "字体资源地址")
        private String fontUrl;
    }

    @Data
    @Schema(description = "Aurora-Dia 小球组件配置")
    public static class AuroraConfig {

        @Schema(description = "是否启用Aurora-Dia组件", defaultValue = "true")
        private Boolean enable;

        @Schema(description = "组件显示位置", defaultValue = "left")
        @Pattern(regexp = "^(left|right)$")
        private String position;

        @Schema(description = "组件语言设置", defaultValue = "zh-CN")
        @Pattern(regexp = "^(zh-CN|zh-TW|en)$")
        private String locale;
    }
}


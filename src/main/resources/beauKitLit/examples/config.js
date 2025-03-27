/**
 * Swiss Knife 全局配置对象
 * @type {Object}
 */
window.SWISS_KNIFE_CONFIG = window.SWISS_KNIFE_CONFIG || {};

// 通知组件配置
window.SWISS_KNIFE_CONFIG.notice = {
  /**
   * 是否启用公告组件
   * @type {boolean}
   * @default false
   */
  enable: true,

  /**
   * 显示间隔时间（小时）
   * 0表示每次都显示，大于0表示间隔指定小时后再显示
   * @type {number}
   * @default 0
   * @example
   * // 每次都显示
   * showInterval: 0
   * 
   * // 24小时显示一次
   * showInterval: 24
   * 
   * // 一周显示一次
   * showInterval: 168
   */
  showInterval: 0,

  /** 
   * 显示延迟时间（毫秒）
   * @type {number}
   * @default 1000
   */
  showDelay: 1000,

  /**
   * 公告标题
   * @type {string}
   * @default "网站公告"
   */
  title: '网站公告',

  /**
   * 公告正文内容
   * @type {string}
   * @default ""
   */
  content: '欢迎访问我的博客！这是一个使用 Lit + Tailwind CSS 构建的现代化网站。',

  /**
   * 公告显示时长（毫秒）
   * 设置为 0 则不会自动关闭
   * @type {number}
   * @default 5000
   */
  showTime: 5000,

  /**
   * 通知显示位置
   * @type {string}
   * @default "center"
   * @example
   * // 居中显示（默认）
   * position: "center"
   * 
   * // 左上角
   * position: "top-left"
   * 
   * // 右上角
   * position: "top-right"
   * 
   * // 右下角
   * position: "bottom-right"
   * 
   * // 左下角
   * position: "bottom-left"
   */
  position: 'center',
  
  /**
   * 按钮配置
   * @namespace
   */
  buttons: {
    /**
     * 确认按钮HTML内容
     * 支持HTML标签和样式
     * @type {string}
     * @default "查看详情"
     * @example
     * // 使用普通超链接
     * confirm: '<a href="https://example.com" target="_blank">查看详情</a>'
     * 
     * // 使用图标和超链接
     * confirm: '<a href="https://example.com"><svg style="width: 16px; height: 16px; margin-right: 4px;" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>查看详情</a>'
     * 
     * // 使用自定义样式
     * confirm: '<a href="https://example.com" style="color: #ff0000;">查看详情</a>'
     */
    confirm: '<a href="https://www.baidu.com" target="_blank">查看详情</a>',
    
    /**
     * 关闭按钮HTML内容
     * 支持HTML标签和样式
     * @type {string}
     * @default "稍后查看"
     */
    close: '稍后查看'
  },
  
  /**
   * 深色模式配置
   * @namespace
   */
  darkMode: {
    /**
     * 是否自动跟随系统或网站主题
     * @type {boolean}
     * @default true
     */
    autoDetect: true,
    
    /**
     * 深色模式检测选择器
     * 设置用于检测网站是否处于深色模式的DOM选择器
     * @type {string}
     * @default "html.dark"
     * @example
     * - "html.dark" - 检测html标签是否有dark类
     * - "body.dark-theme" - 检测body标签是否有dark-theme类
     * - "[data-theme='dark']" - 检测是否有data-theme属性为dark的元素
     * - "[data-color-schema='dark']" - 检测是否有data-color-schema属性为dark的元素
     */
    selector: '[data-color-schema="dark"]',
    
    /**
     * 自定义深色模式适配
     * 设置组件在深色模式下应该使用的主题类名
     * @type {string}
     * @default "dark"
     */
    themeClass: 'dark'
  }
}

// 字体设置组件配置
window.SWISS_KNIFE_CONFIG.typography = {
  /**
   * 是否启用字体设置组件
   * @type {boolean}
   * @default false
   */
  enable: true,

  /**
   * 字体名称
   * @type {string}
   */
  fontName: 'LXGW WenKai',

  /**
   * 字体资源地址
   * @type {string}
   * @example
   * // 使用woff2文件
   * fontUrl: '/fonts/your-font.woff2'
   * // 使用CSS文件
   * fontUrl: '/fonts/your-font.css'
   */
  fontUrl: 'https://cdn.jsdmirror.com/gh/acanyo/mmm.sd@master/assets/font/lxwk.woff2'
}

// Aurora-Dia 小球组件配置
window.SWISS_KNIFE_CONFIG.aurora = {
  /**
   * 是否启用Aurora-Dia组件
   * @type {boolean}
   * @default true
   */
  enable: true,

  /**
   * 组件显示位置
   * @type {string}
   * @default "left"
   * @example
   * // 左侧显示
   * position: "left"
   * 
   * // 右侧显示
   * position: "right"
   */
  position: 'right',

  /**
   * 组件语言设置
   * @type {string}
   * @default "zh-CN"
   * @example
   * // 简体中文
   * locale: "zh-CN"
   * 
   * // 繁体中文
   * locale: "zh-TW"
   * 
   * // 英文
   * locale: "en"
   */
  locale: 'zh-CN'
}

// 播放器配置
window.SWISS_KNIFE_CONFIG.player = {
  /**
   * 是否启用播放器
   * @type {boolean}
   * @default true
   */
  enable: false,

  /**
   * 播放器ID
   * @type {string}
   * @default "173194061844"
   */
  playerId: '173194061844',

  /**
   * 播放模式
   * @type {number}
   * @default 1
   */
  mode: 1
} 
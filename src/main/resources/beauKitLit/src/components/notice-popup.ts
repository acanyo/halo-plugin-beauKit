import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'

/**
 * 主题检测配置接口
 */
interface ThemeDetectConfig {
  /** 是否自动跟随系统或网站主题 */
  autoDetect: boolean
  /** 深色模式检测选择器 */
  selector: string
  /** 自定义深色模式适配类名 */
  themeClass: string
}

/**
 * 通知弹窗配置接口
 * 定义了通知弹窗所需的基本配置项
 */
interface NoticeConfig {
  /** 是否启用通知弹窗 */
  enable: boolean
  /** 显示间隔时间（小时） */
  showInterval: number
  /** 显示延迟时间（毫秒） */
  showDelay: number
  /** 通知标题 */
  title: string
  /** 通知内容 */
  content: string
  /** 通知显示时长（毫秒），0表示不自动关闭 */
  showTime: number
  /** 通知显示位置 */
  position: string
  /** 按钮配置 */
  buttons?: {
    /** 确认按钮HTML内容 */
    confirm?: string
    /** 关闭按钮HTML内容 */
    close?: string
  }
  /** 深色模式配置 */
  darkMode?: ThemeDetectConfig
}

/**
 * 通知弹窗Web组件
 * 支持亮色/深色主题，自动跟随系统主题
 * 提供淡入淡出动画效果
 * 可配置显示时长和位置
 */
@customElement('notice-popup')
export class NoticePopup extends LitElement {
  // 组件样式定义
  static styles = css`
    /* 组件根元素样式 */
    :host {
      display: contents;
    }

    /* 亮色主题变量定义 */
    .light {
      /* 卡片基础样式 */
      --card-bg: #fff;
      --card-border: #e5e7eb;
      --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      
      /* 文字颜色 */
      --title-color: #374151;
      --content-color: #6B7280;
      
      /* 图标样式 */
      --icon-bg: #3b82f6;
      --icon-color: #ffffff;
      --icon-shadow: none;
      
      /* 主按钮样式 */
      --primary-btn-bg: #3b82f6;
      --primary-btn-color: #ffffff;
      --primary-btn-hover: #2563eb;
      --primary-btn-shadow: none;
      
      /* 次要按钮样式 */
      --secondary-btn-bg: #F3F4F6;
      --secondary-btn-color: #4B5563;
      --secondary-btn-hover: #E5E7EB;
      --secondary-btn-border: none;
      
      /* 特效 */
      --backdrop-filter: none;
    }

    /* 深色主题变量定义 */
    .dark {
      /* 卡片基础样式 */
      --card-bg: #000;
      --card-border: rgba(255, 255, 255, 0.1);
      --card-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      
      /* 文字颜色 */
      --title-color: rgba(255, 255, 255, 0.95);
      --content-color: rgba(255, 255, 255, 0.7);
      
      /* 图标样式 */
      --icon-bg: #3b82f6;
      --icon-color: rgba(255, 255, 255, 0.95);
      --icon-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      /* 主按钮样式 */
      --primary-btn-bg: #3b82f6;
      --primary-btn-color: rgba(255, 255, 255, 0.95);
      --primary-btn-hover: #2563eb;
      --primary-btn-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      /* 次要按钮样式 */
      --secondary-btn-bg: rgba(255, 255, 255, 0.1);
      --secondary-btn-color: rgba(255, 255, 255, 0.9);
      --secondary-btn-hover: rgba(255, 255, 255, 0.15);
      --secondary-btn-border: 1px solid rgba(255, 255, 255, 0.1);
      
      /* 特效 */
      --backdrop-filter: blur(12px);
    }

    /* 通知卡片容器 */
    .hs-card {
      position: fixed;
      z-index: 9999;
      max-width: 320px;
      border-radius: 1.25rem;
      padding: 1.25rem;
      background-color: var(--card-bg);
      border: 1px solid var(--card-border);
      box-shadow: var(--card-shadow);
      backdrop-filter: var(--backdrop-filter);
      -webkit-backdrop-filter: var(--backdrop-filter);
    }

    /* 通知头部样式 */
    .hs-header {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      margin-bottom: 0.75rem;
    }

    /* 图标容器样式 */
    .hs-icon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      background-color: var(--icon-bg);
      color: var(--icon-color);
      box-shadow: var(--icon-shadow);
    }

    /* 图标大小 */
    .hs-icon svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    /* 标题样式 */
    .hs-alert {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.4;
      color: var(--title-color);
    }

    /* 内容样式 */
    .hs-message {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.5;
      color: var(--content-color);
    }

    /* 按钮容器样式 */
    .hs-actions {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      margin-top: 1.25rem;
    }

    /* 按钮基础样式 */
    .hs-actions > a {
      display: block;
      text-decoration: none !important;
      text-align: center;
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.75rem 1.25rem;
      border-radius: 0.75rem;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease;
    }

    /* 主按钮样式 */
    .hs-read {
      background-color: var(--primary-btn-bg);
      color: var(--primary-btn-color) !important;
      border: none;
      box-shadow: var(--primary-btn-shadow);
    }

    .hs-read:hover {
      background-color: var(--primary-btn-hover);
      text-decoration: none !important;
    }

    /* 次要按钮样式 */
    .hs-mark-as-read {
      background-color: var(--secondary-btn-bg);
      color: var(--secondary-btn-color) !important;
      border: var(--secondary-btn-border);
      box-shadow: var(--secondary-btn-shadow);
    }

    .hs-mark-as-read:hover {
      background-color: var(--secondary-btn-hover);
      text-decoration: none !important;
    }

    /* 按钮内容样式 */
    .hs-actions > a > * {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .hs-actions > a svg {
      width: 1rem;
      height: 1rem;
    }

    /* 居中定位样式 */
    .hs-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* 左上角定位样式 */
    .hs-top-left {
      top: 1.25rem;
      left: 1.25rem;
    }

    /* 右上角定位样式 */
    .hs-top-right {
      top: 1.25rem;
      right: 1.25rem;
    }

    /* 右下角定位样式 */
    .hs-bottom-right {
      bottom: 1.25rem;
      right: 1.25rem;
    }

    /* 左下角定位样式 */
    .hs-bottom-left {
      bottom: 1.25rem;
      left: 1.25rem;
    }

    /* 动画相关样式 */
    .hs-fade-in {
      animation: hsFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hs-fade-out {
      animation: hsFadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* 淡入动画 */
    @keyframes hsFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* 淡出动画 */
    @keyframes hsFadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `

  /** 主题属性，支持亮色/深色 */
  @property({ type: String })
  theme: 'light' | 'dark' = 'light'

  /** 通知配置属性 */
  @property({ type: Object })
  config: NoticeConfig = (window as any).SWISS_KNIFE_CONFIG?.notice || {
    enable: false,
    showInterval: 0,
    showDelay: 0,
    title: '',
    content: '',
    showTime: 0,
    position: 'bottom-right'
  }

  /** 关闭定时器ID */
  private closeTimeout?: number
  
  /** 主题监听器 */
  private themeObserver?: MutationObserver
  
  /** 检测网站当前主题 */
  private detectTheme(): 'light' | 'dark' {
    if (!this.config?.darkMode?.autoDetect) return this.theme;
    
    try {
      // 先检查全局变量
      if (typeof (window as any).SWISS_KNIFE_DARK_MODE === 'boolean') {
        console.log('Swiss Knife Notice: 从全局变量检测主题', (window as any).SWISS_KNIFE_DARK_MODE);
        return (window as any).SWISS_KNIFE_DARK_MODE ? 'dark' : 'light';
      }
      
      const selector = this.config.darkMode.selector || 'html.dark';
      
      // 处理属性选择器 [data-xxx="yyy"]
      if (selector.startsWith('[') && selector.includes('=')) {
        return document.querySelector(selector) ? 'dark' : 'light';
      }
      
      // 处理类选择器 (如 html.dark 或 body.night-mode)
      else if (selector.includes('.')) {
        const [tagName, className] = selector.split('.');
        const targetElement = tagName ? document.querySelector(tagName) : document.documentElement;
        return targetElement && targetElement.classList.contains(className) ? 'dark' : 'light';
      }
      
      // 默认检查document.documentElement是否包含指定的类
      const themeClass = this.config.darkMode.themeClass || 'dark';
      return document.documentElement.classList.contains(themeClass) ? 'dark' : 'light';
    } catch (e) {
      console.warn('Swiss Knife Notice: 主题检测失败，回退到系统主题', e);
      return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    }
  }
  
  /** 更新组件主题 */
  private updateTheme() {
    const newTheme = this.detectTheme();
    if (this.theme !== newTheme) {
      console.log('Swiss Knife Notice: 主题更新', this.theme, '->', newTheme);
      this.theme = newTheme;
    }
  }

  /** 检查是否应该显示通知 */
  private shouldShow(): boolean {
    if (!this.config?.enable) return false;
    if (!this.config.showInterval) return true;
    const last = localStorage.getItem('sk-notice-last');
    if (!last) return true;
    return (Date.now() - parseInt(last, 10)) / 3600000 >= this.config.showInterval;
  }

  /** 记录显示时间 */
  private recordShowTime() {
    localStorage.setItem('sk-notice-last', Date.now().toString());
  }

  /** 组件挂载时的处理 */
  connectedCallback() {
    super.connectedCallback()

    // 重新获取最新配置
    const latestConfig = (window as any).SWISS_KNIFE_CONFIG?.notice
    if (latestConfig) {
      this.config = latestConfig
    }

    // 严格检查配置和 enable
    if (!this.config || this.config.enable !== true) {
      console.log('Swiss Knife Notice: 组件未启用或配置无效', this.config)
      this.remove()
      return
    }

    // 检查是否应该显示通知
    if (!this.shouldShow()) {
      console.log('Swiss Knife Notice: 不满足显示条件')
      this.remove()
      return
    }

    // 记录显示时间
    this.recordShowTime()

    // 设置主题
    this.theme = this.detectTheme()
    console.log('Swiss Knife Notice: 初始主题设置为', this.theme)
    
    // 设置主题监听
    this.setupThemeObserver()

    // 延迟显示
    if (this.config.showDelay > 0) {
      setTimeout(() => {
        this.showNotice()
      }, this.config.showDelay)
    } else {
      this.showNotice()
    }
  }

  /** 组件卸载时的清理工作 */
  disconnectedCallback() {
    super.disconnectedCallback()
    // 清除可能存在的定时器
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout)
    }
    
    // 清除主题监听器
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }
  
  /** 设置主题监听器 */
  private setupThemeObserver() {
    try {
      // 监听beaukit-theme-change事件 - 这是主要的主题变更通知机制
      document.addEventListener('beaukit-theme-change', (event: any) => {
        console.log('Swiss Knife Notice: 收到主题变更事件', event.detail);
        this.theme = event.detail?.isDark ? 'dark' : 'light';
      });
      
      // 如果已经存在观察器，先断开连接
      if (this.themeObserver) {
        this.themeObserver.disconnect();
      }
      
      // 创建DOM变化观察器作为备份检测机制
      this.themeObserver = new MutationObserver(() => {
        // 主题可能已经改变，更新组件主题
        this.updateTheme();
      });
      
      // 确定要观察的元素和属性
      const selector = this.config?.darkMode?.selector || 'html.dark';
      
      // 对于属性选择器
      if (selector.startsWith('[')) {
        const attrMatch = selector.match(/\[([^\]]+)\]/);
        if (attrMatch && attrMatch[1]) {
          const attrName = attrMatch[1].split('=')[0];
          
          this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [attrName],
            subtree: true
          });
        }
      } 
      // 对于类选择器
      else if (selector.includes('.')) {
        const [tagName, _] = selector.split('.');
        const targetElement = tagName ? document.querySelector(tagName) : document.documentElement;
        
        if (targetElement) {
          this.themeObserver.observe(targetElement, {
            attributes: true,
            attributeFilter: ['class']
          });
        } else {
          // 如果找不到指定元素，观察document.documentElement
          this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
          });
        }
      } 
      // 默认情况
      else {
        this.themeObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        });
      }
      
      // 监听系统主题变化
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleMediaChange = () => this.updateTheme();
      
      if ('addEventListener' in mediaQuery) {
        mediaQuery.addEventListener('change', handleMediaChange);
      } else {
        // @ts-ignore - 兼容旧版浏览器
        mediaQuery.addListener(handleMediaChange);
      }
      
      console.log('Swiss Knife Notice: 主题监听器设置完成');
    } catch (e) {
      console.warn('Swiss Knife Notice: 设置主题监听器失败', e);
    }
  }

  /** 显示通知的处理方法 */
  private showNotice() {
    // 如果设置了显示时长，则自动关闭
    if (this.config.showTime > 0) {
      this.closeTimeout = window.setTimeout(() => {
        this.closeNotice()
      }, this.config.showTime)
    }
  }

  /** 关闭通知的处理方法 */
  private handleClose(e: Event) {
    // 阻止事件冒泡
    e.stopPropagation();
    
    // 获取点击的元素
    const target = e.target as HTMLElement;
    
    // 如果没有目标元素（比如自动关闭），直接关闭通知
    if (!target) {
      this.closeNotice();
      return;
    }
    
    // 获取最近的链接祖先元素
    const linkElement = target.closest('a[href]');
    
    // 如果点击的是链接或链接内的元素
    if (linkElement) {
      // 延迟关闭窗口，确保链接跳转已经开始
      setTimeout(() => {
        this.closeNotice();
      }, 100);
      return;
    }
    
    // 如果不是链接，直接关闭
    e.preventDefault();
    this.closeNotice();
  }

  /** 关闭通知 */
  private closeNotice() {
    // 清除定时器
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout)
    }
    // 添加淡出动画并移除组件
    const notice = this.shadowRoot?.querySelector('.hs-card')
    if (notice) {
      notice.classList.remove('hs-fade-in')
      notice.classList.add('hs-fade-out')
      setTimeout(() => {
        this.remove()
      }, 300)
    }
  }

  /** 处理HTML内容，为按钮添加样式 */
  private processHTML(html: string, isConfirm: boolean = true): string {
    const template = document.createElement('template');
    
    // 检查是否是纯文本
    if (!html.includes('<')) {
      template.innerHTML = `<a class="${isConfirm ? 'hs-read' : 'hs-mark-as-read'}">${html}</a>`;
      return template.innerHTML;
    }

    template.innerHTML = html;
    
    // 查找所有按钮和链接
    const elements = template.content.querySelectorAll('a, button');
    if (elements.length === 0) {
      // 如果没有找到按钮或链接，将整个内容包装在按钮中
      template.innerHTML = `<a class="${isConfirm ? 'hs-read' : 'hs-mark-as-read'}">${html}</a>`;
    } else {
      elements.forEach(element => {
        // 添加基础样式类
        element.classList.add(isConfirm ? 'hs-read' : 'hs-mark-as-read');
      });
    }
    
    return template.innerHTML;
  }

  /** 渲染组件 */
  render() {
    // 如果未启用，则不渲染
    if (!this.config?.enable) return html``

    return html`
      <div class="hs-card hs-${this.config.position} hs-fade-in ${this.theme}">
        <div class="hs-header">
          <span class="hs-icon">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
            </svg>
          </span>
          <p class="hs-alert">${this.config.title}</p>
        </div>

        <p class="hs-message">${this.config.content}</p>

        <div class="hs-actions" @click=${this.handleClose}>
          ${this.config.buttons?.confirm ? 
            html`${unsafeHTML(this.processHTML(this.config.buttons.confirm, true))}` : 
            html`<a class="hs-read">查看详情</a>`
          }
          ${this.config.buttons?.close ? 
            html`${unsafeHTML(this.processHTML(this.config.buttons.close, false))}` : 
            html`<a class="hs-mark-as-read">稍后查看</a>`
          }
        </div>
      </div>
    `
  }
}

// 自动初始化处理
window.addEventListener('DOMContentLoaded', () => {
  // 确保配置对象存在
  if (typeof (window as any).SWISS_KNIFE_CONFIG === 'undefined') {
    console.warn('Swiss Knife Notice: 未找到配置对象')
    return
  }

  const config = (window as any).SWISS_KNIFE_CONFIG?.notice
  console.log('Swiss Knife Notice: 当前配置', config)

  // 严格检查 enable 为 true
  if (config && config.enable === true) {
    console.log('Swiss Knife Notice: 准备创建组件，等待页面完全渲染')
    
    // 延迟创建弹窗，确保主题已完全应用
    const createPopup = () => {
      // 确保全局变量已设置
      if (typeof (window as any).SWISS_KNIFE_DARK_MODE === 'undefined') {
        console.log('Swiss Knife Notice: 等待主题变量设置')
        // 再等待一小段时间，确保主题变量已设置
        setTimeout(createPopup, 200)
        return
      }
      
      console.log('Swiss Knife Notice: 页面已渲染完成，创建弹窗组件')
      
      // 创建通知组件实例
      const popup = document.createElement('notice-popup') as NoticePopup
      
      // 设置初始主题
      const isDark = (window as any).SWISS_KNIFE_DARK_MODE
      popup.theme = isDark ? 'dark' : 'light'
      console.log('Swiss Knife Notice: 通过全局变量设置初始主题:', popup.theme)
      
      // 添加到文档中
      document.body.appendChild(popup)
    }
    
    // 使用多层保障确保在页面完全渲染后创建弹窗
    if (document.readyState === 'complete') {
      // 如果页面已完全加载
      setTimeout(() => {
        requestAnimationFrame(createPopup)
      }, config.showDelay || 1000) // 使用配置的延迟时间，或默认1000ms
    } else {
      // 等待页面完全加载
      window.addEventListener('load', () => {
        setTimeout(() => {
          requestAnimationFrame(createPopup)
        }, config.showDelay || 1000)
      })
    }
  } else {
    console.log('Swiss Knife Notice: 组件未启用', config?.enable)
  }
}) 
import { TailwindLitElement } from '../custom-lit-element';
import { customElement, property } from 'lit/decorators.js';

/**
 * 字体配置接口
 */
interface TypographyConfig {
  /** 是否启用字体设置 */
  enable: boolean;
  /** 字体名称 */
  fontName: string;
  /** 字体资源地址 */
  fontUrl: string;
}

@customElement('typography-settings')
export class TypographySettings extends TailwindLitElement {
  /** 字体设置配置属性 */
  @property({ type: Object })
  config: TypographyConfig = (window as any).SWISS_KNIFE_CONFIG?.typography || {
    enable: false,
    fontName: 'system-ui',
    fontUrl: ''
  };

  private async loadFont() {
    try {
      const isCSS = this.config.fontUrl.endsWith('.css');
      
      if (!isCSS) {
        const fontFace = new FontFace(this.config.fontName, `url(${this.config.fontUrl})`);
        await fontFace.load();
        document.fonts.add(fontFace);
      } else {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = this.config.fontUrl;
        await new Promise((resolve, reject) => {
          link.onload = resolve;
          link.onerror = reject;
          document.head.appendChild(link);
        });
      }

      document.documentElement.style.setProperty('--custom-font', this.config.fontName);
      document.body.style.fontFamily = `var(--custom-font), system-ui`;
    } catch (error) {
      console.error('字体加载失败:', error);
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    
    const config = (window as any).SWISS_KNIFE_CONFIG?.typography;
    if (!config?.enable || !config.fontName || !config.fontUrl) {
      this.remove();
      return;
    }

    this.config = config;
    await this.loadFont();
  }
}

// 延迟初始化，等待主要内容加载完成
let initTimeout: number;
window.addEventListener('load', () => {
  if (typeof (window as any).SWISS_KNIFE_CONFIG?.typography?.enable === 'boolean') {
    initTimeout = window.setTimeout(() => {
      const typography = document.createElement('typography-settings');
      document.body.appendChild(typography);
    }, 0);
  }
}, { once: true });

// 清理定时器
window.addEventListener('unload', () => {
  if (initTimeout) {
    clearTimeout(initTimeout);
  }
}, { once: true });

declare global {
  interface HTMLElementTagNameMap {
    'typography-settings': TypographySettings;
  }
} 
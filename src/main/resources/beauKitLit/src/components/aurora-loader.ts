/**
 * Aurora-Dia 小球组件加载器
 * 负责按需加载aurora-dia组件
 */

// 声明全局配置类型
declare global {
  interface Window {
    SWISS_KNIFE_CONFIG?: {
      aurora?: {
        enable: boolean;
        position: 'left' | 'right';
        locale: 'zh-CN' | 'zh-TW' | 'en';
      };
      [key: string]: any;
    };
  }

  interface HTMLElementTagNameMap {
    'aurora-dia': HTMLElement;
  }
}

// Aurora-Dia加载函数
export function loadAuroraDia(): void {
  // 检查配置是否存在并启用
  if (window.SWISS_KNIFE_CONFIG?.aurora?.enable) {
    // 创建script元素
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/examples/index-_C78b3jH.js';
    
    // 添加到文档
    document.head.appendChild(script);

    // 等待组件加载完成
    script.onload = () => {
      setTimeout(() => {
        const config = window.SWISS_KNIFE_CONFIG?.aurora;
        const auroraDia = document.createElement('aurora-dia');
        auroraDia.setAttribute('position', config?.position || 'left');
        auroraDia.setAttribute('locale', config?.locale || 'zh-CN');
        document.body.appendChild(auroraDia);
      }, 500);
    };
  }
}

// 自动初始化函数
export function initAuroraDia(): void {
  // 如果DOM已经准备好，直接加载
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    loadAuroraDia();
  } else {
    // 否则等待DOM加载完成
    window.addEventListener('DOMContentLoaded', loadAuroraDia);
  }
}

// 立即执行初始化
initAuroraDia();

// 导出加载函数
export default loadAuroraDia; 
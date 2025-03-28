import './components/notice-popup'
import './components/typography-settings'
import './style.css'
// 导入aurora-dia小球组件加载器
import './components/aurora-loader'
import './components/player-loader'

export * from './components/notice-popup'
export * from './components/typography-settings'
// 导出aurora-loader
export * from './components/aurora-loader'

// 导出自定义Lit组件基类
export * from './custom-lit-element'

// 导入具体组件类型
import { NoticePopup } from './components/notice-popup'
import { TypographySettings } from './components/typography-settings'

// 在window上注册组件
declare global {
  interface Window {
    BeauKitComponents: {
      NoticePopup: typeof NoticePopup
      TypographySettings: typeof TypographySettings
    }
  }
}

// 初始化全局组件对象
window.BeauKitComponents = {
  NoticePopup,
  TypographySettings
}

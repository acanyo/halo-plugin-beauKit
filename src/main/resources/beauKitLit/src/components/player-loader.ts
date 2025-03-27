/**
 * 音乐播放器组件加载器
 * 负责按需加载音乐播放器组件
 */

// 加载播放器脚本
function loadPlayerScript(playerId: string, mode: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'myhk';
    script.src = `https://myhkw.cn/api/player/${playerId}`;
    script.setAttribute('key', playerId);
    script.setAttribute('m', String(mode || 1));
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load player script'));
    document.head.appendChild(script);
  });
}

// 清空控制台
function clearConsole(): void {
  // 延迟 3 秒后开始清除
  setTimeout(() => {
    console.clear();
    
    // 每隔 1 秒清除一次，持续 5 次
    let count = 0;
    const interval = setInterval(() => {
      console.clear();
      count++;
      if (count >= 5) {
        clearInterval(interval);
      }
    }, 1000);
  }, 3000);
}

// 播放器加载函数
export async function loadMusicPlayer(): Promise<void> {
  // 检查配置是否存在并启用
  if (window.SWISS_KNIFE_CONFIG?.player?.enable) {
    const config = window.SWISS_KNIFE_CONFIG.player;
    const playerId = config.playerId;
    
    if (!playerId) {
      console.error('播放器ID未配置');
      return;
    }

    try {
      // 1. 加载播放器脚本
      await loadPlayerScript(playerId, config.mode || 1);

      // 2. 清空控制台（多次清除确保完全清除）
      clearConsole();
    } catch (error) {
      console.error('加载播放器失败:', error);
    }
  }
}

// 自动初始化函数
export function initMusicPlayer(): void {
  // 如果DOM已经准备好，直接加载
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    loadMusicPlayer();
  } else {
    // 否则等待DOM加载完成
    window.addEventListener('DOMContentLoaded', loadMusicPlayer);
  }
}

// 立即执行初始化
initMusicPlayer();

// 导出加载函数
export default loadMusicPlayer; 
// YouTube视频URL生成工具函数
export const getYouTubeEmbedUrl = (videoId) => {
  if (!videoId) return '';
  // 添加更多参数确保嵌入播放正常
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
};

// 获取YouTube缩略图URL
export const getYouTubeThumbnail = (videoId, quality = 'maxresdefault') => {
  if (!videoId) return '';
  // quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

// 验证YouTube视频ID格式
export const isValidYouTubeId = (videoId) => {
  if (!videoId || typeof videoId !== 'string') return false;
  // YouTube视频ID通常是11个字符
  return /^[a-zA-Z0-9_-]{11}$/.test(videoId);
};


// TikTok video ID提取和URL处理工具函数

// 从TikTok URL中提取视频ID
export const getTikTokVideoId = (url) => {
  if (!url) return null;
  
  // TikTok URL格式示例：
  // https://www.tiktok.com/@username/video/1234567890123456789
  // https://vm.tiktok.com/ZMxxxx/
  // 注意：短链接 /t/ 格式需要先访问获取真实URL
  
  const patterns = [
    /tiktok\.com\/@[^/]+\/video\/(\d+)/,
    /tiktok\.com\/v\/(\d+)/,
    /vm\.tiktok\.com\/([a-zA-Z0-9]+)/,
    /tiktok\.com\/t\/([a-zA-Z0-9]+)/,  // 短链接格式
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return null;
};

// 生成TikTok嵌入URL
export const getTikTokEmbedUrl = (url) => {
  if (!url) return '';
  
  const videoId = getTikTokVideoId(url);
  if (!videoId) return url;
  
  // TikTok embed URL
  return `https://www.tiktok.com/embed/v2/${videoId}`;
};

// 验证是否为有效的TikTok URL
export const isValidTikTokUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return url.includes('tiktok.com') || url.includes('vm.tiktok.com');
};


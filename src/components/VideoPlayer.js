import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import TikTokPlayer from './TikTokPlayer';
import './VideoPlayer.style.css';

// 通用视频播放器组件，根据类型选择对应的播放器
const VideoPlayer = ({ video }) => {
  if (!video || !video.type || !video.url) {
    return (
      <div className="video-player-error">
        <p>Invalid video data</p>
      </div>
    );
  }

  const { type, url } = video;

  if (type === 'youtube') {
    // 从YouTube URL提取ID
    const videoId = extractYouTubeId(url);
    // 检测是否是 Shorts
    const isShorts = url.includes('/shorts/');
    return <YouTubePlayer videoId={videoId} isShorts={isShorts} />;
  }

  if (type === 'tiktok') {
    return <TikTokPlayer url={url} />;
  }

  return (
    <div className="video-player-error">
      <p>Unsupported video type: {type}</p>
    </div>
  );
};

// 从YouTube URL提取视频ID的辅助函数
const extractYouTubeId = (url) => {
  if (!url) return null;

  // 支持多种YouTube URL格式，包括 Shorts
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/, // 直接是ID格式
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
};

export default VideoPlayer;


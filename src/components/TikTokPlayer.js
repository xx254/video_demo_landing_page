import React from 'react';
import { isValidTikTokUrl } from '../utils/tiktokHelper';
import './TikTokPlayer.style.css';

const TikTokPlayer = ({ url }) => {
  if (!url || !isValidTikTokUrl(url)) {
    return (
      <div className="tiktok-player-error">
        <p>Invalid TikTok URL</p>
      </div>
    );
  }

  // 从TikTok URL提取视频ID并构建embed URL
  const videoId = extractVideoId(url);
  if (!videoId) {
    return (
      <div className="tiktok-player-error">
        <p>Invalid TikTok video ID</p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.7 }}>
          Please use full TikTok URL format:<br/>
          tiktok.com/@user/video/123...
        </p>
      </div>
    );
  }

  // 使用TikTok embed iframe URL
  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;

  return (
    <div className="tiktok-player-wrapper">
      <div className="tiktok-iframe-container">
        <iframe
          className="tiktok-player-iframe"
          src={embedUrl}
          title="TikTok video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
        />
      </div>
    </div>
  );
};

// 从TikTok URL提取视频ID
const extractVideoId = (url) => {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : '';
};

export default TikTokPlayer;


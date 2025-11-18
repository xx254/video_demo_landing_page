import React from 'react';
import { useVideos } from '../context/VideoContext';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import './VideoGrid.style.css';

const VideoGrid = ({ onMoreClick }) => {
  const { videos } = useVideos();

  if (!videos || videos.length === 0) {
    return (
      <div className="no-videos">
        <p>No video data available</p>
      </div>
    );
  }

  return (
    <div className="video-grid-container">
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className={video.id === 0 ? 'video-card-wrapper full-width' : 'video-card-wrapper'}>
            <VideoCard video={video} onMoreClick={onMoreClick} />
            {/* Case 0: 在卡片右侧显示 more videos */}
            {video.id === 0 && video.moreVideos && video.moreVideos.length > 0 && (
              <div className="inline-more-videos-row">
                {video.moreVideos.map((videoItem, index) => {
                  // 根据 label 确定样式类和图标
                  let labelClass = 'inline-video-label';
                  let icon = '';
                  
                  if (videoItem.label === 'Story-telling') {
                    labelClass += ' label-storytelling';
                    icon = '📖';
                  } else if (videoItem.label === 'Emotion') {
                    labelClass += ' label-emotion';
                    icon = '❤️';
                  } else if (videoItem.label === 'Multiple Avatars') {
                    labelClass += ' label-avatars';
                    icon = '👥';
                  } else if (videoItem.label && videoItem.label.includes('Multiple Language')) {
                    labelClass += ' label-language';
                    icon = '🌎';
                  }
                  
                  return (
                    <div key={index} className="inline-video-item">
                      {videoItem.label && (
                        <div className={labelClass}>
                          <span className="label-icon">{icon}</span>
                          <span className="label-text">{videoItem.label}</span>
                        </div>
                      )}
                      <VideoPlayer video={videoItem} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;


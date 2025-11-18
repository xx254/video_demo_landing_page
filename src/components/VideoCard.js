import React from 'react';
import VideoPlayer from './VideoPlayer';
import CategoryBadge from './CategoryBadge';
import './VideoCard.style.css';

const VideoCard = ({ video, onMoreClick }) => {
  const { id, title, description, beforeVideo, afterVideo, category, hideLabels, moreVideos, displayType } = video;

  // 判断是否有视频需要显示
  const hasVideos = beforeVideo || afterVideo;
  // 判断是否为单视频显示模式（只有afterVideo，没有beforeVideo）
  const isSingleVideo = !beforeVideo && afterVideo;

  return (
    <div className="video-card">
      <div className="video-card-header">
        <h3 className="video-card-title">{title}</h3>
        <CategoryBadge category={category} />
      </div>
      <p className="video-card-description">{description}</p>
      
      {/* 只在有视频时才显示视频区域 */}
      {hasVideos && (
        <>
          {isSingleVideo ? (
            // 单视频横版显示模式
            <div className="video-single">
              <VideoPlayer video={afterVideo} />
            </div>
          ) : (
            // 双视频对比显示模式
            <div className="video-comparison">
              <div className="video-section">
                {!hideLabels && <div className="video-label before-label">Original</div>}
                <VideoPlayer video={beforeVideo} />
              </div>
              
              <div className="video-section">
                {!hideLabels && <div className="video-label after-label">AI Remake</div>}
                <VideoPlayer video={afterVideo} />
              </div>
            </div>
          )}
        </>
      )}

      {/* More Button - 不显示 Case 0 的 More 按钮 */}
      {id !== 0 && moreVideos && moreVideos.length > 0 && (
        <button 
          className="more-button"
          onClick={() => onMoreClick(id)}
        >
          More ({moreVideos.length} more videos)
        </button>
      )}
    </div>
  );
};

export default VideoCard;


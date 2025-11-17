import React from 'react';
import { useVideos } from '../context/VideoContext';
import VideoPlayer from '../components/VideoPlayer';
import CategoryBadge from '../components/CategoryBadge';
import './VideoDetailPage.style.css';

const VideoDetailPage = ({ videoId, onBack }) => {
  const { videos } = useVideos();
  
  const video = videos.find(v => v.id === videoId);
  
  if (!video) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <h2>Video not found</h2>
          <button onClick={onBack} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { title, description, moreVideos, category } = video;

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button onClick={onBack} className="back-button">
          ← Back to Home
        </button>

        <div className="detail-header">
          <h1 className="detail-title">{title}</h1>
          <CategoryBadge category={category} />
        </div>
        
        <p className="detail-description">{description}</p>

        {/* More Videos Grid */}
        {moreVideos && moreVideos.length > 0 && (
          <div className="detail-more-section">
            <h2 className="more-section-title">More Videos</h2>
            <div className="detail-more-grid">
              {moreVideos.map((videoItem, index) => (
                <div key={index} className="detail-more-item">
                  <VideoPlayer video={videoItem} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetailPage;


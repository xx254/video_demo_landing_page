import React from 'react';
import { useVideos } from '../context/VideoContext';
import VideoCard from './VideoCard';
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
          <VideoCard key={video.id} video={video} onMoreClick={onMoreClick} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;


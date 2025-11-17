import React from 'react';
import { getYouTubeEmbedUrl, isValidYouTubeId } from '../utils/youtubeHelper';
import './YouTubePlayer.style.css';

const YouTubePlayer = ({ videoId, isShorts }) => {
  if (!videoId || !isValidYouTubeId(videoId)) {
    return (
      <div className="youtube-player-error">
        <p>Invalid video ID</p>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(videoId);

  return (
    <div className={`youtube-player-wrapper ${isShorts ? 'youtube-shorts' : ''}`}>
      <iframe
        className="youtube-player-iframe"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default YouTubePlayer;


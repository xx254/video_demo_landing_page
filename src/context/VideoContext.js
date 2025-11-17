import React, { createContext, useContext, useState } from 'react';
import { getVideoData } from '../utils/videoData';

const VideoContext = createContext();

export const useVideos = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideos must be used within a VideoProvider');
  }
  return context;
};

export const VideoProvider = ({ children }) => {
  const [videos] = useState(getVideoData());
  const [selectedVideo, setSelectedVideo] = useState(null);

  const value = {
    videos,
    selectedVideo,
    setSelectedVideo,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};


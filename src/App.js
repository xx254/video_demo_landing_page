import React, { useState } from 'react';
import { VideoProvider } from './context/VideoContext';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import VideoDetailPage from './pages/VideoDetailPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const goToDetail = (videoId) => {
    setSelectedVideoId(videoId);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setCurrentPage('home');
    setSelectedVideoId(null);
    window.scrollTo(0, 0);
  };

  return (
    <VideoProvider>
      <div className="app">
        {currentPage === 'home' ? (
          <>
            <Header />
            <VideoGrid onMoreClick={goToDetail} />
          </>
        ) : (
          <VideoDetailPage videoId={selectedVideoId} onBack={goToHome} />
        )}
      </div>
    </VideoProvider>
  );
}

export default App;


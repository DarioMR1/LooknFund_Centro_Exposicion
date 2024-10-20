import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronRight } from 'lucide-react';

const InspirationalVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [showControls]);

  const togglePlay = async () => {
    if (videoRef.current && isLoaded && !isBuffering) {
      try {
        if (isPlaying) {
          await videoRef.current.pause();
        } else {
          setIsBuffering(true);
          await videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error toggling play/pause:', error);
      } finally {
        setIsBuffering(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  const handleWaiting = () => {
    setIsBuffering(true);
  };

  const handleCanPlay = () => {
    setIsBuffering(false);
  };

  return (
    <section className="relative h-screen bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleProgress}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={handleLoadedMetadata}
        onWaiting={handleWaiting}
        onCanPlay={handleCanPlay}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div 
        className="absolute inset-0 flex items-center justify-center z-20"
        onMouseMove={() => setShowControls(true)}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Inspiring Change, One Story at a Time</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
            Discover how LooknFund is connecting hearts and minds across the globe.
          </p>
          {isLoaded && !isPlaying && (
            <button
              onClick={togglePlay}
              className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto"
              disabled={isBuffering}
            >
              {isBuffering ? (
                <span className="animate-spin mr-2">&#9696;</span>
              ) : (
                <Play size={24} className="mr-2" />
              )}
              {isBuffering ? 'Loading...' : 'Watch Our Story'}
            </button>
          )}
        </div>
      </div>
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 z-30">
          <div className="flex items-center justify-between">
            <button onClick={togglePlay} className="text-white hover:text-accent transition duration-300" disabled={isBuffering}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <div className="flex-grow mx-4">
              <div className="bg-white bg-opacity-20 h-1 rounded-full">
                <div
                  className="bg-accent h-1 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <button onClick={toggleMute} className="text-white hover:text-accent transition duration-300 mr-2">
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <button onClick={handleFullscreen} className="text-white hover:text-accent transition duration-300">
              <Maximize size={24} />
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 right-4 z-40">
        <button className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center">
          Explore More Stories <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default InspirationalVideo;
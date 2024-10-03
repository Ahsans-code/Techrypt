import React, { useRef, useState } from "react";
import "./VideoGallery.css";
import video1 from "../../assets/videos/WhatsApp Video 2024-10-04 at 2.32.08 AM.mp4";
import video2 from "../../assets/videos/WhatsApp Video 2024-10-04 at 2.32.05 AM.mp4";
import video3 from "../../assets/videos/WhatsApp Video 2024-10-04 at 2.32.02 AM.mp4";
import video4 from "../../assets/videos/WhatsApp Video 2024-10-04 at 2.37.37 AM.mp4";

const videoData = [
  {
    id: 1,
    title: "Social Media Marketing",
    url: video1,
    thumbnail: "https://via.placeholder.com/300x200.png?text=Intro+to+React",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    url: video2,
    thumbnail: "https://via.placeholder.com/300x200.png?text=JavaScript+Basics",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    url: video1,
    thumbnail: "https://via.placeholder.com/300x200.png?text=CSS+Flexbox+Guide",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    url: video4,
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=Understanding+the+DOM",
  },
];

const VideoGallery = () => {
  return (
    <>
      <h1 className="video-h1">Our Work</h1>
      <div className="video-gallery">
        {videoData.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

const VideoItem = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-item">
      <div className="video-container">
        <video className="video" ref={videoRef}>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="play-button" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <h2 className="video-h2">{video.title}</h2>
    </div>
  );
};

export default VideoGallery;

import React, { useRef, useState } from "react";
import "./VideoGallery.css";

const videoData = [
  {
    id: 1,
    title: "Introduction to React",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://via.placeholder.com/300x200.png?text=Intro+to+React",
  },
  {
    id: 2,
    title: "JavaScript Basics",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://via.placeholder.com/300x200.png?text=JavaScript+Basics",
  },
  {
    id: 3,
    title: "CSS Flexbox Guide",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://via.placeholder.com/300x200.png?text=CSS+Flexbox+Guide",
  },
  {
    id: 4,
    title: "Understanding the DOM",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=Understanding+the+DOM",
  },
  {
    id: 5,
    title: "Building a REST API",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=Building+a+REST+API",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=Responsive+Web+Design",
  },
  {
    id: 7,
    title: "React Hooks Explained",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=React+Hooks+Explained",
  },
  {
    id: 8,
    title: "CSS Grid Layout",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://via.placeholder.com/300x200.png?text=CSS+Grid+Layout",
  },
  {
    id: 9,
    title: "JavaScript ES6 Features",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=JavaScript+ES6+Features",
  },
  {
    id: 10,
    title: "Advanced CSS Techniques",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://via.placeholder.com/300x200.png?text=Advanced+CSS+Techniques",
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
      <h3 className="video-h3">GAMING → MMO</h3>
    </div>
  );
};

export default VideoGallery;

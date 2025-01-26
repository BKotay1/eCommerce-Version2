import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const ImageSlider = () => {
  // Define the videos in an array
  const videos = [
    "./public/video/first.MOV",
    "./public/video/second.mov",
    "./public/video/third.MOV",
  ];

  // Set the initial video index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle going to the next video manually
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to handle going to the previous video manually
  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="video-slider-container">
      {/* Left Arrow Button */}
      <button onClick={prevVideo} className="prev-btn">
        <ArrowBigLeft />
      </button>

      {/* Display the current video */}
      <div className="video-slider">
        <video
          src={videos[currentIndex]}
          className="slider-video"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Right Arrow Button */}
      <button onClick={nextVideo} className="next-btn">
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default ImageSlider;


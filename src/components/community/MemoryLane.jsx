import React, { useState, useEffect } from 'react';
import './MemoryLane.css';

const MemoryLane = () => {
  const [images, setImages] = useState([
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/men/6.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
  ]);

  // Animation controls for sliding images
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="memory-lane-container">
      <h2 className="memory-lane-heading heading">Memory Lane</h2>
      
      <div className="memory-lane-carousel">
        <button className="nav-button prev" onClick={prevSlide}>‹</button>
        
        <div className="memory-lane-slides">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`memory-lane-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <img 
                src={src} 
                alt={`Memory ${index + 1}`} 
                className="memory-lane-image"
              />
            </div>
          ))}
        </div>
        
        <button className="nav-button next" onClick={nextSlide}>›</button>
        
        <div className="slide-indicators">
          {images.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
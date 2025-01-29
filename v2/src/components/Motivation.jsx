import React from 'react';

// src/components/Motivation.jsx
const Motivation = () => (
    <div className="motivation">
      <div className="motivation-paragraph">
        Gain The Purpose! Watch this video that inspired the creation of <img src="/images/motivation.png" alt="motivation logo" className="motivation-logo" />
        . For more information, Let's Head to the <a href="/contact" id="contact-link">Contact Page!</a>
      </div>
      <iframe
        src="https://www.youtube.com/embed/WE50ZSVQeDs?si=Br9xwZ2TpGVVIdv2"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
  

export default Motivation;
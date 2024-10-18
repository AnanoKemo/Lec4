import React from 'react';
import './Card.css'; 

function Card({ isTitleVisible, handleTitleVisibility }) {
  return (
    <div className="card">
      {isTitleVisible && <h3>Starry Night</h3>}
      <img 
        src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg" 
        alt="Starry Night" 
      />
      <p>
        The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh, 
        painted in June 1889.
      </p>
      <button onClick={handleTitleVisibility}>
        show/hide
      </button>
    </div>
  );
}

export default Card;

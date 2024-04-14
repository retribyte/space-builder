import React from 'react';
import './assets/css/style.css';

const RightPanel = ({ isOpen, togglePanel }) => {
  return (
    <div className={`right-panel ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={togglePanel}>
        ☰
      </button>
      <div className="content">
        <h2>Right Panel Content</h2>
        <p>This is the content of the right panel.</p>
      </div>
    </div>
  );
};

export default RightPanel;

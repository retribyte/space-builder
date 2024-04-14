import React from 'react';
import './assets/css/style.css';

const RightPanel = ({ isOpen, togglePanel }) => {
  return (
    <div className={`right-panel ${isOpen ? 'open' : ''}`}>
      <div className="content">
        <h2>Information</h2>
        <p>This will contain info about what landmark the user clicks on</p>
      </div>
    </div>
  );
};

export default RightPanel;

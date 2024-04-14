import React from 'react';
import './assets/css/style.css';

const LeftPanel = ({ isOpen, togglePanel }) => {
    return (
      <div className={`left-panel ${isOpen ? 'open' : ''}`}>
        <div className="content">
          <h2>Left Panel Content</h2>
          <p>This is the content of the left panel.</p>
        </div>
      </div>
    );
  };
  
  export default LeftPanel;
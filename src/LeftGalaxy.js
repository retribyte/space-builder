import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/style.css';

const LeftPanel = ({ isOpen = true, togglePanel }) => {
  const [isChildrenPanelOpen, setIsChildrenPanelOpen] = useState(false);

  return (
    <div className={`left-panel ${isOpen ? 'open' : ''}`}>
      <section id="create-panel" className="col-md-2 px-0 text-light" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div id="create-panel-content" className="text-center">
            <h1>Territories etc</h1>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftPanel;

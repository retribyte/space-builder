import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPanel from './LeftGalaxy';

function GalaxyView() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);

  const toggleLeftPanel = () => {
    setLeftPanelOpen(!leftPanelOpen);
  };

  return (
    <div className="galaxy-page-container">
      <LeftPanel isOpen={leftPanelOpen} togglePanel={toggleLeftPanel} />
      
      <div className="button-container">
        <Link to="/system">
          <button>Solar System1</button>
        </Link>
      </div>

      <div className="galaxy-panels">
        <button className="toggle-button" onClick={toggleLeftPanel}>
        </button>
      </div>
    </div>
  );
}

export default GalaxyView;

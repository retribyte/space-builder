import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPanel from './LeftGalaxy';
import RightPanel from './RightGalaxy'; 

function GalaxyView() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);

  const toggleLeftPanel = () => {
    setLeftPanelOpen(!leftPanelOpen);
  };

  return (
    <div className="galaxy-page-container">
      <LeftPanel isOpen={leftPanelOpen} togglePanel={toggleLeftPanel} />
      <div className="galaxy-panels">
        <button className="toggle-button" onClick={toggleLeftPanel}>
        </button>
      </div>
      <RightPanel isOpen={true} /> 
      <button id="save" className="save-button" onClick={() => console.log("Save clicked")}>Save</button>
      <button id="load" className="load-button" onClick={() => console.log("Load clicked")}>Load</button>
    </div>
  );
}

export default GalaxyView;

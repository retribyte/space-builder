import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPanel from './LeftGalaxy';
import RightPanel from './RightGalaxy'; 
import GalaxyAdd from './GalaxyAdd';
import GalaxyCanvas from './GalaxyCanvas';

function GalaxyView() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [isGalaxyAddOpen, setIsGalaxyAddOpen] = useState(false);

  const toggleLeftPanel = () => {
    setLeftPanelOpen(!leftPanelOpen);
  };

  const toggleGalaxyAdd = () => {
    setIsGalaxyAddOpen(!isGalaxyAddOpen);
  };


  return (
    <div className="galaxy-page-container">
      <LeftPanel isOpen={leftPanelOpen} togglePanel={toggleLeftPanel} />
      <div className="galaxy-panels">
        <button className="toggle-button" onClick={toggleLeftPanel}>
          Create
        </button>

      </div>
        <GalaxyCanvas/>
      <RightPanel isOpen={true} /> 
      <button id="save" className="save-button" onClick={() => console.log("Save clicked")}>Save</button>
      <button id="load" className="load-button" onClick={() => console.log("Load clicked")}>Load</button>
      <GalaxyAdd isOpen={isGalaxyAddOpen} onClose={toggleGalaxyAdd} />
    </div>
  );
}

export default GalaxyView;

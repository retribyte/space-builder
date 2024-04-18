import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/style.css';

const GalaxyAdd = ({ isOpen, onClose }) => {
  const [isChildrenPanelOpen, setIsChildrenPanelOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleChildrenPanel = () => {
    setIsChildrenPanelOpen(!isChildrenPanelOpen);
  };

  const GalaxyAdd = ({ isOpen = false, onClose }) => {
  };

  const handleCreatePanelClick = () => {
    setIsChildrenPanelOpen(!isChildrenPanelOpen);
  };

  return (
    <section className={`galaxy-add ${isOpen ? 'open' : ''}`}>
      <section id="create-panel" className="col-md-2 px-0 text-light" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div id="create-panel-content" className="text-center">
            <h1>Solar System</h1>
            <div className="content">
              <Link to="/system">
                <button onClick={handleCreatePanelClick}>Solar System1</button>
              </Link>
              <Link to="/system">
                <button onClick={handleCreatePanelClick}>Solar System2</button>
              </Link>
              <Link to="/system">
                <button onClick={handleCreatePanelClick}>Solar System3</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GalaxyAdd;

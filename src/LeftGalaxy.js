import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/style.css';

const LeftPanel = ({ isOpen, togglePanel }) => {
  return (
    <div className={`left-panel ${isOpen ? 'open' : ''}`}>
      <div className="content">
        <Link to="/system">
          <button>Solar System1</button>
        </Link>
      </div>
    </div>
  );
};

export default LeftPanel;
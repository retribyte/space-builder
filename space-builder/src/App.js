import React, { useState } from 'react';
import './App.css';

function App() {
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const resizePanel = (side) => {
    const isPanelCollapsed = side === 'left' ? leftPanelCollapsed : rightPanelCollapsed;
    const transformValue = isPanelCollapsed ? 'translateX(0)' : (side === 'left' ? 'translateX(-100%)' : 'translateX(100%)');
    const newState = side === 'left' ? !leftPanelCollapsed : !rightPanelCollapsed;

    if (side === 'left') {
      setLeftPanelCollapsed(newState);
    } else {
      setRightPanelCollapsed(newState);
    }

    const panel = document.querySelector(`#${side}`);
    panel.style.transform = transformValue;
  };

  window.onresize = () => {
    if (window.innerWidth <= 1260) {
      console.log('Window resized; collapsing panels');
      setLeftPanelCollapsed(false);
      setRightPanelCollapsed(false);
      resizePanel('left');
      resizePanel('right');
    } else {
      console.log('Window resized; expanding panels');
      setLeftPanelCollapsed(true);
      setRightPanelCollapsed(true);
      resizePanel('left');
      resizePanel('right');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickLeft = () => {
    resizePanel('left');
  };

  const handleClickRight = () => {
    resizePanel('right');
  };

  return (
    <div className="container-fluid">
      <nav id="top-navbar" className="row navbar navbar-expand navbar-dark bg-dark">
        
      </nav>
      <div className="row align-items-start text-center">
   
        <main className="col px-0 h-100" id="main-column">
          <div className="closebtn left" onClick={handleClickLeft}>&equiv;</div>
        
          <div className="button-left side-button"><button type="button" className="btn btn-outline-primary">Create</button></div>
          <img className="image" src="./assets/images/bad-solar-system-diagram.avif" alt="Placeholder diagram of the Solar System" />
          <div className="button-right side-button"><button type="button" className="btn btn-outline-danger">Save</button></div>
          <div className="closebtn right" onClick={handleClickRight}>&equiv;</div>
        </main>

        
        <section id="right" className="col-md-2 h-100 px-0 text-light data-collumn">
        
        </section>
      </div>
    </div>
  );
}

export default App;

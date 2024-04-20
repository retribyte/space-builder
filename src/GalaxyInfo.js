import React from 'react';
import './assets/css/style.css';

const RightPanel = (props) => {
  return (
    <section id="info-panel" className="col-md-2 px-0 text-light data-column" style={{ transform: props.collapsed ? 'translateX(100%)' : 'translateX(0)' }}>
        <div id="info-panel-content" className="collapse-horizontal">
            <h1>Information</h1>
        <p>This will contain info about what landmark the user clicks on</p>
      </div>
    </section>
  );
};

export default RightPanel;

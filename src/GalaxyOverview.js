import React, { useState } from 'react';

const LeftPanel = (props) => {

    return (
        <section id="children-panel" className="col-md-2 px-0 text-light" style={{ transform: props.collapsed ? 'translateX(-100%)' : 'translateX(0)' }}>
            <div id="children-panel-content" className="collapse-horizontal">
                <h1>Overview</h1>
                <button className="btn btn-danger selectable" onClick={() => {props.setSelected(null)}}>Deselect</button>
            </div>
        </section>
    );
};

export default LeftPanel;

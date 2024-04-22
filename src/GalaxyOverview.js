import React, { useState } from 'react';

const LeftPanel = (props) => {
    const galaxy = props.data;

    return (
        <section id="children-panel" className="col-md-2 px-0 text-light" style={{ transform: props.collapsed ? 'translateX(-100%)' : 'translateX(0)' }}>
            <div id="children-panel-content" className="collapse-horizontal">
                <h1>Overview</h1>
                <h2 className='systems-list'>Systems:</h2>
                {
                    galaxy.systems[0] ? (
                        <>
                            <nav className="container text-start">
                                {
                                    <ul className="system">
                                        {galaxy.systems.map((system) => (
                                        <React.Fragment>
                                            <li key={system.name} className={`${props.selected && props.selected.name === system.name ? 'selected' : ''}`} onClick={() => {props.setSelected(system.name)}}>{system.name}</li>
                                        </React.Fragment>
                                        ))}
                                    </ul>
                                }
                            </nav>
                        </>
                    ) : <p>No systems to display.</p>
                }
                <h2 className='landmarks-list'>Landmarks:</h2>
                {
                    galaxy.landmarks ? (
                        <>
                            <nav className="container text-start">
                                {
                                    <ul className="landmark">
                                        {galaxy.systems.map((landmark) => (
                                        <React.Fragment>
                                            <li key={landmark.name} className={`${props.selected && props.selected.name === landmark.name ? 'selected' : ''}`} onClick={() => {props.setSelected(landmark.name)}}>{landmark.name}</li>
                                        </React.Fragment>
                                        ))}
                                    </ul>
                                }
                            </nav>
                        </>
                    ) : <p>No landmarks to display.</p>
                }
                <button className="btn btn-danger selectable" onClick={() => {props.setSelected(null)}}>Deselect</button>
            </div>
        </section>
    );
};

export default LeftPanel;

import React from 'react';
import 'assets/css/style.css';
import LandmarkCreate from '../Create/LandmarkCreate';

const RightPanel = (props) => {
    const selectedObject = props.selected;
    return (
        <section id="info-panel" className="col-md-2 px-0 text-light data-column" style={{ transform: props.collapsed ? 'translateX(100%)' : 'translateX(0)' }}>
            <div id="info-panel-content" className="collapse-horizontal">
                <h1>Information</h1>
                <ul id="info">
                    {selectedObject ? (
                        <>
                            <li>
                                <span className="data-type">Name:</span>
                                <span className="landmark-data">{selectedObject.name}</span>
                            </li>
                            {selectedObject.description ? <li>
                                <span className="data-type">Description:</span>
                                <span className="landmark-data">{selectedObject.description}</span>
                            </li> : ''}
                        </>
                    ) : (
                        <li>
                            <span className="landmark-data">Nothing selected</span>
                        </li>
                    )}
                <hr></hr>
                </ul>
                <button className='btn btn-danger' onClick={props.deleteChild}>Delete</button>
            </div>

        </section>
    );
};

export default RightPanel;

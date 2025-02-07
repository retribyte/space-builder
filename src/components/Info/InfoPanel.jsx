import React from 'react';
import { calcMass, calcGravity, calcDayLength, calcYearLength, possLife } from 'utils/calc';
import factory from 'utils/factory';

function InfoPanel(props) {
    const selectedObject = props.selected;
    const habitability = selectedObject ? possLife(props.temperature, selectedObject) : undefined;

    return (
        <section id="info-panel" className="col-md-2 px-0 text-light data-column" style={{ transform: props.collapsed ? 'translateX(100%)' : 'translateX(0)' }}>
            <div id="info-panel-content" className="collapse-horizontal">
                <h1>Information</h1>
                <ul id="info">
                    {selectedObject ? (
                        <>
                            <li>
                                <span className="data-type">Name:</span>
                                <span className="planet-data">{selectedObject.name}</span>
                            </li>
                            {selectedObject.distance ? <li>
                                <span className="data-type">Dist. from primary:</span>
                                <span className="planet-data">{selectedObject.distance} {selectedObject.moons ? 'AU' : 'km'}</span>
                            </li> : ''}
                            <li>
                                <span className="data-type">Radius:</span>
                                <span className="planet-data">{selectedObject.size} km</span>
                            </li>
                            {selectedObject.type ? <li>
                                <span className="data-type">Planet Type:</span>
                                <span className="planet-data">{selectedObject.type.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</span>
                            </li> : ''}
                            <hr />
                            {selectedObject.planets 
                                ? '' 
                                : <>
                                    <li>
                                        <span className="data-type">Day Length:</span>
                                        <span className="planet-data">{calcDayLength(selectedObject).toFixed(2)} Earth days</span>
                                    </li>
                                    <li>
                                        <span className="data-type">Year Length:</span>
                                        <span className="planet-data">{calcYearLength(selectedObject).toFixed(2)} Earth days</span>
                                    </li>
                                </>
                            }
                            <li>
                                <span className="data-type">Mass:</span>
                                <span className="planet-data">{calcMass(selectedObject).toFixed(2)} kg</span>
                            </li>
                            <li>
                                <span className="gravity data-type">Gravity strength:</span>
                                <span className="gravity planet-data">{calcGravity(selectedObject).toFixed(2)} m/s<sup>2</sup></span>
                            </li>
                            <li style={{fontSize: 'large', color: habitability >= 70 ? '#44ff88' : habitability >= 30 ? '#ffcc00' : '#ff4444'}}>
                                <span className="data-type">Habitability score:&nbsp;</span>
                                <span className="bold">{habitability.toFixed(2)}%</span>
                            </li>
                        </>
                    ) : (
                        <li>
                            <span className="planet-data">Nothing selected</span>
                        </li>
                    )}
                    <hr></hr>
                </ul>
                <button className='btn btn-danger' onClick={props.deleteChild} disabled={!selectedObject || selectedObject.planets ? 'true' : ''}>Delete</button>
            </div>
        </section>
    );
}

export default InfoPanel;

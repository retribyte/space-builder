import React from 'react';
import { calcMass, calcGravity, calcDayLength, calcYearLength } from './calc';

function InfoPanel(props) {
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
                                <span className="planet-data">{selectedObject.name}</span>
                            </li>
                            <li>
                                <span className="data-type">Dist. from star:</span>
                                <span className="planet-data">{selectedObject.distanceFromStar} AU</span>
                            </li>
                            <li>
                                <span className="data-type">Size:</span>
                                <span className="planet-data">{selectedObject.size} Earth Diameter</span>
                            </li>
                            <li>
                                <span className="data-type">Planet Type:</span>
                                <span className="planet-data">{selectedObject.type}</span>
                            </li>
                            <hr />
                            <li>
                                <span className="data-type">Day Length:</span>
                                <span className="planet-data">{calcDayLength(selectedObject)} Earth Days</span>
                            </li>
                            <li>
                                <span className="data-type">Year Length:</span>
                                <span className="planet-data">{calcYearLength(selectedObject)} Earth Years</span>
                            </li>
                            <li>
                                <span className="data-type">Planet mass:</span>
                                <span className="planet-data">{calcMass(selectedObject)} Earth Mass</span>
                            </li>
                            <li>
                                <span className="gravity data-type">Gravity Strength:</span>
                                <span className="gravity planet-data">{calcGravity(selectedObject)} m/s<sup>2</sup></span>
                            </li>
                        </>
                    ) : (
                        <li>
                            <span className="planet-data">Nothing selected</span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default InfoPanel;

import React from 'react';

function InfoPanel({ selectedObject }) {
    return (
        <section id="info-panel" className="col-md-2 px-0 text-light data-column">
            <div id="info-panel-content" className="collapse-horizontal">
                <h1>Information</h1>
                <ul id="info">
                    <li>
                        <span className="data-type">Name:</span>
                        <span id="planet-name" className="planet-data">{selectedObject ? selectedObject.name : 'Nothing selected'}</span>
                    </li>
                    <li>
                        <span className="data-type">Dist. from star:</span>
                        <span className="planet-data">{selectedObject ? selectedObject.distanceFromStar : 'N/A'}</span>
                    </li>
                    <li>
                        <span className="data-type">Size:</span>
                        <span className="planet-data">{selectedObject ? selectedObject.size : 'N/A'}</span>
                    </li>
                    <li>
                        <span className="data-type">Planet Type:</span>
                        <span className="planet-data">{selectedObject ? selectedObject.type : 'N/A'}</span>
                    </li>
                    <hr />
                    <li>
                        <span className="data-type">Day Length:</span>
                        <span className="planet-data">{selectedObject ? selectedObject.dayLength : 'N/A'}</span>
                    </li>
                    <li>
                        <span className="data-type">Year Length:</span>
                        <span className="planet-data">{selectedObject ? selectedObject.yearLength : 'N/A'}</span>
                    </li>
                    <li>
                        <span className="data-type">Planet mass:</span>
                        <span className="planet-data">{selectedObject ? selectedObject.mass : 'N/A'}</span>
                    </li>
                    <li>
                        <span className="gravity data-type">Gravity Strength:</span>
                        <span className="gravity planet-data">{selectedObject ? selectedObject.gravity : 'N/A'}</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default InfoPanel;

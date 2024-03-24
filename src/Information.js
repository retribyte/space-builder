import React from 'react';
import './assets/css/style.css';


function Information(props) {
    return (
        <section id="info-panel" className="col-md-2 h-100 px-0  text-light data-column">
                    <div id="info-panel-content" className="collapse-horizontal">
                        <h1>Information</h1>
                        <ul id="info">
                            <li>
                                <span className="data-type">Name:</span>
                                <span id="planetName" className="planet-data">[Planet Name]</span>
                            </li>
                            <li>
                                <span className="data-type">Name:</span>
                                <span className="planet-data"> Mercury</span>
                            </li>
                            <li>
                                <span className="data-type">Dist. from star:</span>
                                <span className="planet-data">0.38 AU</span>
                            </li>
                            <li>
                                <span className="data-type">Size:</span>
                                <span className="planet-data">.38 Earth Diameter</span>
                            </li>
                            <li>
                                <span className="data-type">Planet Type:</span>
                                <span className="planet-data">Terrestrial</span>
                            </li>
                            <hr />
                            <li>
                                <span className="data-type">Day Length:</span>
                                <span className="planet-data">176 Earth Days</span>
                            </li>
                            <li>
                                <span className="data-type">Year Length:</span>
                                <span className="planet-data">.24 Earth Years</span>
                            </li>
                            <li>
                                <span className="data-type">Planet mass:</span>
                                <span className="planet-data"> .055 earth mass</span>
                            </li>
                            <li>
                                <span className="gravity data-type">Gravity Strength:</span>
                                <span className="gravity planet-data"> 3.7 m/s<sup>2</sup></span>
                            </li>
                        </ul>
                    </div>
                </section>
    );
}

export default Information;
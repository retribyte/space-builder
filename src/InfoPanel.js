import React from 'react';

function InfoPanel({ formData }) {
    return (
        <section id="info-panel" className="col-md-2 px-0 text-light data-column">
            <div id="info-panel-content" className="collapse-horizontal">
                <h1>Information</h1>
                <ul id="info">
                    {Object.entries(formData).map(([key, value]) => (
                        <li key={key}>
                            <span className="data-type">{key}:</span>
                            <span className="planet-data">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default InfoPanel;

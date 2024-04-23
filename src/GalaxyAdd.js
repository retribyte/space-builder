import React, { useState } from 'react';
import LandmarkCreate from './LandmarkCreate';
import RegionCreate from './RegionCreate';

const GalaxyAdd = (props) => {
    const [selectedType, setSelectedType] = useState('landmark');

    const { callback, collapsed } = props;
    
    const handleTabSwitch = (event) => {
        setSelectedType(event.target.textContent.toLowerCase());
        console.log(event.target.textContent.toLowerCase() + " tab clicked");
    }

    const handleData = (formData) => {
        console.log("Still nothing");
    }

    const handleDraw = (bounds) => {
        console.log("I can't draw yet");
    }

    return (
        <section id="create-panel" className="col-md-2 px-0 text-light" style={{ transform: collapsed ? 'translateX(-100%)' : 'translateX(0)' }}>
            <div className="d-flex flex-column">
                <div id="create-panel-content">
                    <h1>Create</h1>
                    <div>
                        <nav className='tab-selector galaxy'>
                            <ul>
                                <li id="tab-landmark">
                                    <a className={`${selectedType === 'landmark' ? 'selected' : ''}`}  onClick={handleTabSwitch}>
                                        Landmark
                                    </a>
                                </li>
                                <li id="tab-region">
                                    <a className={`${selectedType === 'region' ? 'selected' : ''}`} onClick={handleTabSwitch}>
                                        Region
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {selectedType === 'landmark' && <LandmarkCreate handleData={handleData} />}
                        {selectedType === 'region' && <RegionCreate handleData={handleData} />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalaxyAdd;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/style.css';

const GalaxyAdd = ({ data, selected, collapsed, onClose }) => {
    const [isChildrenPanelOpen, setIsChildrenPanelOpen] = useState(false);

    const toggleChildrenPanel = () => {
        setIsChildrenPanelOpen(!isChildrenPanelOpen);
    };

    const GalaxyAdd = ({ isOpen = false, onClose }) => {
    };

    const handleCreatePanelClick = () => {
        setIsChildrenPanelOpen(!isChildrenPanelOpen);
    };

    const handleTabSwitch = () => {
        console.log("Sorry nothing yet");
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
                                    <a onClick={handleTabSwitch}>
                                        Landmark
                                    </a>
                                </li>
                                <li id="tab-region">
                                    <a onClick={handleTabSwitch}>
                                        Region
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* {selectedType === 'star' && <StarCreate handleData={handleData} />} */}
                        {/* {selectedType === 'planet' && <PlanetCreate handleData={handleData} />} */}
                        {/* {selectedType === 'moon' && <MoonCreate planets={data.planets} handleData={handleData} />} */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalaxyAdd;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GalaxyOverview from './GalaxyOverview';
import RightPanel from './RightGalaxy';
import GalaxyAdd from './GalaxyAdd';

function GalaxyView() {
    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    const [isLeftPanelCollapsed, setLeftPanelCollapsed] = useState(true);
    const [isGalaxyAddCollapsed, setIsGalaxyAddCollapsed] = useState(false);

    const toggleLeftPanel = () => {
        setLeftPanelCollapsed(!isLeftPanelCollapsed);
    };

    const toggleGalaxyAdd = () => {
        setIsGalaxyAddCollapsed(!isGalaxyAddCollapsed);
    };

    return (
        <div className="galaxy-page-container">
            <GalaxyOverview collapsed={isChildrenPanelCollapsed} />
            <div className="galaxy-panels">
                <button className="toggle-button" onClick={toggleLeftPanel}>
                    Create
                </button>

            </div>
            <RightPanel isOpen={true} />
            <button id="save" className="save-button" onClick={() => console.log("Save clicked")}>Save</button>
            <button id="load" className="load-button" onClick={() => console.log("Load clicked")}>Load</button>
            <GalaxyAdd isOpen={isGalaxyAddCollapsed} onClose={toggleGalaxyAdd} />
        </div>
    );
}

export default GalaxyView;

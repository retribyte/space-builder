import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GalaxyOverview from './GalaxyOverview';
import GalaxyInfoPanel from './GalaxyInfo';
import GalaxyCreatePanel from './GalaxyAdd';

function GalaxyView(props) {
    const [galaxy, setGalaxy] = useState(props.galaxy);
    const [selectedObject, setSelectedObject] = useState(null);

    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    const [isLeftPanelCollapsed, setLeftPanelCollapsed] = useState(true);
    const [isGalaxyAddCollapsed, setIsGalaxyAddCollapsed] = useState(false);

    const toggleLeftPanel = () => {
        setLeftPanelCollapsed(!isLeftPanelCollapsed);
    };

    const toggleChildrenPanel = () => {
        setChildrenPanelCollapsed(!isChildrenPanelCollapsed)
    }
    const toggleCreatePanel = () => {
        setCreatePanelCollapsed(!isCreatePanelCollapsed)
    }
    const toggleInfoPanel = () => {
        setInfoPanelCollapsed(!isInfoPanelCollapsed)
    }

    return (
        <div id="root-container" className="container-fluid">
            <div className="row align-items-start text-center h-100"> 
                <GalaxyCreatePanel data={props.galaxy} selected={selectedObject} collapsed={isCreatePanelCollapsed} />
                <GalaxyOverview collapsed={isChildrenPanelCollapsed} />

                <div className="closebtn left">
                    <a onClick={isCreatePanelCollapsed ? toggleChildrenPanel : toggleCreatePanel}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/OOjs_UI_icon_mapPin-invert.svg"></img>
                    </a>
                </div>
                
                <div className="button-left side-button">
                    <button id="create" type="button" className="btn btn-outline-primary" onClick={toggleCreatePanel}>
                        Create
                    </button>
                </div>
                <div className="button-right side-button">
                    <button id="load" type="button" className="btn btn-outline-success">
                        Load
                    </button>
                    <button id="save" type="button" className="btn btn-outline-danger">
                        Save
                    </button>
                </div>
                <div className="closebtn right">
                    <a onClick={toggleInfoPanel}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/OOjs_UI_icon_info_big-invert.svg"></img>
                    </a>
                </div>

                <GalaxyInfoPanel collapsed={isInfoPanelCollapsed} />
            </div>
        </div>
    );
}

export default GalaxyView;

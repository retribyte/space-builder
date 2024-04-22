import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GalaxyOverview from './GalaxyOverview';
import GalaxyInfoPanel from './GalaxyInfo';
import GalaxyCreatePanel from './GalaxyAdd';
import factory from './factory';

function GalaxyView(props) {
    const [selectedObject, setSelectedObject] = useState(null);

    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    const [isLeftPanelCollapsed, setLeftPanelCollapsed] = useState(true);
    const [isGalaxyAddCollapsed, setIsGalaxyAddCollapsed] = useState(false);

    let { state } = useLocation();

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

    const saveNewSystem = (newSystem) => {
        // Randomize x and y coordinates for now
        factory.addSystemToGalaxy(props.setGalaxy, newSystem, Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
    }

    useEffect(() => { 
        console.log("system in hand:", state);
        if (state) {
            saveNewSystem(state);
        }
    }, [])

    return (
        <div id="root-container" className="container-fluid">
            <div className="row align-items-start text-center h-100"> 
                <GalaxyCreatePanel data={props.galaxy} selected={selectedObject} collapsed={isCreatePanelCollapsed} />
                <GalaxyOverview data={props.galaxy} collapsed={isChildrenPanelCollapsed} />

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
                <p style={{width: "60%", color: 'white'}}>{JSON.stringify(props.galaxy)}</p>
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

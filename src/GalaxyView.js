import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GalaxyOverview from './GalaxyOverview';
import GalaxyInfoPanel from './GalaxyInfo';
import GalaxyCreatePanel from './GalaxyAdd';
import GalaxyCanvas from './GalaxyCanvas';
import ScaleSlider from './ScaleSlider';
import factory from './factory';
import CreateTutorial from './CreateTutorial';

function GalaxyView(props) {
    const [selectedObject, setSelectedObject] = useState(null);

    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    const [globalScale, setGlobalScale] = useState(1);
    function handleChange(number) {
        setGlobalScale(number);
    }

    let { state } = useLocation();

    const toggleChildrenPanel = () => {
        setChildrenPanelCollapsed(!isChildrenPanelCollapsed)
    }
    const toggleCreatePanel = () => {
        setCreatePanelCollapsed(!isCreatePanelCollapsed)
    }
    const toggleInfoPanel = () => {
        setInfoPanelCollapsed(!isInfoPanelCollapsed)
    }

    function handleResize() {
        console.log('Window resized; collapsing panels');
        if (window.innerWidth <= 1260) {
            if (!isChildrenPanelCollapsed) toggleChildrenPanel();
            if (!isCreatePanelCollapsed) toggleCreatePanel();
            if (!isInfoPanelCollapsed) toggleInfoPanel();
        } else {
            console.log('Window resized; expanding panels');
            if (isChildrenPanelCollapsed) toggleChildrenPanel();
            // The create panel remains collapsed unless explicitly opened by the user
            if (isInfoPanelCollapsed) toggleInfoPanel();
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isChildrenPanelCollapsed, isCreatePanelCollapsed, isInfoPanelCollapsed, toggleChildrenPanel, toggleCreatePanel, toggleInfoPanel]);

    useEffect(() => {
        handleResize();
    }, []);

    const saveNewSystem = (newSystem) => {
        // Randomize x and y coordinates for now
        factory.addSystemToGalaxy(props.setGalaxy,
            newSystem,
            newSystem.xPos ? newSystem.xPos : Math.floor(Math.random() * 1000),
            newSystem.yPos ? newSystem.yPos : Math.floor(Math.random() * 1000)
        );
    }

    const saveNewLandmark = (newLandmark) => {
        // Randomize x and y coordinates for now
        factory.addLandmarkToGalaxy(props.setGalaxy,
            newLandmark,
            newLandmark.xPos ? newLandmark.xPos : Math.floor(Math.random() * 1000),
            newLandmark.yPos ? newLandmark.yPos : Math.floor(Math.random() * 1000)
        );
    }

    const updateSelectedObject = (object) => {
        let foundObject = factory.findObject(props.galaxy, object);
        setSelectedObject(foundObject);
    }

    const handleSaveClicked = (event) => {
        props.saveGalaxy(JSON.stringify(props.galaxy));
        event.target.innerHTML = "Saved!";
        setTimeout(() => {event.target.innerHTML = "Save"}, 1000);
    }

    useEffect(() => { 
        console.log("system in hand:", state);
        if (state) {
            saveNewSystem(state);
        }
        console.log("selected:", selectedObject);
    }, [])

    return (
        <div id="root-container" className="container-fluid">
            <div className="row align-items-start text-center h-100"> 
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {/* <ScaleSlider scale={globalScale} setScale={handleChange} /> */}
                    <GalaxyCanvas galaxy={props.galaxy} selected={selectedObject} scale={globalScale} />
                    {
                        (props.galaxy.systems.length === 0 && props.galaxy.landmarks.length === 0 && props.galaxy.regions.length === 0)
                            ? <div className='overlay'><CreateTutorial buttons={['Create', 'New']} /></div>
                            : null
                    }
                </div>
                <GalaxyCreatePanel data={props.galaxy} selected={selectedObject} collapsed={isCreatePanelCollapsed} callback={saveNewLandmark} />
                <GalaxyOverview data={props.galaxy} selected={selectedObject} setSelected={updateSelectedObject} collapsed={isChildrenPanelCollapsed} />

                <div className="closebtn left">
                    <a onClick={isCreatePanelCollapsed ? toggleChildrenPanel : toggleCreatePanel}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/OOjs_UI_icon_mapPin-invert.svg"
                            alt='Landmark icon, white'></img>
                            {
                                isChildrenPanelCollapsed && isCreatePanelCollapsed 
                                    ? <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/OOjs_UI_icon_next-ltr-invert.svg" />
                                    : <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/OOjs_UI_icon_previous-ltr-invert.svg" />
                            }
                    </a>
                </div>
                
                <div className="button-left side-button">
                    <button id="create" type="button" className="btn btn-outline-primary" onClick={toggleCreatePanel}>
                        Create
                    </button>
                    <button id="new" type="button" className="btn btn-outline-info">
                        <Link to="/system" state={ undefined }>New</Link>
                    </button>
                </div>
                {/* <p style={{width: "60%", color: 'white'}}>{JSON.stringify(props.galaxy)}</p> */}
                <div className="button-right side-button">
                    <button id="load" type="button" className="btn btn-outline-success">
                        <Link to={ selectedObject ? "/system" : "#" } state={ selectedObject }>Load</Link>
                    </button>
                    <button id="save" type="button" className="btn btn-outline-danger" onClick={handleSaveClicked}>
                        Save
                    </button>
                </div>
                <div className="closebtn right">
                    <a onClick={toggleInfoPanel}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/OOjs_UI_icon_info_big-invert.svg"
                            alt='Information icon, white'></img>
                            {
                                isInfoPanelCollapsed 
                                    ? <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/OOjs_UI_icon_previous-ltr-invert.svg" />
                                    : <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/OOjs_UI_icon_next-ltr-invert.svg" />
                            }
                    </a>
                </div>

                <GalaxyInfoPanel selected={selectedObject} collapsed={isInfoPanelCollapsed} />
            </div>
        </div>
    );
}

export default GalaxyView;

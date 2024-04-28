import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import factory from './factory';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function SystemView(props) {
    const [system, setSystem] = useState(props.system ? props.system : {});
    const [selectedObject, setSelectedObject] = useState(null);

    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state) {
            setSystem(location.state);
            console.log("Data from link found:", location.state);
        } else if (props.system) {
            setSystem(props.system);
            console.log("Taking data from props:", props.system);
        } else {
            setSystem({});
            console.log("No data found. Creating new system:", system);
        }
        openCreateIfEmpty();
    }, []);

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

    const openCreateIfEmpty = () => {
        // Currently always opens... bugfix needed
        // Think it has to do with react router's data not being pulled in time
        handleResize();
        if (!system.name) {
            console.log("system is", system)
            setCreatePanelCollapsed(false);
        }
    }

    const addNewChild = (details) => {
        const { kind, primary, name, size, distance, objectCompositionType, temperature } = details;
        if (kind == 'star') {
            let star = factory.createStar(name, size, temperature);
            const oldSystem = { ...system };
            let existingSystems = [];
            // if (Object.keys(oldGalaxy).length != 0) {
            //     existingSystems = oldGalaxy.systems;
            // }
            setSystem(star);
        }
        else if (kind == 'planet') {
            if (system.planets.some(planet => planet.name === name)) {
                alert('A planet already exists with that name!');
                return;
            }
            factory.addPlanetToStar(setSystem, primary, name, size, distance, objectCompositionType);
        }
        else if (kind == 'moon') {
            if (system.planets.some(planet => planet.moons.some(moon => moon.name === name))) {
                alert('A moon already exists with that name!');
                return;
            }
            factory.addMoonToPlanet(setSystem, primary, name, size, distance, objectCompositionType)
        }
        else {
            console.error('I don\'t know how to make a ' + kind + '...');
        }

        console.log(system);
    };

    const deleteChild = () => {
        if (!selectedObject) {
            alert("No object selected");
            return;
        }
        else if (selectedObject.planets) {
            console.log("Trying to delete a star");
            alert("You can't delete this system's star!");
        }
        else if (selectedObject.moons) {
            console.log("Trying to delete a planet");
            if (window.confirm("Are you sure you want to delete " + selectedObject.name + "?")) {
                factory.deletePlanet(setSystem, selectedObject.name);
            }
        }
        else {
            console.log("Trying to delete a moon");
            if (window.confirm("Are you sure you want to delete " + selectedObject.name + "?")) {
                factory.deleteMoon(setSystem, selectedObject.name);
            }
        }
    }

    useEffect(() => {
        if (selectedObject != null) {
            console.log("selected object is " + selectedObject.name);
        } else {
            console.log("selected object is null");
        }
    }, [selectedObject]);

    const updateSelectedObject = (object) => {
        let foundObject = factory.findObject(system, object);
        setSelectedObject(foundObject);
    }

    const handleSaveClick = (event) => {
        event.preventDefault();
        if (!system.description) {
            let desc = window.prompt("Enter a description for this system:")
            setSystem({ ...system, description: desc });
        }
        navigate('/galaxy', { state: system });
    }

    const handleDiscardClick = (event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you want to discard this system?")) {
            navigate('/galaxy');
        }
    }

    return (
        <div id="root-container" className="container-fluid">
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel data={system} selected={selectedObject} callback={addNewChild} collapsed={isCreatePanelCollapsed}/>
                <ChildrenPanel data={system} selected={selectedObject} setSelected={updateSelectedObject} collapsed={isChildrenPanelCollapsed} />

                <div className="closebtn left">
                    <a onClick={isCreatePanelCollapsed ? toggleChildrenPanel : toggleCreatePanel}>
                        <img className='invert' src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Planet_with_rings_icon.svg"
                            alt='Planet icon, white'></img>
                            {
                                isChildrenPanelCollapsed && isCreatePanelCollapsed 
                                    ? <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/OOjs_UI_icon_next-ltr-invert.svg"
                                        alt="Expand panel icon" />
                                    : <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/OOjs_UI_icon_previous-ltr-invert.svg" 
                                        alt="Collapse panel icon" />
                            }
                    </a>
                </div>
                <div className="button-left side-button"><button id="create" type="button" className="btn btn-outline-primary" onClick={toggleCreatePanel}>Create</button></div>
                
                <MainColumn data={system} selected={selectedObject} toggle={[toggleCreatePanel]} />

                <div className="button-right side-button">
                    <button id="save" type="button" className="btn btn-outline-danger" disabled={!system.name}>
                        <Link to={ system.name ? "/galaxy" : "#" } state={ system }>Save</Link>
                    </button>
                    <a onClick={handleDiscardClick} className='discard'>Exit w/o Saving</a>
                </div>

                <div className="closebtn right">
                    <a onClick={toggleInfoPanel}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/OOjs_UI_icon_info_big-invert.svg"
                            alt='Information icon, white'></img>
                            {
                                isInfoPanelCollapsed 
                                    ? <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/OOjs_UI_icon_previous-ltr-invert.svg"
                                        alt="Expand panel icon" />
                                    : <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/OOjs_UI_icon_next-ltr-invert.svg" 
                                        alt="Collapse panel icon" />
                            }
                    </a>
                </div>
                <InfoPanel temperature={system.temperature} selected={selectedObject} collapsed={isInfoPanelCollapsed} deleteChild={deleteChild} />
            </div>
        </div>
    );
}

export default SystemView;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import factory from './factory';
import { Link, useLocation } from 'react-router-dom';

function SystemView(props) {
    const location = useLocation();
    const [system, setSystem] = useState(props.system ? props.system : {});
    const [selectedObject, setSelectedObject] = useState(null);

    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    useEffect(() => {
        if (location.state && location.state.selectedObject) {
            console.log("First clause");
            setSystem(location.state.selectedObject);
        } else if (props.system) {
            console.log("Second clause");
            setSystem(props.system);
        } else {
            console.log("Santa clause");
            setSystem({});
        }
        console.log("after clauses, system is now:", system);
    }, [location, props.system]);

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
            factory.addPlanetToStar(setSystem, primary, name, size, distance, objectCompositionType);
        }
        else if (kind == 'moon') {
            factory.addMoonToPlanet(setSystem, primary, name, size, distance, objectCompositionType);
        }
        else {
            console.error('I don\'t know how to make a ' + kind + '...');
        }

        console.log(system);
    };

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

    // Sample data
    // useEffect(() => {
    //     // return;
    //     setSystem({
    //         name: "Sol",
    //         size: 696340,
    //         temperature: 5772,
    //         planets: [
    //         { name: "Mercury", size: 2440, distance: 0.39, type: 'terrestrial', moons: [] },
    //         { name: "Venus", size: 6052, distance: 0.72, type: 'terrestrial', moons: [] },
    //         {
    //             name: "Earth", size: 6371, distance: 1, type: 'terrestrial', moons: [
    //             { name: "Luna", size: 1737, distance: 384500, type: 'terrestrial' }
    //             ]
    //         },
    //         {
    //             name: "Mars", size: 3389, distance: 1.52, type: 'terrestrial', moons: [
    //             { name: "Phobos", size: 22, distance: 9377, type: 'terrestrial' },
    //             { name: "Deimos", size: 12, distance: 23460, type: 'terrestrial' }
    //             ]
    //         },
    //         {
    //             name: "Jupiter", size: 69911, distance: 5.20, type: 'gas', moons: [
    //             { name: "Io", size: 1821, distance: 421700, type: 'terrestrial' },
    //             { name: "Europa", size: 1561, distance: 670900, type: 'terrestrial' }
    //             ]
    //         },
    //         {
    //             name: "Saturn", size: 58232, distance: 9.58, type: 'gas', moons: [
    //             { name: "Titan", size: 5149, distance: 1221870, type: 'terrestrial' },
    //             { name: "Enceladus", size: 504, distance: 238020, type: 'terrestrial' }
    //             ]
    //         },
    //         { name: "Uranus", size: 25362, distance: 19.22, type: 'ice', moons: [
    //             { name: "Titania", size: 1578, distance: 435910, type: 'terrestrial' },
    //             { name: "Oberon", size: 1523, distance: 583520, type: 'terrestrial' }
    //         ] },
    //         { name: "Neptune", size: 24622, distance: 30.05, type: 'ice', moons: [
    //             { name: "Triton", size: 2707, distance: 354800, type: 'terrestrial' },
    //             { name: "Nereid", size: 340, distance: 5513813, type: 'terrestrial' }
    //         ] }
    //         ]
    //     });
    // }, [])

    return (
        <div id="root-container" className="container-fluid">
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel data={system} selected={selectedObject} callback={addNewChild} collapsed={isCreatePanelCollapsed}/>
                <ChildrenPanel data={system} selected={selectedObject} setSelected={updateSelectedObject} collapsed={isChildrenPanelCollapsed} />

                <div className="closebtn left">
                    <a onClick={isCreatePanelCollapsed ? toggleChildrenPanel : toggleCreatePanel}>
                        <img className='invert' src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Planet_with_rings_icon.svg"></img>
                    </a>
                </div>
                <div className="button-left side-button"><button id="create" type="button" className="btn btn-outline-primary" onClick={toggleCreatePanel}>Create</button></div>
                
                <MainColumn data={system} selected={selectedObject} />

                <div className="button-right side-button">
                    <button id="save" type="button" className="btn btn-outline-danger">
                        <Link to={ system.name ? "/galaxy" : "#" } state={ system }>Save</Link>
                    </button>
                </div>

                <div className="closebtn right">
                    <a onClick={toggleInfoPanel}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/OOjs_UI_icon_info_big-invert.svg"></img>
                    </a>
                </div>
                <InfoPanel selected={selectedObject} collapsed={isInfoPanelCollapsed} />
            </div>
        </div>
    );
}

export default SystemView;

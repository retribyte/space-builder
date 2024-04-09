import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import factory from './factory';

function SystemView(props) {
    const [system, setSystem] = useState(props.system);
    const [selectedObject, setSelectedObject] = useState(null);
    
    const [isChildrenPanelCollapsed, setChildrenPanelCollapsed] = useState(false);
    const [isCreatePanelCollapsed, setCreatePanelCollapsed] = useState(true);
    const [isInfoPanelCollapsed, setInfoPanelCollapsed] = useState(false);

    const toggleChildrenPanel = () => {
        setChildrenPanelCollapsed(!isChildrenPanelCollapsed)
    }
    const toggleCreatePanel = () => {
        setCreatePanelCollapsed(!isCreatePanelCollapsed)
    }
    const toggleInfoPanel = () => {
        setInfoPanelCollapsed(!isInfoPanelCollapsed)
    }

    useEffect(() => {
        console.log(system);
    }, [])

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
        const {kind, primary, name, size, distance, objectCompositionType, temperature} = details;
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

    return (
        <div id="root-container" className="container-fluid">
            <Navbar />
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel data={system} selected={selectedObject} callback={addNewChild} collapsed={isCreatePanelCollapsed}/>
                <ChildrenPanel data={system} selected={selectedObject} setSelected={updateSelectedObject} collapsed={isChildrenPanelCollapsed} />

                <div className="closebtn left"><a onClick={isCreatePanelCollapsed ? toggleChildrenPanel : toggleCreatePanel}>&equiv;</a></div>
                   <div className="button-left side-button"><button id="create" type="button" className="btn btn-outline-primary" onClick={toggleCreatePanel}>Create</button></div>

                    <MainColumn data={system} selected={selectedObject} />

                    <div className="button-right side-button"><button id="save" type="button" className="btn btn-outline-danger">Save</button></div>

                <div className="closebtn right"><a onClick={toggleInfoPanel}>&equiv;</a></div>
                <InfoPanel selected={selectedObject} collapsed={isInfoPanelCollapsed} />
            </div>
        </div>
    );
}

export default SystemView;

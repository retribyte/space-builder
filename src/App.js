import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import factory from './factory';
// import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState({systems: []});
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
        const savedData = localStorage.getItem('data');
        if (savedData !== null) {
            try {
                let data = JSON.parse(savedData);
                console.log("Save data found. Loading system.");
                setGalaxy(data);
            } catch (e) {
                console.log("Save data is invalid. Loading empty system.");
            }
        } else {
            console.log("Save data does not exist. Loading empty system.");
        }
    }, []);

    const addNewChild = (details) => {
        const {kind, primary, name, size, distance, objectCompositionType, temperature} = details;
        if (kind == 'star') {
            let star = factory.createStar(name, size, temperature);
            const oldGalaxy = { ...galaxy };
            let existingSystems = [];
            if (Object.keys(oldGalaxy).length != 0) {
                existingSystems = oldGalaxy.systems;
            }
            setGalaxy({
                ...oldGalaxy,
                systems: [
                    ...existingSystems,
                    star
                ]
            });
        }
        else if (kind == 'planet') {
            factory.addPlanetToStar(setGalaxy, primary, name, size, distance, objectCompositionType);
        }
        else if (kind == 'moon') {
            factory.addMoonToPlanet(setGalaxy, primary, name, size, distance, objectCompositionType);
        }
        else {
            console.error('I don\'t know how to make a ' + kind + '...');
        }

        console.log(galaxy);
    };

    useEffect(() => {
        if (selectedObject != null) {
            console.log("selected object is " + selectedObject.name);
        } else {
            console.log("selected object is null");
        }
    }, [selectedObject]);

    const updateSelectedObject = (object) => {
        let foundObject = factory.findObject(galaxy.systems, object);
        setSelectedObject(foundObject);
    }

    return (
        <div id="root-container" className="container-fluid">
            <Navbar />
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel data={galaxy} selected={selectedObject} callback={addNewChild} collapsed={isCreatePanelCollapsed}/>
                <ChildrenPanel data={galaxy} selected={selectedObject} setSelected={updateSelectedObject} collapsed={isChildrenPanelCollapsed} />

                <div className="closebtn left"><a onClick={isCreatePanelCollapsed ? toggleChildrenPanel : toggleCreatePanel}>&equiv;</a></div>
                   <div className="button-left side-button"><button id="create" type="button" className="btn btn-outline-primary" onClick={toggleCreatePanel}>Create</button></div>

                    <MainColumn data={galaxy} selected={selectedObject} />

                    <div className="button-right side-button"><button id="save" type="button" className="btn btn-outline-danger">Save</button></div>

                <div className="closebtn right"><a onClick={toggleInfoPanel}>&equiv;</a></div>
                <InfoPanel selected={selectedObject} collapsed={isInfoPanelCollapsed} />
            </div>
        </div>
    );
}

export default App;

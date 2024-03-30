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
                <CreatePanel data={galaxy} selected={selectedObject} callback={addNewChild} />
                <ChildrenPanel data={galaxy} selected={selectedObject} setSelected={updateSelectedObject} />
                <MainColumn data={galaxy} selected={selectedObject} />
                <InfoPanel />
            </div>
        </div>
    );
}

export default App;

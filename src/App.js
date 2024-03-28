import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import './assets/css/style.css';
import model from './model';
import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('data');
        if (savedData !== null) {
            try {
                let data = JSON.parse(savedData);
                setGalaxy(data);
                console.log("Reached end of try block");
            } catch (e) {
                console.log("Save data is invalid. Loading default system.");
                setGalaxy(sampleData);
            }
        } else {
            console.log("Save data does not exist. Loading default system.");
            setGalaxy(sampleData);
        }
    }, []);

    console.log(galaxy);

    const addNewChild = (details) => {
        const [kind, primary, name, size, distance, objectCompositionType] = details;
        if (kind == 'star') {
            let star = model.createStar(name, size);
            setGalaxy( (galaxyBefore) => ({
                ...galaxyBefore,
                systems: [
                    ...galaxyBefore.systems,
                    star
                ]
            }));
        }
        else if (kind == 'planet') {
            model.addPlanetToStar(primary.name, name, size, distance, objectCompositionType);
        }
        else if (kind == 'moon') {
            model.addMoonToPlanet(primary.name, name, size, distance, objectCompositionType);
        }
        else {
            console.error('I don\'t know how to make a ' + kind + '...');
        }
    };

    return (
        <div id="root-container" className="container-fluid">
            <Navbar />
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel />
                <ChildrenPanel />
                <MainColumn data={galaxy} />
                <InfoPanel />
            </div>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import './assets/css/style.css';
import model from './factory';
// import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState(null);
    const [selectedObject, setSelectedObject] = useState(null);

    const addPlanetToStar = (starName, name, size, distance, type) => {
        setGalaxy(galaxyBefore => {
            const updatedSystems = galaxyBefore.systems.map(system => {
                // Check if this is the right star
                if (system.name === starName) {
                    // Found the star, now add the new planet to its planets array
                    return {
                        ...system,
                        planets: [...system.planets, model.createPlanet(name, size, distance, type)]
                    };
                }
                // Not it! Return the unmodified system...
                return system;
            });
    
            return { ...galaxyBefore, systems: updatedSystems };
        });
        console.log(galaxy);
    };
    
    const addMoonToPlanet = (planetName, name, size, distance, type) => {
        setGalaxy(galaxyBefore => {
            const updatedSystems = galaxyBefore.systems.map(system => {
                // Check if this is the right planet
                const updatedPlanets = system.planets.map(planet => {
                    if (planet.name === planetName) {
                        // Found the planet, now add the new moon to its moons array
                        return {
                            ...planet,
                            moons: [...planet.moons, model.createMoon(name, size, distance, type)]
                        };
                    }
                    // Not it! Return the unmodified planet...
                    return planet;
                });
    
                return { ...system, planets: updatedPlanets };
            });
    
            return { ...galaxyBefore, systems: updatedSystems };
        });
    };

    useEffect(() => {
        const savedData = localStorage.getItem('data');
        if (savedData !== null) {
            try {
                let data = JSON.parse(savedData);
                setGalaxy(data);
                console.log("Reached end of try block");
            } catch (e) {
                console.log("Save data is invalid. Loading empty system.");
                setGalaxy({});
            }
        } else {
            console.log("Save data does not exist. Loading empty system.");
            setGalaxy({});
        }
    }, []);

    const addNewChild = (details) => {
        const {kind, primary, name, size, distance, objectCompositionType, temperature} = details;
        if (kind == 'star') {
            let star = model.createStar(name, size, temperature);
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
            addPlanetToStar(primary, name, size, distance, objectCompositionType);
        }
        else if (kind == 'moon') {
            addMoonToPlanet(primary, name, size, distance, objectCompositionType);
        }
        else {
            console.error('I don\'t know how to make a ' + kind + '...');
        }

        console.log(galaxy);
    };

    return (
        <div id="root-container" className="container-fluid">
            <Navbar />
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel data={galaxy} selected={selectedObject} callback={addNewChild} />
                <ChildrenPanel />
                <MainColumn data={galaxy} />
                <InfoPanel />
            </div>
        </div>
    );
}

export default App;

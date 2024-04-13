import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createStar, createPlanet, createMoon } from './factory';
// import './style.css'; 

function GalaxyView() {
    const [systems, setSystems] = useState([]);
    const [selectedSystem, setSelectedSystem] = useState(null);
    const [showPanel, setShowPanel] = useState(true); 

    useEffect(() => {
        const savedSystems = localStorage.getItem('systems');
        if (savedSystems) {
            setSystems(JSON.parse(savedSystems));
        }
    }, []);

    const handleCreateStar = () => {
        // const name = prompt("Enter star name:");
        // if (name) {
        //     const newStar = createStar(name, 1, 1);
        //     setSystems([...systems, { name, stars: [newStar] }]);
        //     localStorage.setItem('systems', JSON.stringify([...systems, { name, stars: [newStar] }]));
        // }
    };

    const handleSelectSystem = (system) => {
        setSelectedSystem(system);
    };

    const handleClosePanel = () => {
        setShowPanel(false);
    };

    return (
        <div className={`galaxy-view ${showPanel ? 'active' : ''}`}>
            <div className="galaxy-view-content">
                <h1>Welcome to Galaxy Builder</h1>
                <button onClick={handleCreateStar}>Create Star</button>
                <h2>Select a Solar System:</h2>
                <ul>
                    {systems.map((system, index) => (
                        <li key={index}>
                            <button onClick={() => handleSelectSystem(system)}>{system.name}</button>
                        </li>
                    ))}
                </ul>
                {selectedSystem && (
                    <Link to={{ pathname: "/system", state: { system: selectedSystem } }}>
                        Go to Space Builder
                    </Link>
                )}
                <button onClick={handleClosePanel}>Close</button>
            </div>
        </div>
    );
}

export default GalaxyView;

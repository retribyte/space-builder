import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import './assets/css/style.css';
import './model';
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

    return (
        <div id="root-container" className="container-fluid">
            <Navbar />
            <div className="row align-items-start text-center h-100"> 
                <CreatePanel />
                <ChildrenPanel />
                <MainColumn />
                <InfoPanel />
            </div>
        </div>
    );
}

export default App;

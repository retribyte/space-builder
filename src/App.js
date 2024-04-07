import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import factory from './factory';
import SystemView from './SystemView';
// import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState({systems: [{}]});

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

    useEffect(() => {
        console.log(galaxy);
    }, [])


    return (
        <SystemView system={galaxy.systems ? galaxy.systems[0] : {}}/>
    );
}

export default App;

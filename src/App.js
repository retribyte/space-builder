import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';
import factory from './factory';
import SystemView from './SystemView';
import GalaxyView from './GalaxyView';
import FirebaseAuthUI from './FirebaseAuthUI';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
// import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState({systems: [], landmarks: [], regions: []});

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
            // console.log("Save data does not exist. Loading empty system.");
        }
        
        // console.log(galaxy);
    }, [])


    return (
        <>
            <Navbar />
            <Routes>
                <Route path="system" element={<SystemView system={undefined}/>}/>
                <Route path="galaxy" element={<GalaxyView galaxy={galaxy} setGalaxy={setGalaxy} />}/>
                <Route path="login" element={<FirebaseAuthUI />}/>
                <Route path="*" element={<Navigate to="system" />} />
            </Routes>
           
        </>
    );
}

export default App;

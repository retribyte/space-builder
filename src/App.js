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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { saveUserData, loadUserData } from './login';
import { auth } from './firebase-config';
// import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState({systems: [], landmarks: [], regions: []});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                loadUserData(user.uid).then(data => setGalaxy(data));
            } else {
                setGalaxy({systems: [], landmarks: [], regions: []});
            }
        });
    }, []);

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

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
import { auth, database } from './firebase-config';
import { getDatabase, ref, set, get, child } from 'firebase/database';
// import sampleData from './sample.json';

function App() {
    const [galaxy, setGalaxy] = useState({systems: [], landmarks: [], regions: []});
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Check if this session's sign-in is a new sign-in
                if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                  // New user
                  initializeUserData(user.uid);
                }
                setUser(user);  // Set user to state
            } else {
                setGalaxy({systems: [], landmarks: [], regions: []});
                setUser(null);  // Clear user from state
            }
        });
    }, []);

    const initializeUserData = (userId) => {
        const userDataRef = ref(database, `users/${userId}`);
        get(userDataRef).then((snapshot) => {
            if (!snapshot.exists()) {
            // If no data, set default data
            const defaultData = { systems: [], landmarks: [], regions: [] };
            set(userDataRef, defaultData);
            }
        }).catch(error => {
            console.error("Error checking or initializing user data:", error);
        });
    };

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

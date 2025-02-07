import React, { useState, useEffect } from 'react';
import Navbar from 'src/Navbar';
import SystemView from 'views/SystemView';
import GalaxyView from 'views/GalaxyView';
import FirebaseAuthUI from 'views/FirebaseAuthUI';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, database } from 'utils/firebase-config';
import { getDatabase, ref, set, get, update } from 'firebase/database';

function App() {
    const [galaxy, setGalaxy] = useState({ systems: [], landmarks: [], regions: [] });
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Check if this session's sign-in is a new sign-in
                if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                    console.log("I'm a new user!")
                    // New user
                    initializeUserData(user.uid);
                }
                else {
                    console.log("I'm a returning user!")
                }
                fetchUserData(user.uid);
                setUser(user);  // Set user to state
            } else {
                console.log("No user signed in")
                setGalaxy({ systems: [], landmarks: [], regions: [] });
                setUser(null);  // Clear user from state
            }
        });
    }, []);

    const fetchUserData = (userId) => {
        const userDataRef = ref(database, `users/${userId}`);
        get(userDataRef).then((snapshot) => {
            if (snapshot.exists()) {
                setGalaxy(JSON.parse(snapshot.val()));
            }
        }).catch(error => {
            console.error("Error fetching user data:", error);
        });
        console.log("User data fetched successfully.");
    };

    const updateUserData = (newData) => {
        if (!user) return; // Ensure there is a user before trying to update
        const userDataRef = ref(database, `users/${user.uid}`);
        set(userDataRef, newData) // This will replace the entire data at the specified reference
            .then(() => {
                console.log("User data replaced successfully.");
            })
            .catch(error => {
                console.error("Error replacing user data:", error);
            });
    };


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
                <Route path="system" element={<SystemView system={undefined} />} />
                <Route path="galaxy" element={<GalaxyView galaxy={galaxy} setGalaxy={setGalaxy} saveGalaxy={updateUserData} user={user} />} />
                <Route path="login" element={<FirebaseAuthUI />} />
                <Route path="*" element={<Navigate to="system" />} />
            </Routes>

        </>
    );
}

export default App;

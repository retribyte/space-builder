import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { app, auth } from 'utils/firebase-config';

const FirebaseAuthUI = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);  // State to keep track of user sign-in status

    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChanged(auth, user => {
            setIsSignedIn(!!user);
            if (!user) {
                // Initialize the FirebaseUI Widget here if the user is not signed in
                const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
                const uiConfig = {
                    signInFlow: 'popup',
                    signInOptions: [
                        'google.com',
                    ],
                    callbacks: {
                        signInSuccessWithAuthResult: () => false  // Prevents redirect
                    }
                };
                ui.start('#firebaseui-auth-container', uiConfig);
            }
        });

        return () => {
            unregisterAuthObserver();
            // Optionally clean up the UI instance if initialized
            const ui = firebaseui.auth.AuthUI.getInstance();
            if (ui) {
                ui.delete();
            }
        };
    }, []);

    return (
        isSignedIn
            ?
            <div className='sign-in-notice'>
                <h1>You're signed in!</h1>
                <button className='btn btn-danger' onClick={() => auth.signOut()}>Sign out</button>
            </div>
            :
            <div id="firebaseui-auth-container" />
    );
};

export default FirebaseAuthUI;
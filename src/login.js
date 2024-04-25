import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './firebase-config';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { getDatabase, ref, set, get, child } from 'firebase/database';

const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created:", userCredential.user);
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
};

// Function to save user data
function saveUserData(userId, jsonData) {
    const dbRef = ref(database, 'users/' + userId);
    set(dbRef, jsonData)
        .then(() => console.log("Data saved successfully!"))
        .catch(error => console.error("Failed to save data", error));
}

// Function to load user data
function loadUserData(userId) {
    const dbRef = ref(database, 'users/' + userId);
    return get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Data loaded!", snapshot.val());
                return snapshot.val();  // Returns the JSON data
            } else {
                console.log("No data available");
                return null;
            }
        }).catch(error => {
            console.error("Failed to retrieve data", error);
        });
}


export { signup, saveUserData, loadUserData };
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './firebase-config';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import { getDatabase, ref, set, get, child } from 'firebase/database';

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


export { saveUserData, loadUserData };
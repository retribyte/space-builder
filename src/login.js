import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created:", userCredential.user);
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
};

export { signup };
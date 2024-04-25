import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9LPbP2gXa6E-UCR02NJYKX3ZeG6K68vY",
    authDomain: "space-builder-cop4864.firebaseapp.com",
    projectId: "space-builder-cop4864",
    storageBucket: "space-builder-cop4864.appspot.com",
    messagingSenderId: "689774451392",
    appId: "1:689774451392:web:46e54938b264e9be63ab25"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
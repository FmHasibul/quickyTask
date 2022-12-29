// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkJuLybX2f7OVau-NrjW_oATlipp6AtzM",
    authDomain: "quickytask.firebaseapp.com",
    projectId: "quickytask",
    storageBucket: "quickytask.appspot.com",
    messagingSenderId: "828939576971",
    appId: "1:828939576971:web:873cafef70e2bd71c2168e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCitJpTVcEKamYzuPbMXAeCLzeGsNuQDc4",
  authDomain: "resolve-41e21.firebaseapp.com",
  projectId: "resolve-41e21",
  storageBucket: "resolve-41e21.firebasestorage.app",
  messagingSenderId: "680008768365",
  appId: "1:680008768365:web:a5228ac09300eb74571864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase auth persistence set to localStorage");
  })
  .catch((error) => {
    console.error("Error setting Firebase auth persistence:", error);
  });

export { auth, provider };

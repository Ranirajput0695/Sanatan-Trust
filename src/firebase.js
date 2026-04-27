import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
// You can find this in your Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyBk7-uPfE_VGva-LNdWMKpUQup6B9yIQBc",
  authDomain: "sanatan-website-9e0a6.firebaseapp.com",
  projectId: "sanatan-website-9e0a6",
  storageBucket: "sanatan-website-9e0a6.firebasestorage.app",
  messagingSenderId: "1063679514047",
  appId: "1:1063679514047:web:92715dc23e6180ddaefd0a",
  measurementId: "G-4F7HMEV272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

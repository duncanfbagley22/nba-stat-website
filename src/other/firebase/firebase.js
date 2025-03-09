// Import necessary functions from the modular SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDjbTvP5ZpfX0PMtfSepKzt48JBAZWk3Tc",
  authDomain: "duncan-nba-website.firebaseapp.com",
  projectId: "duncan-nba-website",
  storageBucket: "duncan-nba-website.firebasestorage.app",
  messagingSenderId: "125758792692",
  appId: "1:125758792692:web:d03aca12d3e24177598fa1",
  measurementId: "G-C7ZHLY291J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore instance
export { db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0AKoMc-LSfHh5GXfmi6FFVq8Lpit2YX4",
  authDomain: "whatappweb-8eb4a.firebaseapp.com",
  projectId: "whatappweb-8eb4a",
  storageBucket: "whatappweb-8eb4a.appspot.com",
  messagingSenderId: "934710404451",
  appId: "1:934710404451:web:d56b6c6ca7a4f3a00f1f56",
  measurementId: "G-42Q4YKRKKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth(app);
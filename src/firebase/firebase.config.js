// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeDx8sGGa9vx2A6RqFiPq7FXzsuUPZtyY",
  authDomain: "food-point-hunter.firebaseapp.com",
  projectId: "food-point-hunter",
  storageBucket: "food-point-hunter.appspot.com",
  messagingSenderId: "1009861150662",
  appId: "1:1009861150662:web:7d2eaa88cb0ccaf6d314c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
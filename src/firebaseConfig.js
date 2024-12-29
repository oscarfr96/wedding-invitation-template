import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD94UE7hHZVFj3-_FQflXXQ4IdtoZckCSc",
  authDomain: "wedding-ivanmaria.firebaseapp.com",
  projectId: "wedding-ivanmaria",
  storageBucket: "wedding-ivanmaria.firebasestorage.app",
  messagingSenderId: "612819287061",
  appId: "1:612819287061:web:e0be7af7a1397bf187621c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

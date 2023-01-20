import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDOsWQaAbjAORMjN6J8uoXY7xNWnci5wLU",

  authDomain: "todo-crud-1e27b.firebaseapp.com",

  projectId: "todo-crud-1e27b",

  storageBucket: "todo-crud-1e27b.appspot.com",

  messagingSenderId: "231293347530",

  appId: "1:231293347530:web:99b43c7e998b96cb8bf633",

  measurementId: "G-44PEH09E1X"

};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

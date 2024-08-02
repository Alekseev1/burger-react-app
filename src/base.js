import Rebase from "re-base";
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5Hh8e2xd_ifH8LBJCoPwNLqOYaP0cB64",
  authDomain: "fresh-burgers-94ed9.firebaseapp.com",
  databaseURL:
    "https://fresh-burgers-94ed9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fresh-burgers-94ed9",
  storageBucket: "fresh-burgers-94ed9.appspot.com",
  messagingSenderId: "244320243582",
  appId: "1:244320243582:web:9c803aaf4d2a3c9a4d2d2f",
};

const app = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(app);

export { app };
export default firebaseDb;

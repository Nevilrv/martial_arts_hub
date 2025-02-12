// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8s6PCHVnNhNR33IaeBCZ2ZihIA9udxYU",
  authDomain: "martial-art-hub-ae71a.firebaseapp.com",
  projectId: "martial-art-hub-ae71a",
  storageBucket: "martial-art-hub-ae71a.appspot.com",
  messagingSenderId: "396826607494",
  appId: "1:396826607494:web:1dd69d9a06d85b8da03607",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

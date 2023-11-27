import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNGxDy2I09su-JzscQeY3h7fIrF1ZxlmY",
  authDomain: "am-amzone-clone.firebaseapp.com",
  projectId: "am-amzone-clone",
  storageBucket: "am-amzone-clone.appspot.com",
  messagingSenderId: "710581379585",
  appId: "1:710581379585:web:197067a03e8b019c195600",
  measurementId: "G-6TJRXYSHLG",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

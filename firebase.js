import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUp_7V95cVJNSQJBTG5e4sBBE0PJioIIY",
  authDomain: "voicedemo-f114b.firebaseapp.com",
  projectId: "voicedemo-f114b",
  storageBucket: "voicedemo-f114b.firebasestorage.app",
  messagingSenderId: "805216948802",
  appId: "1:805216948802:web:72c45105ca16c3e85cd3db"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc
};
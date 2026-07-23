import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUp_7V95cVJNSQJBTG5e4sBBE0PJioIIY",
  authDomain: "voicedemo-f114b.firebaseapp.com",
  projectId: "voicedemo-f114b",
  storageBucket: "voicedemo-f114b.firebasestorage.app",
  messagingSenderId: "805216948802",
  appId: "1:805216948802:web:72c45105ca16c3e85cd3db"
};

const app = initializeApp(firebaseConfig);

const join = document.getElementById("join");
const status = document.getElementById("status");

join.addEventListener("click", async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    const room = document.getElementById("room").value.trim();

    if (room === "") {
      status.textContent = "Please enter a room name!";
      return;
    }

    status.textContent = "Microphone Ready 🎤\nJoining room: " + room;

  } catch (err) {
    status.textContent = "Error: " + err.message;
  }
});
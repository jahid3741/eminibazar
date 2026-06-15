import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe7vSP_zgqY0hweD6PcId7OMRzk4aiAX8",
  authDomain: "eminibazar-33e44.firebaseapp.com",
  projectId: "eminibazar-33e44",
  storageBucket: "eminibazar-33e44.firebasestorage.app",
  messagingSenderId: "2525356328",
  appId: "1:2525356328:web:4039cc0c7138cd8183301d",
  measurementId: "G-496M9X9X1P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
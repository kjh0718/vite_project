import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOAyXPBDLIjFTe8lXPGTyo5kQlyz0f1gE",
  authDomain: "vite-project-38783.firebaseapp.com",
  projectId: "vite-project-38783",
  storageBucket: "vite-project-38783.firebasestorage.app",
  messagingSenderId: "354008918192",
  appId: "1:354008918192:web:408d38bd86cd632a3a3375",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

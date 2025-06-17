import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1GhwlzBk69twKfzeZtfBmklU1gdVIJSU",
  authDomain: "react-9am-ac82d.firebaseapp.com",
  projectId: "react-9am-ac82d",
  storageBucket: "react-9am-ac82d.firebasestorage.app",
  messagingSenderId: "782151985912",
  appId: "1:782151985912:web:98819944076d4eb65ba90d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
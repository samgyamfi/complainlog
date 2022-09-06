import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArlMJFkwf5rdR2VJMwnuPIBnaKu-VdXnE",
  authDomain: "complainer-cf17b.firebaseapp.com",
  projectId: "complainer-cf17b",
  storageBucket: "complainer-cf17b.appspot.com",
  messagingSenderId: "1079063524114",
  appId: "1:1079063524114:web:f0745b5f5d4177e444f9cb",
  measurementId: "G-V9EJJQM2FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup }




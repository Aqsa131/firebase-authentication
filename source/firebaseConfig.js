import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase/firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMcld_unuKQh10WUk4djqyaunsF6E0RHQ",
  authDomain: "fir-authentication-1f5bf.firebaseapp.com",
  projectId: "fir-authentication-1f5bf",
  storageBucket: "fir-authentication-1f5bf.firebasestorage.app",
  messagingSenderId: "418328090733",
  appId: "1:418328090733:web:e3838a455698e2dcc50764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  onAuthStateChanged,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification
}
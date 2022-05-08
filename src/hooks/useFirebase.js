import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading,setLoading]= useState(true);
  const auth = getAuth();
  const googlePovider = new GoogleAuthProvider();
  const LoginUser = (email, password, navigate, url) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        navigate(url);
        setError(null);
        setLoading(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const SignUpUser = (email, password, navigate, url) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        navigate(url);
        setError(null);
        setLoading(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //   google login
  const googleLogin = (navigate, url) => {
    setLoading(true);
    signInWithPopup(auth, googlePovider)
      .then(() => {
        navigate(url);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const LogOut = ()=>{
    signOut(auth).then(()=>{
      setUser(null)
    })
  }
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setUser(user);
        setError(null);
        
      } else {
        setUser(null);
      }
    });
  },[auth]);

  return { user, error, LoginUser, SignUpUser, googleLogin, LogOut,loading };
};

export default useFirebase;

import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const user = useSelector(store=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage")
    });
  }

  useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      {user &&
      <div className="w-12 h-12 flex mr-8 p-2">
      <img className="w-12 h-10" alt="Usericon" src={user?.photoURL} />
      <button onClick={handleSignOut} className="font-bold text-yellow-50 ml-4">Sign Out</button>
    </div>
      }
    </div>
      );
};

export default Header;

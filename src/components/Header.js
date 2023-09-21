import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constants";
import GptSearch from "./GptSearch";
import { toggleGptSearchView } from "../utils/gptSlice";

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
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      {user &&
      <div className="flex p-2">
      <button className="bg-purple-700 text-white px-4 mx-4 my-2 py-2 rounded-lg"
      onClick={handleGptSearchClick}
      >GPT Search</button>
      <img className="w-12 h-12" alt="Usericon" src={user?.photoURL} />
      <button onClick={handleSignOut} className="font-bold text-yellow-50 ">Sign Out</button>
    </div>
      }
    </div>
      );
};

export default Header;

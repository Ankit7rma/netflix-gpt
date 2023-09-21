import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch()
  const name = useRef("")
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState();
  const handleButtonClick = () => {
    const message = checkValidData(
      /*name.current.value*/ email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
             photoURL: {USER_AVATAR}
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth,email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }
  };
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white bg-opacity-80 w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-3 w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 "
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

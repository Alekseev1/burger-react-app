import Login from "./Login";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import app from "./../../base";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const SignIn = ({ children }) => {
  const [userState, setuserState] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authHandler({ user });
      }
    });
  }, []);

  const authHandler = async (authData) => {
    const { email } = authData.user;
    setuserState({ userState: email });
  };

  const authenticate = () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then(authHandler);
  };

  return (
    <>
      {!userState ? (
        <Login authenticate={authenticate} />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default SignIn;

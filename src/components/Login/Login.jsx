import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleSingInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSingInWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const LloggedUser = result.user;
      setUser(LloggedUser);
    });
  };
  const handleSingInWithTwiiter = () => {
    signInWithPopup(auth, twitterProvider).then((result) => {
      const loggedUser = result.user;
      setUser(loggedUser);
      console.log(loggedUser);
    });
  };
  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSingOut}>signOut</button>
      ) : (
        <div>
          <button onClick={handleSingInWithGoogle}>singinWithGoogle</button>
          <button onClick={handleSingInWithGithub}>singinWithGithub</button>
          <button onClick={handleSingInWithTwiiter}>singinWithTwitter</button>
        </div>
      )}

      {user && (
        <div className="">
          <h2>user Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>UID : {user.uid}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;

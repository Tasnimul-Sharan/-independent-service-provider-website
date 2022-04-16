import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";
import github from "../../../images/github.png";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  return (
    <section>
      <div>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => signInWithGoogle()}
        >
          <img src={google} alt="" />
          <span className="px-2">Signin With Google</span>
        </button>
      </div>
      <div>
        <button
          className="btn btn-outline-dark mb-2"
          onClick={() => signInWithGithub()}
        >
          <img src={github} alt="" />
          <span className="px-2">Signin With Github</span>
        </button>
      </div>
    </section>
  );
};

export default SocialLogin;

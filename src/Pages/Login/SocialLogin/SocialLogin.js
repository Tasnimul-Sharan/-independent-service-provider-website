import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";
import github from "../../../images/github.png";
import Loading from "../../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  if (user || user1) {
    navigate(from, { replace: true });
  }

  if (error || error1) {
    console.error(error, error1);
  }

  if (loading || loading1) {
    return <Loading />;
  }

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

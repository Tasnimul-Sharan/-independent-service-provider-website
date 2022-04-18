import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("sent email");
  };

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/cheackout";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }

  const handleLogIn = (event) => {
    event.preventDefault();
    if (email !== password) {
      setError("Please enter valid email and password");
    }
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleLogIn} className="container w-25 text-start">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="outline-dark" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Rapid learner?{" "}
        <Link to="/register" className="text-primary text-decoration-none">
          Please Register
        </Link>
      </p>
      <p>
        forget password?
        <Button
          onClick={resetPassword}
          variant="link"
          className="text-danger text-decoration-none"
        >
          Reset password
        </Button>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;

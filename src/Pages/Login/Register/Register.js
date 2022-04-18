import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  if (loading || updating || sending) {
    return <Loading />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("password must be in six character or longer");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    verifyEmail();
  };

  const verifyEmail = async () => {
    await sendEmailVerification();
    toast("sent email");
  };

  return (
    <div>
      <h1>Register</h1>
      <Form className="container w-25 text-start" onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <p className="text-danger">{error}</p>
        </Form.Group>
        <Button
          className="w-100 mb-2"
          onClick={verifyEmail}
          variant="outline-dark"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-danger text-decoration-none">
          Please Login
        </Link>
      </p>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Register;

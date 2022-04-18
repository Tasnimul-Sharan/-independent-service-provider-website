import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  // useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
// import { updateProfile } from "firebase/auth";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";
import { sendEmailVerification } from "firebase/auth";
// import { async } from "@firebase/util";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // const [sendEmailVerification, sending, error2] =
  //   useSendEmailVerification(auth);

  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  if (loading || updating) {
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
  };

  // const verifyEmail = async () => {
  //   if (handleRegister) {
  //     await sendEmailVerification();
  //   }
  // };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // console.log('Email Verification Sent');
      toast("sent email");
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <Form className="container w-25 text-start" onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          {/* <Form.Label>Enter Name</Form.Label> */}
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <p className="text-danger">{error}</p>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={verifyEmail} variant="outline-dark" type="submit">
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

import React from "react";
import { Button, Form } from "react-bootstrap";

const CheackOut = () => {
  return (
    <div>
      <Form className="container w-25 mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="number" placeholder="Phone number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="turms and condition" />
        </Form.Group>
        <Button variant="dark text-white" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CheackOut;

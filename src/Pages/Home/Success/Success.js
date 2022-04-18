import React from "react";
import { Card } from "react-bootstrap";

const Success = ({ student }) => {
  const { name, picture, age } = student;
  return (
    <div className="g-3 col-sm-12 col-md-6 col-lg-4 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Age: {age}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Success;

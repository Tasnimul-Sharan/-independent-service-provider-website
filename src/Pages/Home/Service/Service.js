import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { price, picture, name, description } = service;
  return (
    <div className="g-3 col-sm-12 col-md-6 col-lg-4 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>{price}</h5>
          <Link to="/cheackout">
            <Button variant="outline-dark">Enroll Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;

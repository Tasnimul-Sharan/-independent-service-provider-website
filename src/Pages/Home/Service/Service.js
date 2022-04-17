import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { price, picture, name, description } = service;
  return (
    // className="gy-5 col-sm-12 col-md-6 col-lg-4"
    <div className="gy-5 col-sm-12 col-md-6 col-lg-4">
      <Card
        // xs
        // lg="2"
        // className="gy-5 col-sm-12 col-md-6 col-lg-4"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>{price}</h5>
          <Link to="/cheackout">
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;

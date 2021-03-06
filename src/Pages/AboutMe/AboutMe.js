import React from "react";
import { Card } from "react-bootstrap";
import pic from "../../images/Sharan.jpg.jpg";

const AboutMe = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="ms-3">
          <Card className="shadow-lg" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
              <Card.Title>Tasnimul Alam</Card.Title>
              <Card.Text>
                I was started a journey when i have no idea about web
                development.Now i can make a single page application with
                routing and Authentication and make a connection between
                client-side and server-side with database Mongodb.Now my goal is
                to become a professonal full Stack Web Developer.For this i have
                to search the resources and make notes everyday and practice it
                more and more, And think about the learnning part that how can
                apply it to in a project.I will give plenty of time, I will give
                my best to reach my goal.Now web development is my part of life.
                Thank you.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

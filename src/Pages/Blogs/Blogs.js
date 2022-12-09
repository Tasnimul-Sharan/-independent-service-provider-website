import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    /*The blogs page where the questions and answers*/
    <section>
      <h5>Frequently Asked Questions and Answers</h5>
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              i am using firebse because it is a commplete package of products
              that allows us to build web and mobile application . it improves
              the application quality and help your clients grow their business.
              it creates Application without backend server.It brings a highly
              secure authentication system that improves the user experience
              while they sign-up and sign-in. <br />
              The other options in authentication those are given bellow :
              1.Parse, 2.Back4app, 3.Kinvey, 4.Backendless, 5.Kuzzle, 6.Pubnub,
              7.Kumulos, 8.Game, Sparks 9.Hoodie, 10.Appwrite, 11.Deployd,
              12.NHost, 13.Amplify JS, 14.Heroku,
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              What other services does firebase provide other than
              authentication ?
            </Accordion.Header>
            <Accordion.Body>
              Other services does firebase provide other than authentication are
              given bellow : <br />
              1. Cloud Firestore 2. Cloud Functions 3. Google Analytics
              4.Hosting 5.Cloud Storage 6.Predictions 7. Remote Config 8.Dynamic
              Links 9.Cloud Messaging.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Blogs;

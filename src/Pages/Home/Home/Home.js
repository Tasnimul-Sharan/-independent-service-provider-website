import React from "react";
import web from "../../../images/web.jpg";
// import tutor from "../../../images/tutor.jpg";
import tutor1 from "../../../images/banner.jpg";
import tutor2 from "../../../images/banner2.jpg";
import tutor3 from "../../../images/tutor.jpg";

// import Service from "../Service/Service";
import Services from "../Services/Services";
import { Carousel } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
// import Footer from "../../Shared/Footer/Footer";
import "./Home.css";
import Successful from "../Successful/Successful";

const Home = () => {
  return (
    <section>
      <div className="banner mb-5">
        <div className="">
          <h1>Learn Physics Chemistry and Math course the easy way!</h1>
          <h5>I am online tutor. </h5>
        </div>
      </div>
      {/* <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={tutor1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tutor2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tutor3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <div>
        {/* <img className="img-fluid w-50 mb-5" src={tutor} alt="" /> */}

        <Services />
      </div>
      <div>
        <Successful />
      </div>
      <Footer />
    </section>
  );
};

export default Home;

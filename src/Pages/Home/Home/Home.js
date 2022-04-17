import React from "react";
import web from "../../../images/web.jpg";
import tutor from "../../../images/tutor.jpg";
// import Service from "../Service/Service";
import Services from "../Services/Services";
import { Carousel } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
// import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <section>
      <div>
        {/* <img className="img-fluid w-50 mb-5" src={tutor} alt="" /> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50 img-fluid"
              src={tutor}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Caption>
            <h3 className="text-dark">Learn </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
      <div>
        {/* <h1>My Services</h1> */}
        <Services />
      </div>
      <div>
        {/* <h1>Learn Web Development</h1>
        <p>
          Web development which i always dream about , now i have achieved it
          .You can learn html, css, bootstrap, javaScript, react etc.{" "}
        </p>
      </div>
      <div>
        <img className="img-fluid w-50" src={web} alt="" /> */}
      </div>
      <Footer />
    </section>
  );
};

export default Home;

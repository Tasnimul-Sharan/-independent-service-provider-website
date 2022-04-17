import React from "react";
import web from "../../../images/web.jpg";
import tutor from "../../../images/tutor.jpg";
// import Service from "../Service/Service";
import Services from "../Services/Services";
// import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <section className="container ">
      <div>
        <img className="img-fluid w-50 mb-5" src={tutor} alt="" />
      </div>
      <div>
        <h1>My Services</h1>
        <Services />
      </div>
      {/* <div>
        <Footer />
      </div> */}
      <div className="">
        <h1>Learn Web Development with me</h1>
        <p>
          Web development which i always dream about , now i have achieved it
          .You can learn html, css, bootstrap, javaScript, react etc.{" "}
        </p>
      </div>
      <div>
        <img className="img-fluid w-50" src={web} alt="" />
      </div>
    </section>
  );
};

export default Home;

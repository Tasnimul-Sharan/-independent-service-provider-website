import React from "react";
import web from "../../../images/web.jpg";
import tutor from "../../../images/tutor.jpg";
// import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <section className="container ">
      <div>
        <img className="img-fluid w-50 mb-5" src={tutor} alt="" />
      </div>
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
      {/* <div>
        <Footer />
      </div> */}
    </section>
  );
};

export default Home;

import React from "react";
import Services from "../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import "./Home.css";
import Successful from "../Successful/Successful";

const Home = () => {
  return (
    <section className="container-fluid">
      {/* this is an banner section */}

      <div className="banner row mb-5">
        <div className=" pt-5 col-sm-12 col-md-12 col-lg-12 mb-3 ">
          <div className="pt-5">
            <h1>Learn Physics Chemistry and Math very easily!</h1>
            <h5>
              {" "}
              I have been teaching physics, chemistry and math for three years,
              and i promiss you that you will Learn Effectively this subjects.{" "}
            </h5>
          </div>
        </div>
      </div>

      <div>
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

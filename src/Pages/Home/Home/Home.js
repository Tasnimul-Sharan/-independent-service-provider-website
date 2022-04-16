import React from "react";
import web from "../../../images/web.jpg";
import tutor from "../../../images/tutor.jpg";
// import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <section className="container">
      <div>
        <img className="img-fluid w-50" src={tutor} alt="" />
      </div>
      <div>
        <h1>I am also Expert in web development too</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia nam
        at, voluptatibus, obcaecati aperiam et harum maxime aliquam ducimus
        voluptatum inventore dicta nobis cum rem vitae eum dignissimos.
        Corporis.
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

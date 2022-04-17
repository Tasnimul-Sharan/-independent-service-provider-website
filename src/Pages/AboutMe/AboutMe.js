import React from "react";
import pic from "../../images/Sharan.jpg.jpg";

const AboutMe = () => {
  return (
    <section>
      <div>
        <h4>Tasnimul Alam</h4>
        <img className="img-fluid w-25" src={pic} alt="" />
      </div>
      <div>
        <h5>
          I was started a journey when i have no idea about web development.Now
          i can make a single page application with routing and
          Authentication.Now my goal is to become a professonal full Stack Web
          Developer.For this i have to search the resources and make notes
          everyday and practice it more and more, And think about the learnning
          part that how can apply it to in a project.I want to learn everything
          what i have have to learn , i want to do everything, what i have to
          do.Now web development is my part of life. Thank you.{" "}
        </h5>
      </div>
    </section>
  );
};

export default AboutMe;

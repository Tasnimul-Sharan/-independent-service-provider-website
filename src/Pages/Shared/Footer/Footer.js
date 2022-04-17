import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white pb-2">
      <p>
        <b>
          Copyright © {new Date().getFullYear()} All rights reserved. <br />
          Rapid Learner
        </b>
      </p>
    </div>
  );
};

export default Footer;

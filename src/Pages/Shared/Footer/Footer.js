import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white fixed-bottom">
      <p>
        <b>Copyright © {new Date().getFullYear()}</b>
      </p>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ position: "absolute", width: "100%" }}
      className="footer bg-dark"
    >
      <div className=" text-center">
        <span style={{ color: "#afa6a6" }}>
          All rights reserved to my homies {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

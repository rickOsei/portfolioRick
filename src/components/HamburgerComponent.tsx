import React from "react";

const HamburgerComponent = () => {
  return (
    <button
      id="menu-btn"
      className="block hamburger md:hidden focus:outline-none"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
};

export default HamburgerComponent;

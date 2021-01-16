import React from "react";
import NavBar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <NavBar />
      <br />
      <h2 className="text-center">Welcome!</h2>
      <br />
      <p className="text-center">
        My name's Hamzailer and I'm a solo indie dev and a rookie Web Developer.
        <br />
        <br />
        If you wanna know more about me click on the About Me button on the
        Navbar.
        <br />
        <br />
        If you wanna checkout my projects click on the Projects button on the
        Navbar
      </p>
    </div>
  );
}

export default Home;

import React from "react";
import NavBar from "../Components/Navbar";

function AboutMe() {
  return (
    <div className="text-center">
      <NavBar />
      <br />
      <h2>About Me</h2>
      <br />
      <p>
        Hello There! I'm Hamzailer and I'm pretty new to the dev scene as before
        <br />
        this I was doing Game Dev (And still am) in the Godot Engine.
      </p>

      <br />
      <p>
        But I also wanted to try out making websites too as it seemed like fun
        <br />
        and turns out I was right it's been great using React and
        Typescript/Javascript so far.
        <br />
        Although it was very confusing at first.
        <br />
        After reading some documentation and doing the tutorial at
        <a href="htttps://reactjs.org/tutorial/tutorial.html"> ReactJS.org</a>
        <br />
        It was pretty easy to use and get this site up and running.
        <br />
        If you have anymore questions feel free to contact me at
        Hamzailer@protonmail.com
      </p>
    </div>
  );
}

export default AboutMe;

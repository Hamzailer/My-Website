import React from "react";
import CustomCard from "../Components/CustomCard";
import Row from "react-bootstrap/Row";
import NavBar from "../Components/Navbar";

function Projects() {
  return (
    <div>
      <NavBar />
      <br />
      <h2 className="text-center">My Projects</h2>
      <br />
      <Row className="mx-auto">
        <CustomCard
          title="Crystale"
          image="https://pbs.twimg.com/profile_banners/1330400040314167297/1608641425/1500x500"
          content="A Game Revolving Around the player trying to collect the Crystals of Authority in order to defeat the Monster Overlord."
          link="https://gamejolt.com/games/Crystale/525941"
        />
      </Row>
    </div>
  );
}

export default Projects;

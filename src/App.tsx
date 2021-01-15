import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

//Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/aboutme" component={AboutMe} />
      <Container></Container>
    </Router>
  );
}

export default App;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <h1>Class of <strong className="orange">2023</strong> </h1>
      <Container>
        <Row>
        </Row>
      </Container>
    </Container>
    
  );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Goose0 from "../../Assets/Projects/goose.png";
import GooseOne from "../../Assets/Projects/goose2.gif";
import GooseTwo from "../../Assets/Projects/goose3.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Goose <strong className="orange"> Freak </strong> Flags
        </h1>
        <p style={{ color: "white" }}>
          <strong>Looking for some super cool assets for your stream or just want to rep some Shoe Goose pride? Look no further. All assets have been lovingly created by Mama Goose.</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GooseTwo}
              isBlog={false}
              title="Team Assets"
              description="Bring some new silly energy to your Twitch panels, Youtube sections or emoji sets. Lovingly made by Mama Goose."
              ghLink="https://drive.google.com/drive/folders/1X6gLiCoeEJjv1n-eTED5Dn-1WoFNCYYD"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

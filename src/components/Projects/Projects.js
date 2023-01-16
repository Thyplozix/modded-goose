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
          Goose Freak <strong className="orange"> Flags </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ready for use on your platforms of choice!
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GooseOne}
              isBlog={false}
              title="Basic Guides and Builders"
              description="PLACEHOLDER"
              ghLink="https://nerdordie.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Goose0}
              isBlog={false}
              title="Events"
              description="yet more placeholder text"
              ghLink="https://placeit.net/"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

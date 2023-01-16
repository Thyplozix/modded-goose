import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/goose.png";
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
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

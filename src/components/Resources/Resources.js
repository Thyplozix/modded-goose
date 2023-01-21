import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "./ResourceCard";
import Particle from "../Particle";
import GooseTwo from "../../Assets/Geese/goose.png";

function Resources() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResourceCard
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

export default Resources;

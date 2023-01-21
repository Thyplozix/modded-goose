import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter
} from "react-icons/ai";
import { FaDiscord, FaTwitch, FaFacebook } from "react-icons/fa";
import goose from "../../Assets/about2.png"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="goose-logo">
            <Tilt>
              <img src={goose} className="img-fluid" alt="goose logo"/>
            </Tilt>
          </Col>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="orange-text">THE</span> GOOSE IS LOOSE
            </h1>
            <p className="home-about-body">
            <span className="orange-text">
            Shoe Goose</span>, while the name seems outlandish, has become a gaggle of amazing people
            who foster collaboration and want to help each other build, grow, and nurture individual creativity
              <br />
              <br />
              Shoe Goose was not created by any one person in particular, 
              but was derived from a group of streamers whose communities united together to create something each of us alone never thought possible.
              <br/>
              <br/>
              With our sole purpose to soar to new heights while we learn to adapt and evolve with the ever-changing social media and streaming 
              landscapes to create an open and welcoming environment for those who share our core values of being an all-inclusive and safe space for anyone to nest.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="orange-text">WHERE</span> WE HANG</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/groups/shoegoose"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/TeamShoeGoose"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/xzfzq6vPAQ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.twitch.tv/team/shoegoose"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTwitch />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Looking for some super cool assets for your stream or just want to rep some <strong><span className="orange">Shoe Goose </span></strong>
            pride? Look no further. All assets have been lovingly created by <strong><span className="orange">Mama Goose. </span></strong>
          </p>

          <p className="orange">
            "The snow goose need not bathe to make itself white. Neither need you do anything but be yourself."{" "}
          </p>
          <strong><footer className="blockquote-footer">Lao Tzu</footer></strong>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

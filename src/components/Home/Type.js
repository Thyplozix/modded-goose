import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "welcome, glad you're here :)",
          "we have a lot to honk about!",
          "so if you're a silly goose,",
          "welcome home ❤️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

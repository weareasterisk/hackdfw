import React from 'react';
import {Container} from "reactstrap";

const About = () => {
  return (
    <React.Fragment>
      <Container>
        <h1 className="about-title">About</h1>
        <blockquote className="about-text">
          HackDFW powered by Say Yes to Dallas is a fast-paced innovation marathon. It's a celebration of creative minds--
          where sponsors and aspiring engineers flock together for a weekend to help each other in learning a new skill or showcasing a talent.
          HackDFW will take place over the weekend of October 5th and 6th. Over 500 students, professionals, and enthusiasts will come together at HackDFW
          for 24 hours of learning, making, and doing.
        </blockquote>
      </Container>
    </React.Fragment>
  )
};

export default About;

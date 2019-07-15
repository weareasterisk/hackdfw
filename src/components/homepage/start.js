import React from 'react';
import GlobalNavBar from "../globalnavbar";
import Button from "reactstrap/es/Button";

const Start = () => {
  return (
    <header role="main">
      <div className="start-section">
        <GlobalNavBar/>
        <img className="sy2d-image" src="https://cdn.weareasterisk.com/hackathon-assets/hackdfw/sy2d-fall-2019/blackSY2D-h-slim.svg" alt="hackdfw powered by say yes to dallas"/>
        <div className="start-info">
          <h2 className="logo-caption">The design-thinking hackathon of Dallas.</h2>
          <p style={{marginBottom: "4px"}}>OCTOBER 8 - 9, 2019</p>
          <p>DALLAS, TX</p>
          <a href="https://register.weareasterisk.com/"><Button className="register-button">REGISTER</Button></a>
        </div>
      </div>
    </header>
  )
};

export default Start;

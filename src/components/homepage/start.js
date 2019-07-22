import React from 'react';
import GlobalNavBar from "../globalnavbar";
import Button from "reactstrap/es/Button";
import {Helmet} from "react-helmet";


// background-image: linear-gradient(to bottom,
// #023e55, #00516f,
// #00668b, #007ba8,
// #0090c6, #0b9ed5,
// #16ade5, #1ebcf4,
// #33c7f7, #46d2fa,
// #5addfc, #6de7fe);

const backgroundPrefix = "url(\"https://cdn.weareasterisk.com/hackathon-assets/hackdfw/artwork/sy2d-skyline.svg\") no-repeat bottom,";

const background = (hour) => {
  const hours = hour || new Date().getHours();
  if (hours > 20 || hours <= 6 || hours === 0) {
    return ["#023e55", "#00516f"];
  } else if (hours > 6 && hours <= 7 ) {
    return ["#00668b", "#007ba8"]
  } else if (hours > 7 && hours <= 8) {
    return ["#0090c6", "#0b9ed5"]
  } else if (hours > 8 && hours <= 9) {
    return ["#16ade5", "#1ebcf4"]
  } else if (hours > 9 && hours <= 11) {
    return ["#33c7f7", "#46d2fa"]
  } else if (hours > 11 && hours <= 15) {
    return ["#5addfc", "#6de7fe"]
  } else if (hours > 15 && hours <= 16) {
    return ["#33c7f7", "#46d2fa"]
  } else if (hours > 16 && hours <= 17) {
    return ["#16ade5", "#1ebcf4"]
  } else if (hours > 17 && hours <= 19) {
    return ["#0090c6", "#0b9ed5"]
  } else if (hours > 19 && hours <= 20) {
    return ["#00668b", "#007ba8"]
  }
};

const backgroundColours = background();
const backgroundSuffix = `${backgroundColours[0]}, ${backgroundColours[1]}`;

const Start = () => {
  return (
    <header role="main">
      <GlobalNavBar/>
      <div className="start-section" style={{
        background: backgroundPrefix + `linear-gradient(${backgroundSuffix})`,
      }}>
        <div className="sy2d-background">
          <img className="sy2d-image" src="https://cdn.weareasterisk.com/hackathon-assets/hackdfw/sy2d-fall-2019/blackSY2D-h-slim.svg" alt="hackdfw powered by say yes to dallas"/>
          <div className="start-info">
            <p style={{marginBottom: "4px"}}>OCTOBER 8 - 9, 2019</p>
            <p>DALLAS, TX</p>
            <a href="https://register.weareasterisk.com/"><Button className="register-button">REGISTER</Button></a>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Start;

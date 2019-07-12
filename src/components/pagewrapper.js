import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {Col, Navbar, NavbarBrand, Row} from "reactstrap";

const PageWrapper = (props) => {
  return (
    <React.Fragment>
      <Navbar expand="md" fixed="top" className="justify-content-center">
        <Row className="text-justify w-100">
          <Col lg={3} md={0}/>
          <Col lg={3} md={4} className="text-center">
            <NavLink className="link-white">about</NavLink>
          </Col>
          <Col lg={3} md={4} className="text-center">
            <NavLink className="link-white">schedule</NavLink>
          </Col>
          <Col lg={3} md={4} className="text-center">
            <NavLink className="link-white">faq</NavLink>
          </Col>
        </Row>
        <NavbarBrand><img src="https://cdn.weareasterisk.com/logos/png/emblem-all-white-hd-min.png" alt="asterisk" className="asterisk-nav-logo"/></NavbarBrand>
        <Row className="text-justify w-100">
          <Col lg={3} md={4} className="text-center">
            <NavLink className="link-white">sponsors</NavLink>
          </Col>
          <Col lg={3} md={4} className="text-center">
            <NavLink className="link-white">contact</NavLink>
          </Col>
          <Col lg={3} md={4} className="text-center">
            <NavLink className="link-white">subscribe</NavLink>
          </Col>
          <Col lg={3} md={0}/>
        </Row>
      </Navbar>
      {props.children}
    </React.Fragment>
  )
};

export default PageWrapper;

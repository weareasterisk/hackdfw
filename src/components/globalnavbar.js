import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Col, Collapse, Nav, Navbar, NavbarToggler, Row} from "reactstrap";

export default class GlobalNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  handleClickOutside(event) {
    const t = event.target;
    if (this.state.isOpen
      && !t.classList.contains('navbar-toggler')
      && !t.classList.contains('nav-item')
      && !t.classList.contains('navbar-nav')
      && !t.classList.contains('nav-link')
      && !t.classList.contains('navbar-toggler-icon')) {
      this.close();
    }
  }

  render() {
    return (
      <React.Fragment>
        {/*<header role="main">*/}
          <Navbar expand="md" fixed="top" className="p-around-0" style={this.state.isOpen? {backgroundColor: "#00adef", paddingBottom: "16px!important"} : {}}>
            <NavbarToggler onClick={this.toggle} className="float-right" />
            <Collapse isOpen={this.state.isOpen} navbar className="nav-center justify-content-center text-center">
              <Nav navbar className="w-100">
                <Row className="text-justify nav-row">
                  <Col lg={3} md={0} className="nav-vanish"/>
                  <Col lg={3} md={4} className="text-center">
                    <NavLink className="link-white nav-link" onClick={this.close}>about</NavLink>
                  </Col>
                  <Col lg={3} md={4} className="text-center">
                    <NavLink className="link-white nav-link" onClick={this.close}>schedule</NavLink>
                  </Col>
                  <Col lg={3} md={4} className="text-center">
                    <NavLink className="link-white nav-link" onClick={this.close}>FAQ</NavLink>
                  </Col>
                </Row>
                <img src="https://cdn.weareasterisk.com/logos/png/emblem-all-white-hd-min.png" alt="asterisk" className="asterisk-nav-logo"/>
                <Row className="text-justify nav-row">
                  <Col lg={3} md={4} className="text-center">
                    <NavLink className="link-white nav-link" onClick={this.close}>sponsors</NavLink>
                  </Col>
                  <Col lg={3} md={4} className="text-center">
                    <NavLink className="link-white nav-link" onClick={this.close}>contact</NavLink>
                  </Col>
                  <Col lg={3} md={4} className="text-center">
                    <NavLink className="link-white nav-link" onClick={this.close}>subscribe</NavLink>
                  </Col>
                  <Col lg={3} md={0} className="nav-vanish"/>
                </Row>
              </Nav>
            </Collapse>
          </Navbar>
        {/*</header>*/}
      </React.Fragment>
    )
  }
};

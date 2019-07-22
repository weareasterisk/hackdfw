import React from 'react';
import {Col, Container, Row} from "reactstrap";

const Sponsors = (props) => {
  const {images} = props;
  const {title, presenting, gold, silver, bronze, exhibitor} = images;

  return (
    <React.Fragment>
      <Container>
        <h1 className="sponsors-title">Sponsors</h1>
          <React.Fragment>
            <Row className="sponsors-row">
              <Col md={8} sm={12} className="sponsors-col">
                <img className="image-center" src={title.url} alt={title.alt}/>
              </Col>
            </Row>
            <Row className="sponsors-row">
              <Col md={6} sm={10} className="sponsors-col">
                <img className="image-center" src={presenting.url} alt={presenting.alt}/>
              </Col>
            </Row>
            <Row className="sponsors-row">
              {
                gold.map((image) => {
                  return (
                    <Col md={4} sm={8} className="sponsors-col">
                      <img className="image-center" src={image.url} alt={image.alt}/>
                    </Col>
                  )
                })
              }
            </Row>
            <Row className="sponsors-row">
              {
                silver.map((image) => {
                  return (
                    <Col md={3} sm={6} className="sponsors-col">
                      <img className="image-center" src={image.url} alt={image.alt}/>
                    </Col>
                  )
                })
              }
            </Row>
            <Row className="sponsors-row">
              {
                bronze.map((image) => {
                  return (
                    <Col md={2} sm={4} className="sponsors-col">
                      <img className="image-center" src={image.url} alt={image.alt}/>
                    </Col>
                  )
                })
              }
            </Row>
            <Row className="sponsors-row">
              {
                exhibitor.map((image) => {
                  return (
                    <Col md={1} sm={2} className="sponsors-col">
                      <img className="image-center" src={image.url} alt={image.alt}/>
                    </Col>
                  )
                })
              }
            </Row>
          </React.Fragment>
      </Container>
    </React.Fragment>
  )
};

export default Sponsors;

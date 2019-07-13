import React from "react";
import Container from "reactstrap/es/Container";
import {Col} from "reactstrap";

const Schedule = (data, ...props) => {
  return (
    <React.Fragment>
      <Container fluid>
        {data.map((days) =>
          <Col xl={4} lg={6} md={6} sm={12}>
            <h3>{days.title}</h3>
            {
              days.events.map((event) => {

              })
            }
          </Col>
        )}
      </Container>
    </React.Fragment>
  )
};

export default Schedule;

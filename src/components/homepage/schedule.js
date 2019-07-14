import React from "react";
import Container from "reactstrap/es/Container";
import {Col, Row} from "reactstrap";
import ScheduleItem from "../schedule/scheduleitem";

const Schedule = (props) => {
  return (
    <React.Fragment>
      { props.data.length >= 1 &&
        <Container>
          <h1>Schedule</h1>
          <Row className="container-fluid">
            {props.data.map((days) =>
              <Col xl={6} lg={6} md={12} sm={12} className="pb-5">
                <h3>{days.title}</h3>
                {
                  days.events.map((event) =>
                    <ScheduleItem
                      event={event}
                    />
                  )
                }
              </Col>
            )}
          </Row>
        </Container>
      }
    </React.Fragment>
  )
};

export default Schedule;

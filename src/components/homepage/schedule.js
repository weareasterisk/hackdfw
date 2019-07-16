import React from "react";
import Container from "reactstrap/es/Container";
import {Col, Row, Table} from "reactstrap";
import ScheduleItem from "../schedule/scheduleitem";

const Schedule = (props) => {
  return (
    <React.Fragment>
      { props.data.length >= 1 &&
        <Container>
          <h1 className="schedule-title">Schedule</h1>
          <Row>
            <Col xl={5} lg={5} md={12} sm={12} className="pb-5">
              <h3 className="schedule-day-title">{props.data[0].title}</h3>
              <Table cassName="schedule-table">
                {
                  props.data[0].events.map((event) =>
                    <ScheduleItem
                      event={event}
                    />
                  )
                }
              </Table>
            </Col>
            <Col xl={2} lg={2} md={0} sm={0}/>
            <Col xl={5} lg={5} md={12} sm={12} className="pb-5">
              <h3 className="schedule-day-title">{props.data[1].title}</h3>
              <Table className="schedule-table">
              {
                props.data[1].events.map((event) =>
                  <ScheduleItem
                    event={event}
                  />
                )
              }
              </Table>
            </Col>
          </Row>
        </Container>
      }
    </React.Fragment>
  )
};

export default Schedule;

import React from 'react';
import {Row, Col} from "reactstrap";

const ScheduleItem = (props) => {
  const {event} = props;
  return (
    <React.Fragment>
      <Row>
        <Col className="float-right">{event.time}</Col>
        <Col className="float-left">{event.event}</Col>
      </Row>
    </React.Fragment>
  )
};

export default ScheduleItem;

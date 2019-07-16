import React from 'react';

const ScheduleItem = (props) => {
  const {event} = props;
  return (
    <React.Fragment>
      <tr>
        <td className="event-time"><span>{event.time}</span></td>
        <td className="event-info">
          <span className="event-event">{event.event}</span>
          {!!event.location && <p className="event-location">{event.location}</p> }
        </td>
      </tr>
    </React.Fragment>
  )
};

export default ScheduleItem;

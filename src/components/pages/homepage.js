import React, {Component} from 'react';
import SectionSpacer from "../sectionspacer"
import Start from "../homepage/start"
import About from "../homepage/about"
import Schedule from "../homepage/schedule"
import ScheduleData from "../../contentdata/scheduledata"

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Start/>
        <SectionSpacer/>
        <About/>
        <SectionSpacer/>
        <Schedule
          data={ScheduleData}
        />
      </React.Fragment>
    )
  }
}

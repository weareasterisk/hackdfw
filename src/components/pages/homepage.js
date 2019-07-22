import React, {Component} from 'react';
import SectionSpacer from "../sectionspacer"
import Start from "../homepage/start"
import About from "../homepage/about"
import Schedule from "../homepage/schedule"
import FAQ from "../homepage/faq"
import Sponsors from "../homepage/sponsors"
import ScheduleData from "../../contentdata/scheduledata"
import FAQData from "../../contentdata/faqdata"
import SponsorsImages from "../../contentdata/sponsorsimages"

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

        <SectionSpacer/>

        <FAQ
          data={FAQData}
        />

        <SectionSpacer/>

        <Sponsors
          images={SponsorsImages}
        />

      </React.Fragment>
    )
  }
}

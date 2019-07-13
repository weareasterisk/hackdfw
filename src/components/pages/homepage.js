import React, {Component} from 'react';
import SectionSpacer from "../sectionspacer"
import Start from "../homepagecomponents/start"
import About from "../homepagecomponents/about"

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Start/>
        <SectionSpacer/>
        <About/>
        <SectionSpacer/>
        
      </React.Fragment>
    )
  }
}

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import {Helmet} from 'react-helmet'
import HomePage from "./components/pages/homepage";

const eventLocation = {
  "location": {
    "@type": "Place",
    "name": "Santa Clara City Library, Central Park Library",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2635 Homestead Rd",
      "addressLocality": "Santa Clara",
      "postalCode": "95051",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
};

const eventData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "HackDFW",
  "startDate": "2019-10-05",
  "endDate": "2019-10-06",
  // eventLocation,
  "image": [
    "https://cdn.weareasterisk.com/hackathon-assets/hackdfw/logos/png/hackdfw-1x1-color.png",
    "http://cdn.weareasterisk.com/hackathon-assets/hackdfw/artwork/banner-hd-large.png"
  ],
  "description": "HackDFW is the design-thinking hackathon of Dallas. It is a place where you can be part of the nebulous, wondrous, awe-inspiring, frustrating-yet-glorious process of creating. A place where ideas aren't limited by fear or doubt, just 24 hours.",
};

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>HackDFW | The Design Thinking Hackathon of Dallas</title>
        <script className='structured-data-list' type="application/ld+json">
          {JSON.stringify(eventData)}
        </script>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

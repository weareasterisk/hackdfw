import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import {Helmet} from 'react-helmet'
import HomePage from "./components/pages/homepage";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>HackDFW | The Design Thinking Hackathon of Dallas</title>
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

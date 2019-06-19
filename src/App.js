import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import SplashPage from "./components/splashpage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

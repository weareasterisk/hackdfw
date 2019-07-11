import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import HomePage from "./components/pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

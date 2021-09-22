import React, {Component} from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import './fonts.css';
import './main.css';
import Home from "./pages";
import FaqPage from "./pages/FaqPage.js";

class App extends Component {

  render () {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/faq">
          <FaqPage />
        </Route>
      </Switch>
    </BrowserRouter>

   );
  }
}

export default App;
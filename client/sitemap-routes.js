import React from "react";
import {Route} from "react-router-dom";
export default {

  render () {
    return (
        <Route>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/faq">
            <FaqPage />
            </Route>
        </Route>
   );
  }
}
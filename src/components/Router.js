import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Board from "./Board";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/view/:boardId" component={Board} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

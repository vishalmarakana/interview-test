import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Homepage from "./pages/homepage/homepage";

const history = createBrowserHistory();

const App = () => {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
  );
};

export default App;

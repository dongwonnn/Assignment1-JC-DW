import React from "react";
import { Route, Switch } from "react-router-dom";
import Comment from "pages/Comment";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Comment} />
    </Switch>
  );
};

export default App;

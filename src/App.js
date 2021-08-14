import React from "react";
import { Route, Switch } from "react-router-dom";
import CommentPage from "pages/CommentPage";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={CommentPage} />
    </Switch>
  );
};

export default App;

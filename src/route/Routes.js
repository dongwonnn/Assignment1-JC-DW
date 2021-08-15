import React from "react";
import { Route, Switch } from "react-router-dom";
import Comment from "pages/Comment";
import { ROUTES } from "utils/constants";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.COMMENT} component={Comment} />
    </Switch>
  );
};

export default Routes;

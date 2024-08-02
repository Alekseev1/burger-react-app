import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../Landing";
import NotFound from "./NotFound";

import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/burger-react-app"
          render={(props) => <Landing {...props} />}
        />
        <Route path="/restaurant/:restaurantId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

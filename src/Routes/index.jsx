import { Route, Switch } from "react-router-dom";

import FeedPage from "../Pages/FeedPage";
import LandingPage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import RegisterPage from "../Pages/RegisterPage";
import NotFoundPage from "../Pages/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/feed" component={FeedPage} />
      <Route exact path="/profile/:name" component={ProfilePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

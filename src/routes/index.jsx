import { Route, Switch } from "react-router-dom";

import FeedPage from "../pages/FeedPage";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage/index.jsx";
import RegisterPage from "../pages/RegisterPage";
import About from "../pages/About";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/feed" component={FeedPage} />
      <Route exact path="/profile/:name" component={ProfilePage} />
      <Route exact path="/about" component={About} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

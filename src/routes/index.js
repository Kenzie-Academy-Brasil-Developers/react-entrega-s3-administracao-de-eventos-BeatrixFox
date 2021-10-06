import { Route, Switch } from "react-router";
import Home from "./../pages/Home/home";
import Graduation from "./../pages/Graduation/Graduation";
import Wedding from "./../pages/Wedding/Wedding";
import Confraternization from "./../pages/Confraternization/Confraternization";
import SelectionBeers from "./../pages/SelectionBeers/SelectionBeers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/SelectionBeers">
        <SelectionBeers />
      </Route>
      <Route exact path="/Wedding">
        <Wedding />
      </Route>
      <Route exact path="/Graduation">
        <Graduation />
      </Route>
      <Route exact path="/Confraternization">
        <Confraternization />
      </Route>
    </Switch>
  );
};

export default Routes;

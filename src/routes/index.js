import { Route, Switch } from "react-router";
import Home from "../pages/Home/HomePg";
import Graduation from "../pages/Graduation/GraduationPg";
import Wedding from "../pages/Wedding/WeddingPg";
import Confraternization from "../pages/Confraternization/ConfraternizationPg";
import SelectionBeers from "../pages/SelectionBeers/SelectionBeersPg";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/SelectionBeersPg">
        <SelectionBeers />
      </Route>
      <Route exact path="/WeddingPg">
        <Wedding />
      </Route>
      <Route exact path="/GraduationPg">
        <Graduation />
      </Route>
      <Route exact path="/ConfraternizationPg">
        <Confraternization />
      </Route>
    </Switch>
  );
};

export default Routes;

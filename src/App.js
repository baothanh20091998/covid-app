import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./module/main/pages/home/home.page";
import Contact from "./module/main/pages/contact/contact.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home></Home>
        </Route>
        <Route path="/contact" exact={true}>
          <Contact></Contact>
        </Route>
        <Route>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

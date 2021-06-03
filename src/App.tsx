import Parent from "./component/parent-child/Parent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Locale from "./other/i18n/Locale";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/i18n">
          <Locale />
        </Route>
        <Route path="/parent">
          <Parent />
        </Route>
        <Route path="/">
          <div>home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

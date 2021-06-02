//eslint-disable-next-line

import './App.css';
import { Route, Switch} from 'react-router-dom';
import Starred from './Files/Starred';
import Home from './Files/Home';
import Show from "./Files/Show"

function App() {
  return (
      
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        404 Page not Found
      </Route>
    </Switch>
   
  );
}

export default App;

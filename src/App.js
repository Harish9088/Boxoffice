//eslint-disable-next-line

import './App.css';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Starred from './Files/Starred';
import Home from './Files/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/show">
        <Starred />
      </Route>
      <Route>
        404 Page not Found
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;

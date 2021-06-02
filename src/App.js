
import { Switch, Route } from "react-router-dom";
import Home from "./Files/Home";
import Starred from "./Files/Starred";
import Show from "./Files/Show";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535"
  }
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
        <Route>404 not found</Route>
      </Switch>
    </ThemeProvider>
  );
}

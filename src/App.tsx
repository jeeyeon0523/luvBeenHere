import { GlobalStyles, lightTheme } from "./styles";
import MapView from './screens/MapView'
import Navi from './Component/Navi';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles/>
        <Router>
          <Navi />
          <Switch>
            <Route path="/map">
              <MapView />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
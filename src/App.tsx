import { GlobalStyles, lightTheme } from "./styles";
import Navi from './Component/Navi';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContentContainer from "./Component/ContentContainer";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles/>
        <Router>
          <Navi />
          <Switch>
            <Route path="/map">
              <ContentContainer />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
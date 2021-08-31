import { ApolloProvider } from '@apollo/client';
import { GlobalStyles, lightTheme } from "./styles";
import Navi from './Component/Navi';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContentContainer from "./Component/ContentContainer";
import './App.css';
import { client } from "./apollo";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
}

export default App;

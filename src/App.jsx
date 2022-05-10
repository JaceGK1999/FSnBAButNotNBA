import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Holder from './views/Holder';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          {/* <Route path="/">
            <Holder />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

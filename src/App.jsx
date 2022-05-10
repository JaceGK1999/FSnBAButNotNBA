import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          {/* <Route path="/">
            <Holder />
          </Route> */}
        </Switch>
    </div>
  );
}

export default App;

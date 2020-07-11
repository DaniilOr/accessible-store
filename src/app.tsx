import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Form from './form';
import Login from './login';
import Registration from './registration';

function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <Switch>
      <Route path="/registration">
        <Registration />
      </Route>
      {authorized && (
        <Route path="/form">
          <Form />
        </Route>
      )}
      <Route path="/login">
        {authorized ? (
          <Redirect to="/form" />
        ) : (
          <Login authorize={() => setAuthorized(true)} />
        )}
      </Route>
      <Route>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;

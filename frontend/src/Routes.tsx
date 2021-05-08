import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" >
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default src;
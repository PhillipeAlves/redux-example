import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SearchPage, NotFound, DataPage } from './Pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route path='/data' component={DataPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

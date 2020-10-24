import React from 'react';
import { Switch } from 'react-router-dom';

import Info from '../pages/Info';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

import Route from './Route';

import AuthProvider from '../Context/AuthContext';

export default function Routes() {
  return(
    <AuthProvider>
      <Switch>
        <Route path='/info' exact component={Info} />
        <Route path='/dashboard' isPrivate exact component={Dashboard} />
        <Route path='/' exact component={Login} />
      </Switch>
    </AuthProvider>
  );
}
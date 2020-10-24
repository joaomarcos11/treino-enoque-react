import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default'
import AuthLayout from '../pages/_layouts/auth'

import { useAuth } from '../Context/AuthContext';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
    // const signed = false;
    // const signed = true;


    // useAuth ta pegando do AuthProvider
    const { signed } = useAuth();

    if(!signed && isPrivate) {
      return <Redirect to="/" />
    }

    if(signed && !isPrivate) {
      return <Redirect to="/dashboard" />
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
      <Route 
        {...rest}
        render={(props) => (
        <Layout>
          <Component {...props} /> 
        </Layout>
        )}
      />
    );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool
};

RouterWrapper.defaultProps= {
  isPrivate: false,
}
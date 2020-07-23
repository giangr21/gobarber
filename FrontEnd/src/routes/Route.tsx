import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// Rota privada, usuario autenticado, OK
// Rota privada, usuario nao autenticado, REDIRECT login
// Rota publica, usuario autenticado, REDIRECT dashboard
// Rota publica, usuario nao autenticado, OK

const Route: React.FC<RouteProps> = (
  { isPrivate = false, component: Component },
  ...rest
) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;

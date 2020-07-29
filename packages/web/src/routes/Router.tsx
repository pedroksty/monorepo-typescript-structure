import React from 'react';
import { Route, Redirect } from 'react-router-dom'

interface Props {
  component: React.ReactType;
  isPrivate: boolean;
  path: string;
  exact?: boolean;
}

const RouteWrapper: React.SFC<Props> = ({
  component: Component,
  isPrivate,
  path,
  exact,
  ...rest
}) => {

  const signed = false

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  return (

    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(props) => (
        <Component  {...props} />
      )}
    />
  )
}

export default RouteWrapper;
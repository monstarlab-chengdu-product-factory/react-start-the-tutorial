import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NoMatch from '../components/common/NoMatch';

import Collections from '../containers/collectionPage/Collections';
import Collection from '../containers/collectionPage/Collection';

import App from '../containers/App';

const host = '';

const routes = [
  {
    path: host + '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Collections
      },
      {
        path: '/collections',
        component: Collections
      },
      {
        path: '/collection/:id',
        component: Collection
      }
    ]
  }
];

export const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export const RouteConfig = () => (
  <Router>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

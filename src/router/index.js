import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NoMatch from '../components/common/NoMatch';

import Collections from '../containers/collectionPage/Collections';
import Collection from '../containers/collectionPage/Collection';
import User from '../containers/userPage/User';
import Users from '../containers/userPage/Users';
import Pass from '../containers/passPage/Pass';
import Passes from '../containers/passPage/Passes';
import NpRoute from '../containers/routePage/Route';
import NpRoutes from '../containers/routePage/Routes';
import Howto from '../containers/howtoPage/Howto';
import Howtos from '../containers/howtoPage/Howtos';
import Tag from '../containers/tagPage/Tag';
import Tags from '../containers/tagPage/Tags';
import Shop from '../containers/shopPage/Shop';
import Shops from '../containers/shopPage/Shops';
import Coupon from '../containers/couponPage/Coupon';
import Coupons from '../containers/couponPage/Coupons';
import New from '../containers/newPage/New';
import News from '../containers/newPage/News';
import Picture from '../containers/picturePage/Picture';
import Pictures from '../containers/picturePage/Pictures';
import Ad from '../containers/adPage/Ad';
import Ads from '../containers/adPage/Ads';

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
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/user/:id',
        component: User
      },
      {
        path: '/passes',
        component: Passes
      },
      {
        path: '/pass/:id',
        component: Pass
      },
      {
        path: '/routes',
        component: NpRoutes
      },
      {
        path: '/route',
        component: NpRoute
      },
      {
        path: '/howtos',
        component: Howtos
      },
      {
        path: '/howto',
        component: Howto
      },
      {
        path: '/tags',
        component: Tags
      },
      {
        path: '/tag',
        component: Tag
      },
      {
        path: '/shops',
        component: Shops
      },
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/coupons',
        component: Coupons
      },
      {
        path: '/coupon',
        component: Coupon
      },
      {
        path: '/news',
        component: News
      },
      {
        path: '/new',
        component: New
      },
      {
        path: '/pictures',
        component: Pictures
      },
      {
        path: '/picture',
        component: Picture
      },
      {
        path: '/ads',
        component: Ads
      },
      {
        path: '/ad',
        component: Ad
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

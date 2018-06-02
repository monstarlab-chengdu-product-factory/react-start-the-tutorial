import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {RouteConfig} from './router/index'
import store from './store'

// import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <RouteConfig/>
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
import React, {Component} from 'react'
import {Layout} from 'antd'

import '../assets/stylesheet/css/style.css'

import {RouteWithSubRoutes} from '../router'

const {Content} = Layout

class App extends Component {
  render() {
    return (
      <Layout className="main">
        <Layout>
          <Content className="content">
            <div className="router-view">
              {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>

          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App

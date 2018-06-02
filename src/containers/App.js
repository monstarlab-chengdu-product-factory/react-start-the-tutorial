import React, {Component} from 'react'
import {Layout} from 'antd'

import '../assets/stylesheet/css/style.css'

import {RouteWithSubRoutes} from '../router'
import {hiddenGlobalError} from '../actions'

import AppHeader from '../components/common/AppHeader'
import AppSider from '../components/common/AppSider'

const {Content, Footer} = Layout

class App extends Component {
  render() {
    return (
      <Layout className="main">
        <AppSider/>
        <Layout>
          <AppHeader/>
          <Content className="content">

            <div className="router-view">
              {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>

          </Content>
          <Footer className="footer">
            日本放題 ©2018 CMS Management Center
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App

import React, {Component} from 'react'
import {Layout, Icon} from 'antd'

const {Header} = Layout

class AppHeader extends Component {
  render() {
    return (
      <Header className="header">
        <div className="item">
          <img src="" alt=""/>
          <span>アカウント</span>
        </div>

        <div className="item">
          <Icon type="logout"/>
          <span>ログアウト</span>
        </div>
      </Header>
    )
  }
}

export default AppHeader
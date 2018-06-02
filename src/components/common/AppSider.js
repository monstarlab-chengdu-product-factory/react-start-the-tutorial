import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

import * as logo from '../../assets/image/logo.png';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const list = [
  {
    id: 2,
    type: 'user',
    name: 'ユーザー',
    children: [
      {
        id: 2.1,
        name: 'ユーザー一覧',
        path: '/users'
      },
      {
        id: 2.2,
        name: 'ユーザー詳細',
        path: '/user'
      }
    ]
  },
  {
    id: 3,
    type: 'bars',
    name: '特集',
    children: [
      {
        id: 3.1,
        name: '特集一覧',
        path: '/collections'
      },
      {
        id: 3.2,
        name: '新規特集',
        path: '/collection/new'
      }
    ]
  },
  {
    id: 4,
    type: 'gift',
    name: 'お得パス',
    children: [
      {
        id: 4.1,
        name: 'お得パス一覧',
        path: '/passes'
      },
      {
        id: 4.2,
        name: '新規パス',
        path: '/pass'
      }
    ]
  },
  {
    id: 5,
    type: 'environment-o',
    name: 'ルート',
    children: [
      {
        id: 5.1,
        name: 'ルート一覧',
        path: '/routes'
      },
      {
        id: 5.2,
        name: '新規ルート',
        path: '/route'
      }
    ]
  },
  {
    id: 6,
    type: 'form',
    name: 'HOW TO',
    children: [
      {
        id: 6.1,
        name: 'HOW TO 一覧',
        path: 'howtos'
      },
      {
        id: 6.2,
        name: '新規 HOW TO ',
        path: '/howto'
      }
    ]
  },
  {
    id: 7,
    type: 'tags-o',
    name: 'タグ',
    children: [
      {
        id: 7.1,
        name: 'タグ一覧',
        path: '/tags'
      },
      {
        id: 7.2,
        name: '新規タグ',
        path: '/tag'
      }
    ]
  },
  {
    id: 8,
    type: 'shop',
    name: '施設',
    children: [
      {
        id: 8.1,
        name: '施設一覧',
        path: '/shops'
      },
      {
        id: 8.2,
        name: '新規施設',
        path: '/shop'
      }
    ]
  },
  {
    id: 9,
    type: 'pay-circle-o',
    name: 'クーポン',
    children: [
      {
        id: 9.1,
        name: 'クーポン一覧',
        path: '/coupons'
      },
      {
        id: 9.2,
        name: 'クーポン施設',
        path: '/coupon'
      }
    ]
  },
  {
    id: 10,
    type: 'notification',
    name: 'お知らせ',
    children: [
      {
        id: 10.1,
        name: 'お知らせ一覧',
        path: '/news'
      },
      {
        id: 10.2,
        name: '新規お知らせ',
        path: '/new'
      }
    ]
  },
  {
    id: 11,
    type: 'picture',
    name: '画像',
    children: [
      {
        id: 11.1,
        name: '画像一覧',
        path: '/pictures'
      },
      {
        id: 11.2,
        name: '新規画像',
        path: '/picture'
      }
    ]
  },
  {
    id: 12,
    type: 'layout',
    name: '広告',
    children: [
      {
        id: 12,
        name: '広告一覧',
        path: '/ads'
      },
      {
        id: 12.2,
        name: '新規広告',
        path: '/ad'
      }
    ]
  }
];

class AppSider extends Component {
  state = {
    collapsed: false
  };

  onClick = path => {};

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const item = val => {
      if (val) {
        return val.map((val, index) => (
          <Menu.Item key={val.id} onClick={this.onClick(this, val.path)}>
            <NavLink to={val.path}>{val.name}</NavLink>
          </Menu.Item>
        ));
      }
    };

    return (
      <Sider
        className="side-bar"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo">
          <img src={logo} alt="日本放題" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <NavLink to="/">
              <Icon type="home" />
              <span>top</span>
            </NavLink>
          </Menu.Item>
          {list.map(val => (
            <SubMenu
              key={val.id}
              title={
                <span>
                  <Icon type={val.type} />
                  <span>{val.name}</span>
                </span>
              }
            >
              {item(val.children)}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default AppSider;

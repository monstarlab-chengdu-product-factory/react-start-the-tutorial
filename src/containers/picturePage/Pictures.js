import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {
  Table,
  Tabs,
  Button,
  Icon
} from 'antd';

import SearchForm from '../../components/collection/SearchForm'

const TabPane = Tabs.TabPane;

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    sorter: (a, b) => a.id - b.id
  },
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: '編集者',
    dataIndex: 'author',
    sorter: (a, b) => a.author.length - b.author.length
  },
  {
    title: '公開日',
    dataIndex: 'publishDate',
    sorter: (a, b) => a.publishDate.length - b.publishDate.length
  },
  {
    title: '更新日',
    dataIndex: 'updateDate',
    sorter: (a, b) => a.updateDate.length - b.updateDate.length
  },
  {
    title: '狀態',
    dataIndex: 'status',
    sorter: (a, b) => a.status - b.status
  }];

const data = [
  {
    key: 1,
    title: 'test test test test',
    author: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 3
  },
  {
    key: 2,
    title: 'test test test test',
    author: 'John Mayer 2',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 2
  },
  {
    key: 3,
    title: 'test test test test',
    author: 'John Mayer 3',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 1
  },
  {
    key: 4,
    title: 'test test test test',
    author: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 1
  },
  {
    key: 5,
    title: 'test test test test',
    author: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 3
  },
  {
    key: 6,
    title: 'test test test test',
    author: 'John Mayer 2',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 2
  },
  {
    key: 7,
    title: 'test test test test',
    author: 'John Mayer 3',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 1
  },
  {
    key: 8,
    title: 'test test test test',
    author: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12',
    status: 1
  }];


function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    expand: false,
  };


  onTabsChange = (key) => {
    console.log(key);
  }

  onRowClick = (record) => {
    console.log(record)
    this.props.history.push(`collection/${record.key}`)
  }

  onAdd = () =>{
    this.props.history.push(`collection/new`)
  }

  render() {
    const operations = <Button type='primary'
                               size='large'
                               onClick={this.onAdd}>＋新規記事</Button>;

    return (
      <div className="collections-list">
        <Tabs
          defaultActiveKey="1"
          onChange={this.onTabsChange}
          tabBarExtraContent={operations}
        >
          <TabPane tab="特集リスト" key="1">
            <SearchForm/>
            <Table columns={columns}
                   dataSource={data}
                   onChange={onChange}
                   onRow={(record) => {
                     return {
                       onClick: this.onRowClick.bind(this, record),
                     };
                   }}/>
          </TabPane>

          <TabPane tab="下書箱" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
      </div>
    )
  }
}
export default withRouter(Collections)
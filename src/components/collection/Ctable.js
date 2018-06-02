import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'ユーザ名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'XX',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'XX',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'XX',
    key: 'action'
  },
  {
    title: '時間',
    key: 'time'
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32
  }
];
export class Ctable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}

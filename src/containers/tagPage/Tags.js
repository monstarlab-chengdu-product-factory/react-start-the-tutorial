import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Tabs, Button, Icon, Row, Col } from 'antd';

import SearchForm from '../../components/collection/TagSearchForm';

const TabPane = Tabs.TabPane;

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    sorter: (a, b) => a.id - b.id
  },
  {
    title: 'タグ名',
    dataIndex: 'tagName',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: 'メモ',
    dataIndex: 'memo',
    sorter: (a, b) => a.author.length - b.author.length
  },
  {
    title: '登録日',
    dataIndex: 'publishDate',
    sorter: (a, b) => a.publishDate.length - b.publishDate.length
  },
  {
    title: '更新日',
    dataIndex: 'updateDate',
    sorter: (a, b) => a.updateDate.length - b.updateDate.length
  }
];

const data = [
  {
    key: 1,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 2,
    tagName: 'test test test test',
    memo: 'John Mayer 2',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 3,
    tagName: 'test test test test',
    memo: 'John Mayer 3',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 4,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 5,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 6,
    tagName: 'test test test test',
    memo: 'John Mayer 2',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 7,
    tagName: 'test test test test',
    memo: 'John Mayer 3',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 8,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  }
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    expand: false
  };

  onTabsChange = key => {
    console.log(key);
  };

  onRowClick = record => {
    console.log(record);
    this.props.history.push(`tag/${record.key}`);
  };

  onAdd = () => {
    this.props.history.push(`tag/new`);
  };

  render() {
    const operations = (
      <Button type="primary" size="large" onClick={this.onAdd}>
        ＋新規記事
      </Button>
    );

    return (
      <div className="collections-list">
        <div className="collection-detail-main">
          <div className="header-container" style={{ border: 'none' }}>
            <Row>
              <Col span={24} className="button-group align-right">
                <Col span={16}>タグ一覧</Col>
                <Button
                  type="primary"
                  className="button-add"
                  onClick={this.onAdd}
                >
                  ＋ 追加
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <SearchForm />

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ simple: true, defaultCurrent: 1, total: 29 }}
          onChange={onChange}
          onRow={record => {
            return {
              onClick: this.onRowClick.bind(this, record)
            };
          }}
        />
      </div>
    );
  }
}
export default withRouter(Collections);

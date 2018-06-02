import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Button, Icon, Row, Col, Pagination } from 'antd';
import { fetchCollections } from '../../actions/collection';

import SearchForm from '../../components/collection/CouponSearchForm';

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    sorter: (a, b) => a.id - b.id
  },
  {
    title: 'ジャンル',
    dataIndex: 'genre',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: '施設名',
    dataIndex: 'name',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: '住所',
    dataIndex: 'address',
    sorter: (a, b) => a.author.length - b.author.length
  },
  {
    title: 'クーポン',
    dataIndex: 'coupon',
    sorter: (a, b) => a.publishDate.length - b.publishDate.length
  },
  {
    title: '登録日',
    dataIndex: 'publishDate',
    sorter: (a, b) => a.updateDate.length - b.updateDate.length
  },
  {
    title: '更新日',
    dataIndex: 'updateDate'
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
  },
  {
    key: 9,
    tagName: 'test test test test',
    memo: 'John Mayer 2',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 10,
    tagName: 'test test test test',
    memo: 'John Mayer 3',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 11,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 12,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 13,
    tagName: 'test test test test',
    memo: 'John Mayer 2',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 14,
    tagName: 'test test test test',
    memo: 'John Mayer 3',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  },
  {
    key: 15,
    tagName: 'test test test test',
    memo: 'John Mayer',
    publishDate: '2018/05/12',
    updateDate: '2018/05/12'
  }
];

class Collections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    expand: false
  };
  componentDidMount() {
    this.props.fetchCollections();
  }
  renderCollections() {
    let collectionsList = [];
    const { collections } = this.props;
    const collectionsData = collections.data;
    if (collectionsData) {
      for (let i = 0; i < collectionsData.pageData.length; i++) {
        collectionsList.push({
          key: collectionsData.pageData[i].newsId,
          type: collectionsData.pageData[i].newsType,
          title: collectionsData.pageData[i].newsTitle,
          author: collectionsData.pageData[i].newsAuthor,
          publishDate: collectionsData.pageData[i].newsShowDt,
          updateDate: collectionsData.pageData[i].upDt,
          status: collectionsData.pageData[i].newsStatus
        });
      }
      return collectionsList;
    } else {
      return;
    }
  }
  onTabsChange = key => {
    console.log(key);
  };

  onRowClick = record => {
    console.log(record);
    this.props.history.push(`shop/${record.key}`);
  };

  onAdd = () => {
    this.props.history.push(`shop/new`);
  };

  render() {
    const { collections } = this.props;
    if (collections.data) {
      this.renderCollections();
    }

    return (
      <div className="collections-list">
        <div className="collection-detail-main">
          <div className="header-container" style={{ border: 'none' }}>
            <Row>
              <Col span={24} className="button-group align-right">
                <Col span={16}>クーポン一覽</Col>
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
const mapstateToProps = state => {
  return {
    collections: state.collections.setCollections
  };
};
const mapDispatchToProps = { fetchCollections };
export default connect(mapstateToProps, mapDispatchToProps)(
  withRouter(Collections)
);

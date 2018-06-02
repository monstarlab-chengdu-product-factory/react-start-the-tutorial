import React, { Component } from 'react';
import { Row, Col, Button, Select, Input } from 'antd';

const Option = Select.Option;
const { TextArea } = Input;

class Collection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collection-detail-main">
        <div className="header-container">
          <Row>
            <Col span={8}>
              <Select
                onChange={this.handleChange}
                style={{ width: '100%' }}
                defaultValue="不公開"
              >
                <Option value="publish">公開</Option>
                <Option value="unPublish">不公開</Option>
              </Select>
            </Col>
            <Col span={8} offset={8} className="button-group align-right">
              <Button onClick={this.onReset}>削除</Button>
              <Button type="primary">保存</Button>
            </Col>
          </Row>
        </div>
        <form onSubmit={this.hanleSubmit}>
          {/*basic info*/}
          <div className="detail-basic">
            <br />
            <br />
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>日本語:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>英語:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>中国語繁体:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>韓国語:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>メモ:</label>
                </Col>
                <Col span={19} offset={1}>
                  <TextArea rows={4} />
                </Col>
              </Col>
            </Row>
          </div>
        </form>
      </div>
    );
  }
}

export default Collection;

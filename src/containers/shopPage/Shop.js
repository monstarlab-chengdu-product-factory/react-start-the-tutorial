import React, { Component } from 'react';
import { Row, Col, Button, Select, Input, Upload, message, Icon } from 'antd';

const Option = Select.Option;
const { TextArea } = Input;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      <a
        href="/user/i"
        target="_blank"
        style={{
          textDecoration: 'underline',
          display: 'block',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        哈哈哈哈哈哈哈哈哈哈哈哈
      </a>
    </Option>
  );
}
function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}
class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    };
  }

  render() {
    const imageUrl = this.state.imageUrl;
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
                  <label>ジャンル:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    style={{ width: '100%' }}
                    onChange={this.handleChange}
                  >
                    {children}
                  </Select>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>画像:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange3}
                  >
                    {imageUrl ? (
                      <img src={imageUrl} alt="" />
                    ) : (
                      <div>
                        <Icon type={this.state.loading ? 'loading' : 'plus'} />
                        <div className="ant-upload-text">写真アップロード</div>
                      </div>
                    )}
                  </Upload>
                  <p className="ant-upload-subtext">縦***横***サイズは2M以内</p>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>施設名:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>読み（アルファベット）:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>住所：:</label>
                </Col>
                <Col span={19} offset={1}>
                  <TextArea rows={4} />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>地図用:</label>
                </Col>
                <Col span={2} offset={1}>
                  経度
                </Col>
                <Col span={7}>
                  <Input />
                </Col>
                <Col span={2} offset={1}>
                  緯度
                </Col>
                <Col span={7}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>営業時間:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>定休日:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>アクセス:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>サイトURL:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>店舗説明:</label>
                </Col>
                <Col span={19} offset={1}>
                  <TextArea rows={4} />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>電話番号:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Input />
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>クーポン:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    style={{ width: '100%' }}
                    onChange={this.handleChange}
                  >
                    {children}
                  </Select>
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

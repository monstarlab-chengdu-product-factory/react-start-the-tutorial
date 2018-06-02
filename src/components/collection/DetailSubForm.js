import React, {Component} from 'react'
import {
  Icon,
  Button,
  Input,
  Select,
  Row,
  Col,
} from 'antd';
import Media from '../../components/collection/Media';

const {TextArea} = Input;
const Option = Select.Option;

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

class DetailSubForm extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    media: [{}],
  }

  handleChange = (value) => {
    console.log(value.parentElement);
  };

  addMedia = () => {
    let list = this.state.media
    let obj = {}
    list.push(obj)
    this.setState({
      media: list
    })
  }

  render() {
    console.log(this.props.data)

    return (
      <div
        className="collection-detail-sub-content"
        // ref={dom => (this[a] = dom)}
      >
        <Row>
          <div className="collection-right-buttons part-closer"
               onClick={this.props.removeArticle.bind(this, this.props.data)}
          >
            <Icon type="close" style={{fontSize: 25 + 'px'}}/>
          </div>
          <h1>子文章內容</h1>
        </Row>

        <Row className="form-item">
          <Col span={16}>
            <Col span={4}>
              <label>タイトル:</label>
            </Col>
            <Col span={19} offset={1}>
              <Input
                placeholder="タイトルを入力してください"
                name="title"
              />
            </Col>
          </Col>
        </Row>
        <Row className="form-item">
          <Col span={16}>
            <Col span={4}>
              <label>メディア:</label>
            </Col>
            <Col span={19} offset={1}>
              {this.state.media.map((val, index) =>
                <Media data={val} key={index}/>)}
              <Button type="dashed" onClick={this.addMedia} style={{width: '100%'}}>
                <Icon type="plus"/> Add media field
              </Button>
            </Col>
          </Col>
        </Row>

        <Row className="form-item">
          <Col span={16}>
            <Col span={4}>
              <label>本文:</label>
            </Col>
            <Col span={19} offset={1}>
              <TextArea rows={4} name="content" placeholder="本文を入力してください"/>
            </Col>
          </Col>
        </Row>

        <Row className="form-item">
          <Col span={16}>
            <Col span={4}>
              <label>
                店舗情報:<br />
                <span className="ant-upload-subtext">１店舗のみに紐付ける</span>
              </label>
            </Col>
            <Col span={19} offset={1}>
              <Select
                style={{width: '100%'}}
                name="shop"
                placeholder="店舗を選択してください"
                onChange={this.handleChange}
                optionLabelProp="value"
              >
                {children}
              </Select>
            </Col>
          </Col>
        </Row>
        <Row className="form-item">
          <Col span={16}>
            <Col span={4}>
              <label>
                使えるお得パス<br />
                <span className="ant-upload-subtext">
                                複数の情報に紐付ける
                              </span>
              </label>
            </Col>
            <Col span={19} offset={1}>
              <Select
                mode="multiple"
                name="pass"
                style={{width: '100%'}}
                placeholder="パスを選択してください"
                onChange={this.handleChange}
                optionLabelProp="value"
              >
                {children}
              </Select>
            </Col>
          </Col>
        </Row>
        <Row className="form-item">
          <Col span={16}>
            <Col span={4}>
              <label>
                含まれるルート<br />
                <span className="ant-upload-subtext">
                                複数の情報に紐付ける
                              </span>
              </label>
            </Col>
            <Col span={19} offset={1}>
              <Select
                mode="multiple"
                style={{width: '100%'}}
                name="route"
                placeholder="ルートを選択してください"
                onChange={this.handleChange}
                optionLabelProp="value"
              >
                {children}
              </Select>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DetailSubForm
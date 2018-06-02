import React, {Component} from 'react';
import {
  Icon,
  Layout,
  Button,
  Divider,
  Input,
  Select,
  Row,
  Col,
  Tabs,
  Upload,
  message,
  Popover,
  Radio,
  DatePicker
} from 'antd';
import querystring from 'querystring';

import {errorMessage} from '../../constants/message';

import {Ctable} from '../../components/collection/Ctable';
import Media from '../../components/collection/Media';
import DetailSubForm from '../../components/collection/DetailSubForm';

const {TextArea} = Input;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const children = [],
  Ename = [];

let timeout;
let currentValue;

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
for (let i = 10; i < 36; i++) {
  Ename.push(
    <Option key={i.toString(36) + i}>
      <img
        src="http://www.hrexaminer.com/email/images/2018-03-16-hrexaminer-photo-img-robot-ai-jobs-automation-cc0-via-unsplash-by-alex-knight-199368-sq-100px.jpg"
        width="22"
        height="22"
      />
      <a
        href="/user/i"
        target="_blank"
        style={{
          textDecoration: 'underline',
          margin: 10 + 'px' + ' ' + 0 + ' ' + 30 + 'px ' + 10 + 'px'
        }}
      >
        {i.toString(36) + i.toString(36) + i}
      </a>
    </Option>
  );
}
const timing = [
  {value: 'all', text: 'すべて'},
  {value: 'all', text: '街歩き'},
  {value: 'forest', text: '森林'},
  {value: 'sea', text: '海'},
  {value: 'sea', text: '夜'},
  {value: 'season', text: '季節'}
];
const traffic = [
  {value: 'all', text: 'すべて'},
  {value: 'train', text: '電車'},
  {value: 'bus', text: 'バス'},
  {value: 'boat', text: '船'},
  {value: 'other', text: 'その他'}
];
const area = [
  {value: 'all', text: 'すべて'},
  {value: 'Hokkaido', text: '北海道'},
  {value: 'Kanto', text: '関東'},
  {value: 'Kansai', text: '関西'},
  {value: 'Shikoku', text: '四国'},
  {value: 'Kyushu', text: '九州'},
  {value: 'Okinawa', text: '沖縄'}
];
const budget = [
  {value: 'all', text: 'すべて'},
  {value: '3000', text: '～3,000円'},
  {value: '9999', text: '～9,999円'},
  {value: '10000', text: '10,000円以上'}
];

function handleChange(value) {
  console.log(value.parentElement);
}
function callback(key) {
  console.log(key);
}
function handleBlur() {
  console.log('blur');
}
function handleFocus() {
  console.log('focus');
}
// helper
const toCollection = collection => ({
  title: collection.querySelector('[name=title]').value,
  content: collection.querySelector('[name=content]').value,
  shop: collection.querySelectorAll('.ant-select-selection-selected-value').length >
  0
    ? true
    : '',
  multi: collection.querySelectorAll('.ant-select-selection__choice').length > 0
    ? true
    : ''
  // route: collection.querySelector('.ant-select-selection__rendered').value
});

const save = {
  title: 'Ready to publish your post?',
  options: [
    {
      value: 1,
      text: '公開'
    },
    {
      value: 2,
      text: '不公開'
    },
    {
      value: 3,
      text: '預約公開'
    }
  ]
};

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
      loading: false,
      data: [],
      value: '',
      value_shop: '',
      mediaType: 1,
      mediaType_part: 1,
      articlelist: ['id' + Math.random()],
      isedit: false,
      saveChoice: 1,
      saveIsShown: false,
      userurl: 'http://yahoo.jp/'
    };
  }

  componentWillMount() {
    let {isedit} = this.state;
    if (window.location.href.indexOf('collection/new') !== -1) {
      isedit = true;
      this.setState({
        isedit
      });
    }
  }

  handleChange = value => {
    this.setState({value});
    fetch(value, data => this.setState({data}));
  };

  handleChange2 = value_shop => {
    this.setState({value_shop});
    fetch(value_shop, data => this.setState({data}));
  };

  // Sub article action
  addnewArticle = () => {
    let {articlelist} = this.state;
    articlelist.push('id' + Math.random());
    this.setState({articlelist});
  };

  removeArticle = data => {
    console.log(data);
    window.confirm('削除してもよろしいですか？');
    const articlelist = this.state.articlelist.filter(
      article => article !== data
    );
    this.setState({articlelist});
  };

  // save action
  onSave = () => {
    console.log('submit form');
  };

  onSaveChange = e => {
    console.log(e);
    this.setState({
      saveChoice: e.target.value
    });

    if (e.target.value) {
      this.setState({
        saveIsShown: true
      });
    }
  };

  onSaveDateChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  onSaveDateOk = value => {
    console.log('onOk: ', value);
  };

  onSaveVisibleChange = visible => {
    this.setState({
      saveIsShown: visible
    });
  };


  // preview action
  onPreview = () => {
    console.log('preview');
  };

  render() {
    const {isedit, saveChoice, saveIsShown} = this.state;

    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));

    const saveContent = (
      <div className="save-content">
        <RadioGroup onChange={this.onSaveChange} value={saveChoice}>
          {save.options.map((val, index) => (
            <Radio className="radio-vertical" value={val.value} key={index}>
              <span className="radio-text">{val.text}</span>
            </Radio>
          ))}
        </RadioGroup>
        {saveChoice === 3 && (
          <div className="radio-content">
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select Time"
              onChange={this.onSaveDateChange}
              onOk={this.onSaveDateOk}
              style={{width: '100%'}}
            />
          </div>
        )}

        <div className="button-group align-right">
          <Button type="primary" style={{width: '100%'}}>確定</Button>
        </div>
      </div>
    );

    return (
      <div className="collection-detail-main sticky-container">
        <div className="header-container">
          <Row>
            <Col span={24} className="button-group align-right">
              {!this.state.isedit &&
              <Col span={16}>
                ユーザーサイトのリンク：
                <a href={this.state.userurl} target="_blank">
                  {this.state.userurl}
                </a>
              </Col>
              }

              <Button onClick={this.onPreview}>プレビュー</Button>
              <Popover
                placement="bottomRight"
                title={save.title}
                content={saveContent}
                trigger="click"
                visible={saveIsShown}
                onVisibleChange={this.onSaveVisibleChange}
              >
                <Button type="primary">保存</Button>
              </Popover>
            </Col>
          </Row>
        </div>

        <form onSubmit={this.hanleSubmit}>
          {/*basic info*/}
          <div className="detail-basic">
            <Row>
              <h1>基本情報</h1>
            </Row>

            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>種類:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    placeholder="文章種類を選択してください"
                    style={{width: '100%'}}
                    onChange={this.handleChange}
                  >
                    <Option value="publish">ルートまとめ</Option>
                    <Option value="unpublish">スポット</Option>
                  </Select>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>タグ:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="タグ追加"
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
                  <label>編集者:</label>
                </Col>
                <Col span={19} offset={1}>
                  <div className="editor-select">
                    <Select
                      style={{width: '100%'}}
                      placeholder="作者id追加"
                      onChange={handleChange}
                    >
                      {Ename}
                    </Select>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>地域:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    showSearch
                    style={{width: '100%'}}
                    placeholder="地域を選択してください"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>テーマ:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    showSearch
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="テーマを選択してください"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    {timing.map(d => (
                      <Option key={d.value} value={d.value}>
                        {d.text}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>交通:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    showSearch
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="交通を選択してください"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    {traffic.map(d => (
                      <Option key={d.value} value={d.value}>
                        {d.text}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>エリア:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    showSearch
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="エリアを選択してください"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    {area.map(d => (
                      <Option key={d.value} value={d.value}>
                        {d.text}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Col>
            </Row>
            <Row className="form-item">
              <Col span={16}>
                <Col span={4}>
                  <label>予算:</label>
                </Col>
                <Col span={19} offset={1}>
                  <Select
                    showSearch
                    style={{width: '100%'}}
                    placeholder="予算を選択してください"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    {budget.map(d => (
                      <Option key={d.value} value={d.value}>
                        {d.text}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Col>
            </Row>
          </div>
          <Divider />

          {/*main article*/}
          <div>
            <Row>
              <h1>主文章內容</h1>
            </Row>

            <Tabs defaultActiveKey="jp" onChange={this.callback}>
              <TabPane tab="日本語" key="jp">
                <div>
                  <Row className="form-item">
                    <Col span={16}>
                      <Col span={4}>
                        <label>キーワード:</label>
                      </Col>
                      <Col span={19} offset={1}>
                        <Select
                          mode="tags"
                          style={{width: '100%'}}
                          placeholder="キーワード追加"
                          onChange={handleChange}
                          dropdownStyle={{display: 'none'}}
                        />
                      </Col>
                    </Col>
                  </Row>
                  <Row className="form-item">
                    <Col span={16}>
                      <Col span={4}>
                        <label>タイトル:</label>
                      </Col>
                      <Col span={19} offset={1}>
                        <Input placeholder="タイトルを入力してください"/>
                      </Col>
                    </Col>
                  </Row>
                  <Row className="form-item">
                    <Col span={16}>
                      <Col span={4}>
                        <label>本文:</label>
                      </Col>
                      <Col span={19} offset={1}>
                        <TextArea
                          rows={4}
                          placeholder="本文プロフィールを入力してください"
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
                        <Media />
                      </Col>
                    </Col>
                  </Row>

                  {this.state.articlelist.map((data, index) => (
                    <DetailSubForm
                      key={index}
                      data={data}
                      removeArticle={this.removeArticle}
                    />
                  ))}

                  <Row>
                    <div className="collection-right-buttons">
                      <Button
                        type="primary"
                        className="button-add"
                        onClick={this.addnewArticle}
                      >
                        ＋ 子文章追加
                      </Button>
                    </div>
                  </Row>

                  <Row className="form-item">
                    <Col span={16}>
                      <Col span={4}>
                        <label>总结:</label>
                      </Col>
                      <Col span={19} offset={1}>
                         <TextArea
                           rows={4}
                           placeholder="本文プロフィールを入力してください"
                         />
                      </Col>
                    </Col>
                  </Row>

                </div>
              </TabPane>
              {(() => {
                if (!isedit) {
                  return <TabPane tab="韓国語" key="ct"/>;
                }
              })()}
              {(() => {
                if (!isedit) {
                  return <TabPane tab="英語" key="ko"/>;
                }
              })()}
              {(() => {
                if (!isedit) {
                  return <TabPane tab="中国語（繁體）" key="en"/>;
                }
              })()}
            </Tabs>
          </div>
          <Divider />
        </form>

        <div className="comment-container">
          <Row>
            <Col span={24}>
              <h1>文章について</h1>
            </Col>
          </Row>
          <div>
            <Tabs defaultActiveKey="people" onChange={callback}>
              <TabPane tab="人気:人" key="people">
                <Ctable />
              </TabPane>
              <TabPane tab="プレビュー数:人" key="review">
                <Ctable />
              </TabPane>
              <TabPane tab="得点:人" key="point">
                <Ctable />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;

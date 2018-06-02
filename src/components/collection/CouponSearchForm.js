import React from 'react';
import moment from 'moment';
import { Form, Row, Col, Input, Button, Icon, Select, DatePicker } from 'antd';

import { statusTypes } from '../../constants/staticOptons';

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
class AdvancedSearchForm extends React.Component {
  state = {
    expand: false
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  onReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  disabledDate = current => {
    // Can not select days after today
    return current && current > moment().endOf('day');
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="search-form" onSubmit={this.handleSearch}>
        <Row>
          <Col span={3}>
            <label>クーポン名</label>
          </Col>
          <Col span={5}>
            <Input />
          </Col>
          <Col span={2}>
            <label>登陸日</label>
          </Col>
          <Col span={6}>
            <RangePicker
              onChange={this.onChange}
              disabledDate={this.disabledDate}
            />
          </Col>
          <Col span={2}>
            <label>更新日</label>
          </Col>
          <Col span={6}>
            <RangePicker
              onChange={this.onChange}
              disabledDate={this.disabledDate}
            />
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <label>有効期間</label>
          </Col>
          <Col span={6}>
            <RangePicker
              onChange={this.onChange}
              disabledDate={this.disabledDate}
            />
          </Col>
          <Col span={3}>
            <label>ステータス</label>
          </Col>
          <Col span={6}>
            <Select onChange={this.handleChange}>
              {statusTypes.map((val, index) => (
                <Option value={val.value} key={index}>
                  {val.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            className="button-group"
            style={{ textAlign: 'right' }}
          >
            <Button onClick={this.onReset}>検索条件をクリア</Button>
            <Button type="primary" htmlType="submit">
              検索する
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const SearchForm = Form.create()(AdvancedSearchForm);

export default SearchForm;

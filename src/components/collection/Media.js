import React, {Component} from 'react';
import {
  Icon,
  Input,
  Select,
  Row,
  Col,
  Upload,
  message,
} from 'antd';

import {getQuery} from '../../utils/url'
import {placeholder} from '../../constants/message'


const Option = Select.Option;
const {TextArea} = Input;
const Search = Input.Search;

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

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function handleChange3(info) {
  if (info.file.status === 'uploading') {
    this.setState({loading: true});
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl =>
      this.setState({
        imageUrl,
        loading: false
      })
    );
  }
}

class Media extends Component {
  state = {
    options: [
      {
        value: 1,
        text: 'Image'
      },
      {
        value: 2,
        text: 'YouTube'
      },
      {
        value: 3,
        text: 'Instagram'
      }
    ],
    activeValue: 1,
    imageUrl: '',
    video: '',
    thumbnail: '',
    code: '',
    coverUrl: '',
    thumbnailHasImage: false
  }

  handleChange = value => {
    this.setState({
      activeValue: value
    });
  };

  onThumbnailClick = () => {
    window.open(this.videoInput.props.value);
  }

  getThumbnail = (value) => {
    let queryObj = getQuery(value)
    let imageUrl = 'https://i.ytimg.com/vi/' + queryObj.v + '/hqdefault.jpg'

    this.setState({
      video: value,
      thumbnail: imageUrl,
      thumbnailHasImage: true
    })
  };

  handleKeyDown = e => {
    this.getThumbnail()
  }

  render() {
    const {
      options,
      thumbnail,
      imageUrl,
      video,
      code,
      coverUrl,
      thumbnailHasImage
    } = this.state;

    const UploadImage = (<div className="upload">
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
          <img src={imageUrl} alt=""/>
        ) : (
          <div>
            <Icon type={this.state.loading ? 'loading' : 'plus'}/>
            <div className="ant-upload-text">写真アップロード</div>
          </div>
        )}
      </Upload>
      <p className="ant-upload-subtext">縦***横***サイズは2M以内</p>
    </div>)

    return (<div className="media">
      <Select defaultValue={options[0].value}
              style={{width: '100%'}}
              onChange={this.handleChange}>
        {options.map((val, index) => (
          <Option key={index} value={val.value}>{val.text}</Option>
        ))}
      </Select>

      <div className="media-content">
        {this.state.activeValue === 1 ? (
          <div className="media-item media-image">
            {UploadImage}
          </div>
        ) : null}
        {this.state.activeValue === 2 ? (
          <div className="media-item">
            <Search
              placeholder={placeholder.link}
              enterButton="Get"
              defaultValue="https://www.youtube.com/watch?v=3HV5I2OCbjw"
              onSearch={value => this.getThumbnail(value)}/>
            {thumbnail &&
            <div className={"thumbnail" + (thumbnailHasImage ? ' has-image' : '')}
                 style={{backgroundImage: `url("${thumbnail}")`}}
                 onClick={this.onThumbnailClick}/>
            }
            {!thumbnail &&
            <div className="thumbnail">
              <Icon type="picture" className="icon"/>
            </div>
            }
          </div>
        ) : null}
        {this.state.activeValue === 3 ? (
          <div className="media-item">
                <TextArea rows={4}
                          placeholder={placeholder.link}
                          className="text-area"/>
            {UploadImage}
          </div>
        ) : null}
      </div>
    </div>)
  }
}

export default Media
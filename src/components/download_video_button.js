import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Icon, Button, Modal, Input, List, Form,  Tabs, Progress  } from 'antd';


// Dragger

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

//


// TabPane // 

const { TabPane } = Tabs;

const data = [
    {
      title: 'Music 1.mp4',
    },
    {
      title: 'Music 2.mp4',
    },
    {
      title: 'Music 3.mp4',
    },
    {
      title: 'Music 4.mp4',
    },
  ];

// 

class DownloadVideoButton extends React.Component {

    // Modal 

    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        this.setState({
        visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
        visible: false,
        });
    };

    //

    // Switch 

    onChange = checked => {
        console.log(`switch to ${checked}`);
    }

    // 

    render(){
        return (
            <span>
                <Button onClick={this.showModal}><Icon type="cloud-download" /></Button>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="从源上传" key="1">
                        <Form layout="horizontal">
                            <Form.Item label="源网址" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            <Input defaultValue="www.youtube.com/watch?v=IERWWA3ZDCA" />
                            </Form.Item>
                            <Form.Item label="影片名字" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            <Input defaultValue="Music_1.mp4" />
                            </Form.Item>
                            <Form.Item label="标签" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            <Input defaultValue="I Love U" />
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
                                <Button type="primary" icon="download" >
                                    上传
                                </Button>
                            </Form.Item>
                        </Form>
                        </TabPane>
                        <TabPane tab="本机上传" key="2">
                        <Form layout="horizontal">
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">单击或拖动影片到该区域以上传</p>
                                <p className="ant-upload-hint">
                                    上传影片格式 : mp4, mp3, mkv
                                </p>
                            </Dragger>,
                            <Form.Item label="影片名字" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            <Input defaultValue="Music_1.mp4" />
                            </Form.Item>
                            <Form.Item label="标签" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                            <Input defaultValue="I Love U" />
                            </Form.Item>
                        </Form>
                        </TabPane>
                        <TabPane tab="上传进度" key="3">
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={<Progress percent={30} />}
                                    />
                                </List.Item>
                                )}
                            />
                        </TabPane>
                    </Tabs>
                </Modal>
            </span>
        )
    }
}

export default DownloadVideoButton;
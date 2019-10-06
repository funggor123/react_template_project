import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { Row, Col } from 'antd';
import { List, Avatar, Icon, Button, Typography } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Text } = Typography;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class App extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <Layout className="layout">
      <Header style={{ background: '#fff'}} >
        <Row  type="flex"
              style={{ alignItems: 'center' }}
              justify="center"
              gutter={10} >
          <Col span={6}>
           
           <Text strong style={{ fontSize: 20}}>
            Chain Music
           </Text>
          </Col>
          <Col span={12}>     
            <Input 
              style={{ verticalAlign: 'middle' }} 
              placeholder="搜索" 
              addonAfter={<Icon type="search" />} 
            />
          </Col>
          <Col span={3}>
          </Col>
          <Col span={3} >
            <Button ><Icon type="video-camera" /></Button>
            <Button><Icon type="file-add" /></Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ margin: '16px 0' , padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={listData}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
        
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    );
  }
}

export default App;




import React from 'react';
import './App.css';
import './index.css';
import { Layout } from 'antd';
import ListView from "./components/listview"
import HeadBar from "./components/headbar"
import Player from "./components/player"

const { Header, Footer, Content } = Layout;


class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ background: '#fff'}} >
          <HeadBar/>
        </Header>
        <Content style={{ margin: '16px 0' , padding: '0 50px' }}>
          <Player />
          <ListView/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default App;




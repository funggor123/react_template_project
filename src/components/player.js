import React from 'react';
import 'antd/dist/antd.css';
import ReactPlayer from 'react-player'
import { Row, Col, Typography  } from 'antd';

const { Title } = Typography;

class Player extends React.Component {
    render(){

        return (
            <Row>
                <Col span={5}></Col>
                <Col span={15}>
                <div style={{ background: '#fff', padding: 24, minHeight: 300 , marginBottom: 15}}>
                    <Title level={4}>現在播放</Title>
                    <ReactPlayer url='https://www.youtube.com/watch?v=MFYoR-z8kxo' playing />
                </div>
                </Col>
                <Col span={5}></Col>
            </Row>
        )

    }
}

export default Player;
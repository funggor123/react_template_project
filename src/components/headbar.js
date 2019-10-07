import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Button, Typography, Row, Col } from 'antd';
import SearchBar from "./searchbar"
import DownloadVideoButton from "./download_video_button"

const { Text } = Typography;

class HeadBar extends React.Component {
    render(){

        return (
            <Row>
                <Col span={6}> 
                    <Text strong style={{ fontSize: 20}}>
                         链视频
                    </Text>
                </Col>
                <Col span={12}>     
                    <SearchBar/>
                </Col>
                <Col span={5}>
                </Col>
                <Col span={1} >
                    <DownloadVideoButton />
                </Col>
          </Row>
        )

    }
}

export default HeadBar;
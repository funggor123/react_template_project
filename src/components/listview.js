import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Icon} from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `一本漫画闯天涯II妙想天开 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '周星馳',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class ListView extends React.Component {
    render(){
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <List
              header={<div>视频列表</div>}
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 4,
              }}
              dataSource={listData}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText type="play-circle" text="播放" key="list-vertical-star-o" />,
                    <IconText type="share-alt" text="分享" key="list-vertical-like-o" />,
                    <IconText type="share-alt" text="修改" key="list-vertical-like-o" />,
                    <IconText type="delete" text="去掉" key="list-vertical-like-o" />,
                  ]}
                  extra={
                    <img
                      width={150}
                      height={100}
                      alt="logo"
                      src="https://i.loli.net/2018/06/04/5b15461ab2b9f.jpg"
                    />
                  }
                >
            <List.Item.Meta
              avatar={ <Avatar style={{ backgroundColor: '#87d068' }} icon="video-camera" />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
           </List.Item>
           )}
           />
        </div>
        )
    }
}

export default ListView;


import React, { useState } from 'react';
import { Select, Typography, Row, Col, Card, Avatar } from "antd";
import moment from 'moment';
import { useGetCryptoNewsQuery } from "../apis/cryptoNewsApi";
import { useGetCryptosQuery } from "../apis/cryptoAPI";
import Loader from '../components/Loader';

const {Option} = Select;

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  const { data: cryptos } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader/>;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && <Col span={24}>
        <Select placeholder="Select a Crypto"
          className='select-news'
          optionFilterProp='children'
          onChange={(value)=>setNewsCategory(value)}
          showSearch
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
        >
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {cryptos?.data?.coins.map((coin)=> <Option value={coin.name}>{coin.name}</Option>)}
        </Select>
      </Col>}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='__blank'>
              <div className='news-image-container' rel='noreferrer'>
                <Typography.Title className='news-title' level={4}>{news.name}</Typography.Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImg} alt='news' />
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0, 100)} ...` : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt='news' />
                  <Typography.Text className='provider-name'>{news.provider[0]?.name}</Typography.Text>
                </div>
                <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>

              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News

import React from 'react'
import millify from 'millify'; // converts long numbers to human readable strings
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../apis/cryptoAPI';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from '../components/Loader';

function Home() {
  const {data, isFetching} = useGetCryptosQuery(10);
  const gstats = data?.data?.stats
  if(isFetching) return <Loader/>;

  return (
    <>
      <Typography.Title level={2} className='heading'>Crypto Stats</Typography.Title>
      <Row> {/*span 12 means half space*/}
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={gstats.total}/></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={gstats.totalExchanges}/></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(gstats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title='Total 24h volume' value={millify(gstats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(gstats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Cryptocurrencies Latest News</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
      </div>
      <News simplified/>
      
    </>
  )
}

export default Home
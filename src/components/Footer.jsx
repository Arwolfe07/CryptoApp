import { Space, Typography } from 'antd';
import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';

export class Footer extends PureComponent {
    render() {
        return (
            <div className='footer' >
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CryptoFunk<br/>
                    &#169; arwolfe 2023
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
        )
    }
}

export default Footer;
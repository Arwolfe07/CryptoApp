import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import { Layout } from 'antd';

function RootLayout() {
    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='root'>
                        <Outlet />

                    </div>
                </Layout >
                <Footer />
            </div>
        </>
    );
}

export default RootLayout;
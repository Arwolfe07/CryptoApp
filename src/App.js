import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Cryptocurrencies, Exchanges, News,CryptoDetails } from './pages';
import "./App.css"
import RootLayout from './pages/RootLayout';


const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  },
  {
    path: 'cryptocurrencies',
    element: <Cryptocurrencies />
  },
  {
    path: 'crypto/:coinId',
    element: <CryptoDetails />
  },
  {
    path: 'exchanges',
    element: <Exchanges />
  },
  {
    path: 'news',
    element: <News />
  }
  ]
}])

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

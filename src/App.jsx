import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import {Navbar, Exchanges, Homepage, Cryptodetails, Cryptocurrencies, News} from './components'
import './app.css'
const App = () => {
  return (
    <div className='app'>
        {/* <h1>CryptoTracker</h1> */}
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/" element={<Exchanges />} />
                <Route exact path="/" element={<Cryptocurrencies />} />
                <Route exact path="/" element={<Cryptodetails />} />
                <Route exact path="/" element={<News />} />
              </Routes>
              
            </div>
          </Layout>
        </div>
        <div className="footer">

        </div>
    </div>
  )
}

export default App
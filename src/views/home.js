import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>White Bulgarian Newspaper</title>
        <meta property="og:title" content="White Bulgarian Newspaper" />
      </Helmet>
      <a href="https://plbaltic1.chuimain.online/" className="home-link">
        <img alt="image" src="/bdfbplbut4.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home

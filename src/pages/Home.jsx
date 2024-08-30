import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../resimler/banner.jpg';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Burger 43</h1>
            <p>
            Lezzetli Hamburgerler <br /> 33 Baharatlı Karışık</p>
            <Link to="/menu"><button>Sipariş Verin</button></Link>
            
        </div>
    </div>
  )
}

export default Home

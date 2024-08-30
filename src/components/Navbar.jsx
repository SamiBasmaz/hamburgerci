import React from 'react'
import logo from '../resimler/hamburgerlogo.png';
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={logo}  />
        </div>
        <div className='rightSide'>
            <Link to="/">Anasayfa</Link>
            <Link to="/menu">Menü</Link>
            <Link to="/about">Hakkımızda</Link>
            <Link to="/contact">Bize Ulaşın</Link>
        </div>
    </div>
  )
}

export default Navbar

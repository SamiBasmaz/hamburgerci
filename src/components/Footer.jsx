import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
        <p>&copy; 2024   43burger.com</p>
        <div className='icons'>
        <FaInstagram className='icon'/>
        <FaFacebook className='icon'/>
        <FaTwitter className='icon'/>
        </div>
        </div>
    </div>
  )
}

export default Footer

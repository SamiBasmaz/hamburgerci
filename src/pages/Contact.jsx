import React from 'react'
import BannerImage from '../resimler/2blackbean.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>Bize Ulaşın</h1>
            <form id='contact-form'>
                <label htmlFor="name">İsim Soyisim</label>
                <input type="text" name="name" placeholder='İsminizi Giriniz...' />
                <label htmlFor="email">Email</label>
                <input type="text" name="mail" placeholder='e-mail giriniz...' />
                <label htmlFor="message">Mesaj</label>
                <textarea type="text" name="message" placeholder='Mesajınızı yazınız...' />
                <button type='submit'>Gönder</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact

import React from 'react'
import BannerImage from '../resimler/1beef.jpg'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore iure laborum recusandae voluptates nihil, ullam fugit sapiente mollitia laudantium cum fugiat incidunt placeat temporibus veniam id tempora optio corrupti sunt. Earum odio velit quibusdam officia dignissimos quisquam numquam, praesentium nam adipisci porro facilis error sunt recusandae doloremque</p>
      </div>
    </div>
  )
}

export default About

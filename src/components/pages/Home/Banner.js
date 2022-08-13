import React from 'react'
import './styles/Banner.scss'

const Banner = () => {
  return (
    <div className="banner-container">
       <div className='data'>
        <h1>Unbox happiness, <span>every month.</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam,</p>
        <button type="button">Subscribe now</button>
        </div> 
    </div>
  )
}

export default Banner
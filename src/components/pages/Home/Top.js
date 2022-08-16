import React from 'react'
import './styles/Top.scss'

const Top = () => {
  return (
    <div className='top-container'>
        <div  className="left">
        <div  className="div1">
            <h2>Get a gift box</h2>
            <button>Get Started</button>
        </div>
        <div  className="div2">
            <small>LET'S TALK</small>
            <h2>Our newsletter</h2>
            <div className='input'>
            <div className='Email-address' >
          <input 
          type='email'
          name='email'
          id='email'
          placeholder='johndoe@hotmail.com'
          className='auth-formm-input'
           /> 
           <button>Sign Up</button>
            </div>
        </div>
        </div>
    </div>
    <div  className="right"></div>
    </div>
  )
}

export default Top
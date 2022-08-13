import React from 'react'
import { Data4 } from './Data'
import './styles/Benefits.scss'

const Benefits = () => {
  return (
    <div className='benefits-container'>
        <h1>Benefits of Loti Wellness</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam</p>
        <div className='card-container'>
        {Data4.map((props) =>{
            return (
                <div className="card">
                    <div className='img' style={{content: `url(${props.img})`}} ></div>
                    <div className='content'>
                      <h4>Boxes come monthly</h4>
                      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</small>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Benefits
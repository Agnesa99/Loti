import React from 'react'
import { Data2 } from './Data'
import './styles/Cards.scss'

 const Cards = () => {
  return (
    <div className='Cards-container'>
        <h1>Unbox happiness, <span>every month.</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam,</p>
        <div className='cards'>
            {Data2.map((props) =>{
                return (
                    <div className='items'>
                    <div className='number'><p>{props.number}</p></div>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    </div>

                )
            })}
        </div>
        <button type="button">Subscribe now</button>
    </div>
  )
}
export default Cards
import React from 'react'
import './styles/Slider2.scss'
import Carousel from 'react-elastic-carousel';
import { Data5 } from './Data';
import {RiStarSFill} from 'react-icons/ri'


const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width:750, itemsToShow: 1 },
    {width:1550, itemsToShow: 2},
];

const Slider2 = () => {
  
  return (
    <div className="Hear-container">
     <h1>Hear what our cudtomers have to say</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam,</p>
        <Carousel className="slider2"  breakPoints={breakPoints}>
                        {Data5.map((props) => {
                            return(
                                <div className="items">
                                    <div className='img' style={{content: `url(${props.img})`}} ></div>
                                    <div className="data">
                                        <h5>{props.name}</h5>
                                        <h4><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></h4>
                                        <p>{props.description}</p>
                                    </div>
                                </div>
                            )
                        })}

</Carousel>

    </div>
  )
}

export default Slider2
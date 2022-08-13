import React from 'react'
import Marquee from 'react-fast-marquee'
import { Data1 } from './Data'
import './styles/Slider.scss'

const Slider = () => {
  return (
    <div className='slider'>
        <h4>Featured on</h4>
        <Marquee  pauseOnClick  direction="right" className="slider-content" speed={100}>
            {Data1.map((props) =>{
                return(
                    <div className='content'>
                        <div className='img' style={{content: `url(${props.img})`}} ></div>
                    </div>
                )
            })}

        </Marquee>
    </div>
  )
}

export default Slider
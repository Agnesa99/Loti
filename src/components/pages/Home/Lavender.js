import React from 'react'
import './styles/Lavender.scss'
import {Data3} from  './Data'
import {FaCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Lavender = () => {
  return (
    <div className='levender-container'>
        {Data3.map((props) => {
            return (
                <div className='items'>
                    <div className='img' style={{content: `url(${props.img})`}} ></div>

                    <div className='datas'>
                    <h1>{props.title}</h1>
                    <div className="container">
                    <div className='block'>
                        <small>{props.description}</small>
                        <p> <span><FaCircle/></span>{props.title2}</p>
                        <p><span><FaCircle/></span>{props.title3}</p>
                        <p><span><FaCircle/></span>{props.title4}</p>
                    </div>
                    </div>
                    <Link className='find' to='/'>Find out more</Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Lavender
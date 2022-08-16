import React from 'react'
import { Data1 } from './Data'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="dives">
        <div className="left">
            <div className='logo-footer'></div>
                <h3>Our Stores</h3>
                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.</p>
           
        </div>
        <div className="right">
        <div className='links-row'>
                    {Data1.map((props) =>{
                        return(
                            <div className='footer-list' >
                                <h6>{props.category}</h6>
                                <div className='links'>
                                    {props.links.map((l) =>{
                                        return(
                                            <Link key={l.to} to={l.to}>
                                                {l.link}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
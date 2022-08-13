import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import clsx from "clsx";
import './Navbar.scss'
import  {MainData} from './MainData'
import MobileNav from '../MobileNav/MobileNav'



const Navbar = (props) => {  

    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
    const nav = document.querySelector(".navbar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="navbar" className={clsx(`navbar ${props.styles}`, isSticky ? "nav__sticky" : "")} >

            <Link to='/' className='nav-logo'>
                <div className="logo"></div>
            </Link>
          
            <div className='nav-links'>
                {MainData.map((props) => {
                    return(
                        <div className={ `nav-link ${props.cls}`}>
                            <Link to={props.to} className='inner-nav-link'>
                                {props.link}
                            </Link>
                        </div>
                    )
                })}

             </div>


            <div className='nav-auth'> 
            
                <Link to='/Login' className='link1'>
                    Log In
                </Link>
                <Link to='/Signup' className='link2'>
                    <span>
                Get Started
                    </span>
                </Link>
            </div>
            <MobileNav/>
        </div>
    )
}

export default Navbar
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {CgClose} from 'react-icons/cg'
const Sidebar = (props) => {    


    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                    
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>
                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                   Past boxes
                        
                    </Link>
                </div>
                </div>

            <div className='sidebar-auth'>
                <Link to='/' className='link1'>
                    Log In
                </Link>
                <Link to='/' className='link2'>
                 Get started
                </Link>
            </div>

        </div>
       
    )
}

export default Sidebar
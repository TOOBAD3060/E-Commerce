import React from 'react'
import logo from '../../../images/logo.png'
import cart from '../../../images/cart.png'
import './Nav.css'

import {Link} from "react-router-dom"

const Nav = ({showProduct,showAccount,showHome,showCart}) => {
   
  return (
        <div className='nav'>
            <div className='img' onClick={showHome}>
              <a href='#'>
              <img src={logo} alt='logo' width='120px'  />  
              </a>
        </div>
        
            <div className='nav-menus'>
                <ul>
                    <li onClick={showHome}><a href='#'> Home </a> </li>
                    <li onClick={showProduct}><a href='#'>  Products </a> </li>
                    <li><a href='#'>About</a> </li>
                    <li><a href='#'>Contact</a> </li>
                    <li onClick={showAccount}><a href='#'>Account</a> </li>
                </ul>

            <div className='cart'>
                   <a href='#'>
                   <img src={cart} onClick={showCart} alt='cart' width='50px' />
                    </a>  
                        <span>10</span>
                </div>
            </div>
            
            
               
        </div>
  )
}

export default Nav
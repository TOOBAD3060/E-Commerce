import React from 'react'
import logo from '../../../images/logo.png'
import cart from '../../../images/cart.png'
import './Nav.css'
const Nav = () => {
  return (
        <div className='nav'>
            <div className='img'>
              <a href='#c'>
              <img src={logo} alt='logo' width='120px'  />  
              </a>
            </div>
            <div className='nav-menus'>
                <ul>
                    <li><a href='#u'>Home</a> </li>
                    <li><a href='#u'>Products</a> </li>
                    <li><a href='#u'>About</a> </li>
                    <li><a href='#u'>Contact</a> </li>
                    <li><a href='#u'>Account</a> </li>
                </ul>
                <div className='cart'>
                   <a href='#u'>
                   <img src={cart} alt='cart' width='50px' />
                    </a>  
                        <span>10</span>
                </div>
            </div>
            
            
               
        </div>
  )
}

export default Nav
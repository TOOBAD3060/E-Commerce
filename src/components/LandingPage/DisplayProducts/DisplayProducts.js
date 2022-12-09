import React from 'react'
import {featuredProducts} from '../../../data'
import { latestProducts } from '../../../data'
import { latestProducts2 } from '../../../data'

import './Display.css'
const DisplayProducts = () => {
  return (
    <>
          {/* Featured Products */}
  <div className='featured-products'>
          <h2>Featured Products</h2>
              <div className='products featured-products'>
                {featuredProducts.map((eachProduct,index)=>{
                  const {img,price,rating} = eachProduct
                  return <div key={index} className='each'>
                              <img  src={img} alt='market' />
                              <p>{rating}</p>
                              <span>{price}</span>
                          </div>
                })}

              </div>
  </div>
           
             {/* Latest Products */}
    <div className='latest-products'>
          <h2>Latest Products</h2>
          <div className='products '>
              {latestProducts.map((eachProduct,index) =>{
                const {img,price,rating} = eachProduct
                return <div key={index} className='each'>
                            <img  src={img} alt='market' />
                            <p>{rating}</p>
                            <span>{price}</span>
                        </div>
              })}
          </div>

          <div className='products '>
              {latestProducts2.map((eachProduct,index) =>{
                const {img,price,rating} = eachProduct
                return <div key={index} className='each'>
                            <img  src={img} alt='market' />
                            <p>{rating}</p>
                            <span>{price}</span>
                        </div>
              })}
          </div>
    </div>
              
    </>
    
  )
}

export default DisplayProducts
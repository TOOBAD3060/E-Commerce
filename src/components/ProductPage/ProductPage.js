import React,{useState} from 'react'
import './Product.css'

import Menu from './Menu'
import Categories from './Categories'
import { products } from './product-data'
import Nav from '../LandingPage/NAV/Nav'

import { useGlobalContext } from '../CartPage/context'

const allCategories = ['all',...new Set(products.map((item)=> item.category) )]

const ProductPage = () => {
      const {addToCart} = useGlobalContext() ;
     

    const [menuItems, setMenuItems] = useState(products);
    // const [categories, setCategories] = useState(allCategories);

    const filterItems = (category)  => {
        if(category === 'all'){
            setMenuItems(products)
            return;
        }
        const newItems = products.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

  return (
    <>
    {/* <Nav /> */}
    <Categories categories={allCategories} filterItems={filterItems} />
    <Menu addItems= {addToCart} items={menuItems} />
    </>
    
  )
}

export default ProductPage
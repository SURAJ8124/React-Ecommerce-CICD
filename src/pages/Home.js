import React from 'react'
import { NavigationBar } from '../features/Navbar/NavigationBar'
import { ProductList } from '../features/ProductList/ProductList' 
const Home = () => {
  return (
    <div>
      <NavigationBar children={<ProductList/>}>
        </NavigationBar>
      
    </div>
  )
}

export default Home
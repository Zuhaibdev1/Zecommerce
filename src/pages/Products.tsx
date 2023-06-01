import React from 'react'
import Categories from '../Components/Categories'
import MinNavbar from '../Components/MinNavbar'
import ShopMain from '../Components/ShopMain'
import SliderHeader from '../Components/SliderHeader'

const Products = () => {
  return (
    <>
      <SliderHeader title={"Our Shop"} name={"Shop"} />
      <ShopMain />
    </>
  )
}

export default Products
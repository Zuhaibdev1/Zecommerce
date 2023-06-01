import React from 'react'
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import MinNavbar from '../Components/MinNavbar';
import Features from '../Components/Features';
import CategoriesProducts from '../Components/CategoriesProducts';
import Offers from '../Components/Offers';
import TrendyProducts from '../Components/TrendyProducts';
import NewArrivals from '../Components/NewArrivals';
import Subscribe from '../Components/Subscribe';
import Vendors from '../Components/Vendors';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Features />
            <CategoriesProducts />
            <Offers />
            <TrendyProducts />
            <Subscribe />
            <NewArrivals />
            <Vendors />
        </>
    )
}

export default Home
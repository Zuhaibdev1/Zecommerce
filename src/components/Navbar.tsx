import React from 'react'
import Carousel from './Carousel'
import Categories from './Categories'
import MinNavbar from './MinNavbar'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <Categories />
                    <div className="col-lg-9">
                        <MinNavbar />
                        <Carousel />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar
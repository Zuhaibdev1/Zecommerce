import React from 'react'
import ShopProducts from './ShopProducts'
import ShopSideBar from './ShopSideBar'
const ShopMain = () => {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <ShopSideBar />
                    <ShopProducts />
                </div>
            </div>
        </>
    )
}

export default ShopMain
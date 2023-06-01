import React from 'react'
import logo from "../Pages/vendor-1.jpg"
const Vendors = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vendors
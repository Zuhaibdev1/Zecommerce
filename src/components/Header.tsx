import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Header.css"
const Header = () => {
   
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <NavLink className="text-dark" to="">FAQs</NavLink>
                            <span className="text-muted px-2">|</span>
                            <NavLink className="text-dark" to="">Help</NavLink>
                            <span className="text-muted px-2">|</span>
                            <NavLink className="text-dark" to="">Support</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </NavLink>
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink className="text-dark pl-2" to="">
                                <i className="fab fa-youtube"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <NavLink to="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Z</span>Ecommerce</h1>
                        </NavLink>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <NavLink to="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </NavLink>
                        <NavLink to="" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">0</span>
                        </NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
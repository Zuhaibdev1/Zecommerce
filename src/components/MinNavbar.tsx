import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
const MinNavbar = () => {
    const location = useLocation()
    const { id } = useParams()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <NavLink to="" className="text-decoration-none d-block d-lg-none">
                    
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <NavLink to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</NavLink>
                        <NavLink to="/products" className={`nav-item nav-link ${location.pathname === "/products" ? "active" : ""}`}>Shop</NavLink>
                        {/* <div to={`/products/${id}`} className={`nav-item nav-link ${location.pathname === `/products/${id}` ? "active" : ""}`}>Shop Detail</div> */}
                        <div className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</div>
                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to="/cart" className="dropdown-item">Shopping Cart</NavLink>
                                <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</NavLink>
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                        <NavLink to="/login" className={`nav-item nav-link ${location.pathname === "/login" ? "active" : ""}`}>Login</NavLink>
                        <NavLink to="/register" className={`nav-item nav-link ${location.pathname === "/register" ? "active" : ""}`}>Register</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MinNavbar
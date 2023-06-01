import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router-dom'
import { category } from '../types/category/Index'
const Categories = () => {
    const [category, setCategory] = useState<category>([
        {
            "id": 0,
            "categoryname": "Dresss"
        },
        {
            "id": 1,
            "categoryname": "Shirts"
        },
        {
            "id": 2,
            "categoryname": "Jeans"
        },
        {
            "id": 3,
            "categoryname": "Swimswear"
        },
        {
            "id": 4,
            "categoryname": "Sleepwear"
        },
        {
            "id": 5,
            "categoryname": "Jumpsuits"
        },
        {
            "id": 6,
            "categoryname": "Blazers"
        },
        {
            "id": 7,
            "categoryname": "Jackets"
        },
        {
            "id": 8,
            "categoryname": "Shoes"
        },
        {
            "id": 9,
            "categoryname": "Wears"
        }

    ])

    // useEffect(() => {

    // }, [])


    const location = useLocation()
    return (
        <React.Fragment>
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}>
                    <h6 className="m-0" >Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className={`collapse ${location.pathname === "/" ? "show" : ""} navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light  `} id="navbar-vertical" style={{ zIndex: 1 }}>
                    <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                        {category && category?.length > 0 ?
                            (category?.map((data) => {
                                return (
                                    <div key={data.id}>
                                        <a href="" className="nav-item nav-link">{data.categoryname}</a>
                                    </div>
                                )
                            })) : <Skeleton count={9} height={40} />
                        }
                    </div>
                </nav>
            </div >
        </React.Fragment>
    )
}

export default Categories
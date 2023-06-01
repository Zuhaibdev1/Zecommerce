import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import SkeletonLoader from './SkeletonLoader'

const ShopProducts = () => {
    const [products, setPrdoucts] = useState([])
    useEffect(() => {
        setTimeout(() => {

            fetch("http://localhost:4000/products")
                .then(res => res.json())
                .then(res => setPrdoucts(res))
        }, 700);
    }, [])
    return (
        <>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search by name" />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4">
                                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Sort by
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a className="dropdown-item" href="#">Latest</a>
                                    <a className="dropdown-item" href="#">Popularity</a>
                                    <a className="dropdown-item" href="#">Best Rating</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {products && products.length > 0 ?
                        (products.map((data) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                        <div className="card product-item border-0 mb-4">
                                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                <img className="img-fluid w-100" src={data.image} alt="" />
                                            </div>
                                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <h6 className="text-truncate mb-3">{data.title}</h6>
                                                <div className="d-flex justify-content-center">
                                                    <h6>${data.price}</h6><h6 className="text-muted ml-2"><del>${data.oldprice}</del></h6>
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between bg-light border">
                                                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })) : <SkeletonLoader column={4} />}
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default ShopProducts
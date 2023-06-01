import React, { useState, useEffect } from 'react'
import SkeletonLoader from './SkeletonLoader'
import { products } from '../Types/products/Index'

const NewArrivals = () => {
    const [products, setPrdoucts] = useState<products>(
        [
            {
                id: 0,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-1.jpg"
            },
            {
                id: 1,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-2.jpg"
            },
            {
                id: 2,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-3.jpg"
            },
            {
                id: 3,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-4.jpg"
            },
            {
                id: 4,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-5.jpg"
            },
            {
                id: 5,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-6.jpg"
            },
            {
                id: 6,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-7.jpg"
            },
            {
                id: 7,
                title: "Colorful Stylish Shirt",
                price: 123.123,
                oldprice: 123.123,
                description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum",
                sizes: "Xs S M L Xl",
                colors: "Black White Red Blue Green",
                image: "/img/product-8.jpg"
            }
        ]
    )

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {products && products.length > 0 ?
                        (products.map((data) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={data.id} >
                                        <div className="card product-item border-0 mb-4">
                                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                <img className="img-fluid w-100" src={data.image} alt="" />
                                            </div>
                                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                                <div className="d-flex justify-content-center">
                                                    <h6>${data.price ? data.price : "Not Found"}</h6>
                                                    <h6 className="text-muted ml-2"><del>${data.oldprice ? data.oldprice : "Not Found"}</del></h6>
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between bg-light border">
                                                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View
                                                    Detail</a>
                                                <a href="" className="btn btn-sm text-dark p-0"><i
                                                    className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })) : <SkeletonLoader column={3} />}

                </div>

            </div></>
    )
}

export default NewArrivals
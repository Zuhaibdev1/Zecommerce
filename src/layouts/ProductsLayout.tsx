import { Outlet } from "react-router-dom"
import Categories from '../Components/Categories'
import MinNavbar from '../Components/MinNavbar'

export default function ProductsLayout() {
    return (
        <>
            <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <Categories />
                    <div className="col-lg-9">
                        <MinNavbar />
                    </div>
                </div>
            </div >
            <main>
                <Outlet />
            </main>
        </>
    )
}
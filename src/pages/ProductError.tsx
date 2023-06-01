import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ProductError = () => {
    const error: any = useRouteError()
    return (
        <div>
            <div className="careers-error">
                <h2>Error</h2>
                <p>{error.message}</p>
                <Link to="/">Back to the Homepage</Link>
            </div>
        </div>
    )
}

export default ProductError
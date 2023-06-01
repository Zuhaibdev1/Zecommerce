import { Context } from './Context'

const ProductState = (props) => {

    return (
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}

export default ProductState

const productsAPI = () => {
    const productsURI = "http://localhost:3000/products";

    const fetchProducts = () => {
        return fetch( productsURI )
        .then( (res) => res.json() );
    }
    const createProduct = ( product = {} ) => {
        return fetch( productsURI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( product )
        } )
    }
    const deleteProduct = ( id ) => {
        return fetch( `${productsURI}/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        } )
    }

    const fetchProductById = ( id ) => {
        return fetch( `${productsURI}/${id}` )
        .then( (res) => res.json() );
    }

    const updateProduct = ( product = {} ) => {
        return fetch( `${productsURI}/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( product )
        } )
    }

    return { fetchProducts, createProduct, deleteProduct, fetchProductById, updateProduct }
}

export default productsAPI()

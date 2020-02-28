
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
        return fetch( productsURI + "/" + id, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        } )
    }

    return { fetchProducts, createProduct, deleteProduct }
}

export default productsAPI()

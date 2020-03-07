import React from 'react';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';

const Home = ({ title, val, productsCounter, cartValue, handleChangePriceFilter, handleChangeTitleFilter, HandleAddNewSend, products,
    addToCart, removeFromCart, deleteProduct }) => (
        <div className="App">
            <Cart itemsCounter={productsCounter} cartValue={cartValue()} />
            <input type="number" onChange={handleChangePriceFilter} value={val} />
            <input type="text" onChange={handleChangeTitleFilter} value={title} />
            
            <div id="products">
                {products.filter(el => el.description.includes(title)).filter(el => el.price < val).map(el => <Product description={el.description}
                    src={el.src} price={el.price} key={el.id} id={el.id} handleAddClick={addToCart} handleRemove={removeFromCart} handleDeleteProduct={deleteProduct} />)}
            </div>
        </div>
    )

export default Home
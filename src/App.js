import React,{useState,useEffect} from 'react';
import './App.css';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import AddNew from './components/AddNew/AddNew';
import api from './API/index';

const defaultProducts = [
  
];

function App() {
  const [val, setValue] = useState(1000);
  const [title, setTitle] = useState("");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState( defaultProducts );

  const updateProducts = () => {
    api.fetchProducts().then( products => setProducts(products) );
  };

  useEffect( () => {
    updateProducts();
  }, [] ); // [] powoduje ze wlacza sie tylko przy tworzeniu sie komponentu

  const addToCart = (id) => {
    setCart( [...cart, ...products.filter( el => id === el.id  )]  );
  }

  const removeFromCart = (id) => {
    setCart( cart.filter( el => el.id !== id ));
  }

  

  const cartValue = () => {
    const reducer = (accumulator, currentValue) => accumulator + Number(currentValue.price);
    return cart.reduce( reducer, 0 );
  }
  const productsCounter = cart.length;

  const HandleAddNewSend = ( event ) => {
    event.preventDefault();

    const maxProductId = Math.max( ...products.map( el => el.id ) );

    if ( event.target.productName.value && event.target.price.value && event.target.image.value ) {
      const product = {
        description: event.target.productName.value,
        src: event.target.image.value,
        id: maxProductId + 1,
        price: Number(event.target.price.value)
      };
      api.createProduct( product ).then( updateProducts );
    }

  }

  const deleteProduct = (id) => {
    api.deleteProduct( id ).then( updateProducts );
  }

  return (
    <div className="App">
      <Cart itemsCounter={productsCounter} cartValue={ cartValue() } />
      <input type="number" onChange={ event => setValue( event.target.value ) } value={val} />
      <input type="text" onChange={ event => setTitle( event.target.value) } value={title} />
      <AddNew AddNewSend={ HandleAddNewSend } />
      <div id="products">
        {products.filter(el => el.description.includes( title )).filter(el => el.price < val ).map(el => <Product description={el.description} 
        src={el.src} price={el.price} key={el.id} id={el.id} handleAddClick={ addToCart } handleRemove={ removeFromCart } handleDeleteProduct={ deleteProduct } />)}
      </div>
    </div>
  );
}

export default App;

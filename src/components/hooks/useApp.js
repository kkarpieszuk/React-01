import {useState,useEffect, useCallback} from 'react';

// to jest custom hook

const useApp = (api) => {
  const [title, setTitle] = useState("");
  const [val, setValue] = useState(1000);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState( [] );

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

  const handleChangePriceFilter = useCallback(
    (event) => setValue( event.target.value ),[setValue]
  );

  const handleChangeTitleFilter = useCallback(
    event => setTitle( event.target.value),[setTitle]
  );



    

    return {title, setTitle, val, productsCounter, cartValue, handleChangePriceFilter, handleChangeTitleFilter, HandleAddNewSend, products,
    addToCart, removeFromCart, deleteProduct};
}

export default useApp
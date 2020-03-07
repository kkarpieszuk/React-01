import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EditProductForm from '../../components/EditProductForm';
import api from '../../API';

const EditProductPage = (props) => {
    let { productId } = useParams();

    const [product, setProduct] = useState( null );

    const fetchProduct = () => {
      api.fetchProductById( productId ).then( product => setProduct( product ) );
    }

    useEffect( () => {
      fetchProduct();
    }, []);

    const HandleEditProduct = (product) => {

      console.log(product);

      api.updateProduct( product ).then( alert('done') );
    }

    if(!product){
        return 'Is loading';
    }

    return (
      <EditProductForm  product={product} EditProductSend={HandleEditProduct} />
    )
}

export default EditProductPage
import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {Wrapper, Input, LargeInput} from './style';

const EditProductForm = (
        {EditProductSend, product}
    ) => {

    const [description, setDescription] = useState( product.description );
    const [price, setPrice] = useState( product.price );
    const [image, setImage] = useState( product.src );

    const SendIt = (event) => { 
        event.preventDefault();
        product = {
            description,
            src: image,
            price,
            id: product.id
        };
        
        EditProductSend( product ); 
    }


       return (
        <Wrapper>
            <form name='' onSubmit={ SendIt } >
                <label htmlFor='productName'>Nazwa produktu:</label>
                <Input type='text' name='productName' value={description}
                    onChange={ e => setDescription(e.target.value) }    
                />
                <label htmlFor='price'>Cena:</label>
                <Input type='number' name='price' value={price} onChange={ e => setPrice( e.target.value ) } />
                <label htmlFor='image'>Url do zdjęcia:</label>
                <Input type='text' name='image' value={image} onChange={ e => setImage( e.target.value) } />
                <LargeInput type='submit' name='dodaj' value='edytuj produkt' />
            </form>
        </Wrapper>
    );
}

export default EditProductForm;
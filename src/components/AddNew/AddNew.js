import React from 'react';

const AddNew = (
        {AddNewSend}
    ) => {
    const SendIt = (event) => { 
        event.preventDefault();
        AddNewSend( event ); 
    }
    
       return (
        <form name='' onSubmit={ SendIt } >
            <label htmlFor='productName'>Nazwa produktu:</label>
            <input type='text' name='productName' />
            <label htmlFor='price'>Cena:</label>
            <input type='number' name='price' />
            <label htmlFor='image'>Url do zdjęcia:</label>
            <input type='text' name='image' />
            <input type='submit' name='dodaj' value='dodaj produkt' />
        </form>
    );
}

export default AddNew;
import React from 'react'

const Cart = ( {itemsCounter = 0, cartValue= 0} ) => {
    return (
    <div className='cart'>   
        <p>Koszyk zawiera { itemsCounter } elementów</p>
        <p>Wartość koszyka: { cartValue } PLN</p>
    </div>
    );
    }

export default Cart;

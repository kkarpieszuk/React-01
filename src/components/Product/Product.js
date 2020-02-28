import React from 'react'
import Image from './Image'
import Button from '../Button/Button'
import Description from './Description'

const Product = ({src = 'https://picsum.photos/400/600',
                  description='Tekst domyslny z produktu',
                  button='Add to cart',
                  removeButton='Remove from cart',
                  deleteText='X',
                  price='0',
                  handleAddClick=()=>{},
                  handleRemove=()=>{},
                  handleDeleteProduct=()=>{},
                  id=0 }) => (
  <div>
    <Button onClick={handleDeleteProduct} id={id} >{deleteText}</Button>
    <Image src={src} />
    <Description>{description}</Description>
    <p>{price} PLN</p>
    <Button onClick={handleAddClick} id={id} >{button}</Button>
    <Button onClick={handleRemove} id={id}>{removeButton}</Button>
  </div>
)

export default Product;

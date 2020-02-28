import React from 'react'
import propTypes from 'prop-types'


const Button = ({size, children, onClick, id }) => {
   const handleOnClick = () => { onClick(id) };

   return (<button 
            onClick={handleOnClick}>
              {size}{children}
           </button>)
  }

Button.propTypes = {
  size: propTypes.string,
  children: propTypes.string.isRequired,
}

export default Button;

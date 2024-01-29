import React, { useContext } from 'react';
import { ScCartCheckout } from './scParts';

import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = (props) => {
  const { cart, getCartTotal } = useContext(CartContext);

  return (
    <div>
      {cart.map((item, orderInCart) => (
        <Item key={`${item.id}_${orderInCart}`} order={orderInCart} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;

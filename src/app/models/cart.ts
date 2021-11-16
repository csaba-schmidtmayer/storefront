import Product from './product';

type CartItem = {
  product: Product,
  quantity: number
};

type Cart = {
  products: {
    [id: number]: CartItem
  } | null,
  cartValue: number
};

export default Cart;

export {
  Cart,
  CartItem
};

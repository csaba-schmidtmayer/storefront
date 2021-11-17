import Cart from './cart';

type Order = {
  cart: Cart,
  fullName: string,
  address: string,
  creditCard: string
};

export default Order;

export enum CartItemEnum {
  dish = 'Dish',
  good = 'Good',
}

export type Cart = {
  cartItems: Array<ExtendedCardItem>;
  totalPrice: number;
};

export type ExtendedCardItem = {
  quantity: number;
  price: number;
  totalPrice: number;
  type: CartItemEnum;
  goodId: string | undefined;
  customerDish: CustomerDish | undefined;
};
type CustomerDish = {
  parentDishId: string;
  price: number;
  selectedOptionsId: string;
  selectedToppingsIds: Array<string>;
};

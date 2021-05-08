interface Item {
  id: string,
  name: string,
  variant: string,
  quantity: number,
  price: number,
  pic: string,
}

export interface Cart {
  items: Item[];
  subtotal: number,
  tax: number,
}

const getTotalItems = (cart) => {
  let totalItems = 0;
  cart.forEach((item) => {
    totalItems += item.quantity;
  });
  return totalItems;
};

const getItemSubtotal = (cart) => {
  let itemSubtotal = 0;
  cart.forEach((item) => {
    itemSubtotal += item.quantity * item.price;
  });
  return itemSubtotal;
};

export { getTotalItems, getItemSubtotal };

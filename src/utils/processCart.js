const processCart = (cart) => {
  let uniqueItems = {};

  for (let item of cart) {
    if (uniqueItems[item.id]) {
      uniqueItems[item.id].quantity++;
    } else {
      uniqueItems[item.id] = {
        product: item,
        quantity: 1,
      };
    }
  }

  const processedCart = [];
  for (let id in uniqueItems) {
    let currentProduct = uniqueItems[id];
    let item = {
      ...currentProduct.product,
      quantity: currentProduct.quantity,
    };
    processedCart.push(item);
  }

  return processedCart;
};

export default processCart;

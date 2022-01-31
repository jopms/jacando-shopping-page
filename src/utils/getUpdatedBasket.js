/**
 * Returns updated basket when there's changes or undefined when it stays the same
 */

export const getUpdatedBasket = (
  itemQuantity,
  id,
  availableQuantity,
  details,
  basket
) => {
  const currentItemQuantity = basket.filter((i) => i?.id === id)[0]?.quantity;
  const updatedItemQuantity =
    (currentItemQuantity ? currentItemQuantity : 0) + itemQuantity;
  let updatedBasket = [];

  //Deletes object from basklet when there 's no quantity
  if (updatedItemQuantity === 0) {
    updatedBasket = basket.filter((i) => i.id !== id);
    return updatedBasket;
  }

  //There's no item yet in the cart, object needs to be created
  if (currentItemQuantity === undefined && updatedItemQuantity > 0) {
    updatedBasket = [
      ...basket,
      { id, quantity: updatedItemQuantity, ...details, availableQuantity },
    ];
    return updatedBasket;
  }

  //Prevents user from adding more items than exist or removing bellow 0 items
  if (updatedItemQuantity <= availableQuantity && updatedItemQuantity >= 0) {
    updatedBasket = basket.map((i) => {
      if (i.id === id) {
        return {
          id,
          quantity: updatedItemQuantity,
          ...details,
          availableQuantity,
        };
      } else {
        return i;
      }
    });
    return updatedBasket;
  }
};

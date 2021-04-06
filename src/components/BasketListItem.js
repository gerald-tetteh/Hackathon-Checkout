/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  BasketListItem Component
*/

const BasketListItem = ({ basketItem: item }) => {
  return (
    <div className="basket-list--item">
      <div className="basket-list--item-image-container">
        <img src={item.imageUrl} alt={item.itemName} />
      </div>
      <div className="basket-list--item-text-container">
        <span className="basket-list--item-name">{item.itemName}</span>
        <span className="basket-list--item-quantity">
          Quantity: {item.quantity}
        </span>
      </div>
      <div className="basket-list--item-price">
        <span>GH&#8373; {item.itemPrice}</span>
      </div>
    </div>
  );
};

export default BasketListItem;

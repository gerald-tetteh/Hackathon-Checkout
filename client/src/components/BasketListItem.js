/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  BasketListItem Component
*/

import { motion } from "framer-motion";

const BasketListItem = ({ basketItem: item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -1000 }}
      transition={{ duration: 1, delay: index * 0.3 }}
      animate={{ opacity: 1, translateX: 0 }}
      className="basket-list--item"
    >
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
    </motion.div>
  );
};

export default BasketListItem;

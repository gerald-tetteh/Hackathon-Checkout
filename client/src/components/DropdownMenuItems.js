/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Dropdown Menu Component
*/

import { motion } from "framer-motion";

const DropdownMenuItems = ({ listControls, listItems, itemOnClick }) => {
  return (
    <motion.ul animate={listControls} transition={{ duration: 0.1 }}>
      {listItems.map((item, index) => {
        return (
          <motion.li
            onClick={itemOnClick}
            id={item.id}
            className="payment-method-dropdown--item"
            key={index}
            animate={listControls}
            transition={{ duration: 0.1, delay: index * 0.1 }}
          >
            {item.text}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default DropdownMenuItems;

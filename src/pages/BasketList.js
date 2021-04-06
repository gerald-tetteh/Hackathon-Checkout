/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  BasketList App
*/

import BasketListItem from "../components/BasketListItem";
import DefaultButton from "../components/DefaultButton";
import "../css/basketListPage.css";

const purchasedItems = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    itemName: "Converse Shoe",
    itemPrice: 30.0,
    quantity: 2,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1579566346927-c68383817a25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRhcnRoJTIwdmFkZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    itemName: "Storm Troopers",
    itemPrice: 100.0,
    quantity: 66.0,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1613254026301-71fd1a7fd020?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGRhcnRoJTIwdmFkZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    itemName: "Life size Grogu",
    itemPrice: 250.0,
    quantity: 1,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1508776894537-6ca1f4d592b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFydGglMjB2YWRlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    itemName: "Darth Vader",
    itemPrice: 66.0,
    quantity: 1,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb3RiYWxsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    itemName: "Football",
    itemPrice: 35.99,
    quantity: 1,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519326844852-704caea5679e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c29ueXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    itemName: "PS4 Controller",
    itemPrice: 200.99,
    quantity: 3,
  },
];

const BasketListPage = () => {
  return (
    <div className="basket-list">
      <h2 className="basket-list-heading">Items in Basket</h2>
      <div className="basket-list-items">
        {purchasedItems.map((item) => {
          return <BasketListItem basketItem={item} />;
        })}
      </div>
      <DefaultButton text="proceed" />
    </div>
  );
};

export default BasketListPage;

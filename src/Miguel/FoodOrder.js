import React, { Fragment, useState } from "react";
import "./FoodOrder.css";
import { useContext } from "react";
import { foodItemsContext,foodOrderContext } from "./contexto/AppContext";

const FoodOrder = () => {

  const ContextoOrder = useContext(foodOrderContext);

  const selectedFood = ContextoOrder.food;
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(selectedFood.price);
  const [isOrdered, setIsOrdered] = useState(false);
  const menuItems = useContext(foodItemsContext);
  const handleQuantityChange = (event) => {
    setTotalAmount(selectedFood.price * event.target.value);
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    setIsOrdered(true); //show message


  };


  return (
    <>
      <h4 className="selFoodTitle">{selectedFood.name}</h4>
      
      <ul className="ulFoodDetails">
        <li>
          <p className="selFoodDesc">{selectedFood.desc}</p>
        </li>
        <li>
          <p className="selFoodPrice">{totalAmount}$</p>
        </li>
        <li className="selQuantity">
          <label>Quantity</label>
          <input
            type="number"
            defaultValue={1}
            className="quantity"
            min="1"
            max="10"
            onChange={handleQuantityChange}
          />
        </li>

        <li className="liDetails">
          <label for="name"></label>
          <input
            type="text"
            className="inputFields"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </li>
        <li>
          <label for="mobile"></label>
          <input
            type="text"
            className="inputFields"
            id="mobile"
            name="mobile"
            placeholder="Your mobile number"
          />
        </li>

        <li>
          <button className="btn btnOrder" onClick={handleClick}>
            Submit Order
          </button>
          <button className="btn btnReturnMenu" onClick={ContextoOrder.returnToMenu}>
            Return to Menu
          </button>
        </li>
        {isOrdered && (
          <li className="liMessage">
            <label>
              Order Submitted! You will receive an SMS to once ready for pickup.
            </label>
          </li>
        )}
      </ul>
    </>
  );
};

export default FoodOrder;
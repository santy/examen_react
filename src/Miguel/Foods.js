import React, { useContext, useState } from "react";
import "./Foods.css";
import FoodOrder from "./FoodOrder";
import { foodItemsContext, foodOrderContext } from "./contexto/AppContext";

const Foods = () => {
  const [selectedFood, setSelectedFood] = useState("");

  const Contexto = useContext(foodItemsContext);

  const handleSelect = (event) => {
    setSelectedFood(
      Contexto.menuItem.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  const FoodOrderCtxValue = {

    food: selectedFood,
    returnToMenu: () => setSelectedFood("")
  }

  return (
    <>
      {!selectedFood && (
        <div>
          <h4 className="foodTitle">Choose from our Menu</h4>
          <ul className="ulFoods">
            {Contexto.menuItem.map((item) => {
              return (
                <li
                  key={item.id}
                  className="liFoods"
                  data-id={item.id}
                  onClick={handleSelect}
                >
                  <img
                    className="foodImg"
                    src={require(`./images/${item.image}`)}
                    alt={item.name}
                  />
                  <div className="foodItem">
                    <p className="foodDesc">{item.desc}</p>
                    <p className="foodPrice">{item.price}$</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {selectedFood && (
        <foodOrderContext.Provider value={FoodOrderCtxValue}>
          <FoodOrder/>
        </foodOrderContext.Provider>
      )}
    </>
  );
};

export default Foods;
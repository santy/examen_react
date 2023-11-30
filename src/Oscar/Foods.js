import React, {  useContext, useState } from "react";
import "./Foods.css";
import FoodOrder from "./FoodOrder";
import { foodItemsContext } from "./App";
const Foods = () => {
  const [selectedFood, setSelectedFood] = useState("");
  const datos = useContext(foodItemsContext)

  const handleSelect = (event) => {
    setSelectedFood(
      datos.menuItems.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  const datosCompartidos = {selectedFood: selectedFood, returnToMenu: () => setSelectedFood(""), datosItems: datos}

  return (
    <>
      {!selectedFood && (
        <div>
          <h4 className="foodTitle">Choose from our Menu</h4>
          <ul className="ulFoods">
            {datos.menuItems.map((item) => {
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
        <foodItemsContext.Provider value={datosCompartidos}>
        <FoodOrder/>
        </foodItemsContext.Provider>
      )}
    </>
  );
};

export default Foods;
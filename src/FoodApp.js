//Modificar para usar useContext
//FoodApp, Menu, Order

import React, { useState } from "react";
import Menu from "./Menu";
const FoodApp = (props) => {
  const [shopOpen, setShopOpen] = useState("Open");
  const [btnText, setBtnText] = useState("Close");
  const openOrCloseShop = () => {
    if (shopOpen === "Open") {
      setShopOpen("Closed");
      setBtnText("Open");
    } else {
      setShopOpen("Open");
      setBtnText("Closed");
    }
  };
  return (
    <>
      <div>
        <button onClick={openOrCloseShop}>{btnText}</button>
      </div>
      
      <h1>Just Food online Shop{shopOpen}</h1>
      
      <Menu isOpen={shopOpen} />
    </>
  );
};
export default FoodApp;
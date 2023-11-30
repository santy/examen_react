import { useContext } from "react";
import Order from "./Order";
import { foodAppContext } from "./Context";
const Menu = () => {
  const MenuCtx = useContext(foodAppContext);

  console.log(`Due to shop ${MenuCtx.isOpen}, Menu component rendered`);
  return (
    <>
      <ul>
        <li><span class="food">Fried chicken burger - lettuce, tomato, cheese and mayonnaise </span><br /><Order isOpen={MenuCtx.isOpen} /></li>
        <li><span class="food">Plant-based burger -- letyce, tomato, vegan cheese and mayonnaise </span><br /><Order isOpen={MenuCtx.isOpen} /></li>
        <li><span class="food">Potato chips fried to perfection <br /></span><Order isOpen={MenuCtx.isOpen} /></li>
        <li><span class="food">Ice cream - Vanilla ice cream double scoop</span><br /><Order isOpen={MenuCtx.isOpen} /></li>
      </ul>
      
    </>
  );
};
export default Menu;
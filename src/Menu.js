import Order from "./Order";
const Menu = (props) => {
  console.log(`Due to shop ${props.isOpen}, Menu component rendered`);
  return (
    <>
      <ul>
        <li><span class="food">Fried chicken burger - lettuce, tomato, cheese and mayonnaise </span><br /><Order isOpen={props.isOpen} /></li>
        <li><span class="food">Plant-based burger -- letyce, tomato, vegan cheese and mayonnaise </span><br /><Order isOpen={props.isOpen} /></li>
        <li><span class="food">Potato chips fried to perfection <br /></span><Order isOpen={props.isOpen} /></li>
        <li><span class="food">Ice cream - Vanilla ice cream double scoop</span><br /><Order isOpen={props.isOpen} /></li>
      </ul>
      
    </>
  );
};
export default Menu;
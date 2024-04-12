import { useContext } from 'react';
import   Context   from './ContextProvider';
import { Link } from "react-router-dom";

function NavComp() {
    const { cartItems } = useContext(Context);
  return (
    <div className="header-container">
      
      <ul className="nav">
      <div>
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li></div>
        <div>
        <li className="prod1">
          <Link to="/cart">Cart {cartItems.length}</Link>
        </li></div>
      </ul>
    </div>
  );
}



export default NavComp;
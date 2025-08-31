import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import { CartContext } from "./context/CartContext.jsx";
import logo from "./assets/images/logo.png";
import "./styles.css";

function App() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <img src={logo} alt="HappyHands Toys Logo" className="header-logo" />
          <nav>
            
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/cart">Cart ({cart.length})</NavLink></li>
            </ul>
          </nav>
          <div className="cart-summary">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
        <h1>HappyHands Toys</h1>
      </header>
      <main>
        <ProductList />
      </main>
      <footer>
        <p>HappyHands Toys - All rights reserved © 2025</p>
        <p>Built by: Nikola Dackovic</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/nikola-dackovic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
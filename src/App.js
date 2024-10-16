// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';
import NavBar from './components/NavBar';
import './index.css';

// App component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBarWithVisibility />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

// Component to control NavBar visibility
const NavBarWithVisibility = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== '/'; // Hide NavBar on home page

  return showNavBar ? <NavBar /> : null; // Conditionally render NavBar
};

export default App;

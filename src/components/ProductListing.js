// src/components/ProductListing.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { addToCart } from '../redux/cartSlice'; // Import the action (adjust the path as necessary)
import { Link } from 'react-router-dom'; // Import Link for navigation
import plantsData from './PlantsData'; // Assuming you have a plantsData.js file with the product details
import './ProductListing.css'; // Import CSS for styling

const ProductListing = () => {
    const dispatch = useDispatch(); // Get dispatch from Redux
    const [disabledItems, setDisabledItems] = useState({}); // State to disable buttons after adding to cart

    // Function to handle adding a product to the cart
    const handleAddToCart = (id, name, price) => {
        dispatch(addToCart({ id, name, price })); // Dispatch the action with product details
        setDisabledItems(prev => ({ ...prev, [id]: true })); // Disable the button for the added item
    };

    return (
        <div className="product-listing">
            <h1 className="cart-info">
                <Link to="/cart">Cart</Link>
            </h1>
            <div className="categories">
                {/* Flower Plants Category */}
                <h2 className="category-title">Flower Plants</h2>
                <div className="plant-category">
                    {plantsData.filter(plant => plant.category === "Flower Plants").map(plant => (
                        <div key={plant.id} className="product-card">
                            <img src={plant.image} alt={plant.name} />
                            <h3 className="product-name">{plant.name}</h3>
                            <p className="product-price">${plant.price.toFixed(2)}</p>
                            <button
                                onClick={() => handleAddToCart(plant.id, plant.name, plant.price)}
                                disabled={disabledItems[plant.id]}
                            >
                                {disabledItems[plant.id] ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Medicinal Plants Category */}
                <h2 className="category-title">Medicinal Plants</h2>
                <div className="plant-category">
                    {plantsData.filter(plant => plant.category === "Medicinal Plants").map(plant => (
                        <div key={plant.id} className="product-card">
                            <img src={plant.image} alt={plant.name} />
                            <h3 className="product-name">{plant.name}</h3>
                            <p className="product-price">${plant.price.toFixed(2)}</p>
                            <button
                                onClick={() => handleAddToCart(plant.id, plant.name, plant.price)}
                                disabled={disabledItems[plant.id]}
                            >
                                {disabledItems[plant.id] ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Fruit Plants Category */}
                <h2 className="category-title">Fruit Plants</h2>
                <div className="plant-category">
                    {plantsData.filter(plant => plant.category === "Fruit Plants").map(plant => (
                        <div key={plant.id} className="product-card">
                            <img src={plant.image} alt={plant.name} />
                            <h3 className="product-name">{plant.name}</h3>
                            <p className="product-price">${plant.price.toFixed(2)}</p>
                            <button
                                onClick={() => handleAddToCart(plant.id, plant.name, plant.price)}
                                disabled={disabledItems[plant.id]}
                            >
                                {disabledItems[plant.id] ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;

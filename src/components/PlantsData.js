import roseImage from '../images/rose.png';
import tulipImage from '../images/tulip.png';
import mograImage from '../images/mogra.png';
import aloeveraImage from '../images/aloevera.png';
import basilImage from '../images/basil.png';
import gingerImage from '../images/ginger.png';
import mangoImage from '../images/mango.png';
import bananaImage from '../images/banana.png';
import orangeImage from '../images/orange.png';
const plantsData = [
    {
        id: 1,
        name: "Rose",
        price: 12.99,
        image: roseImage,
        category: "Flower Plants",
    },
    {
        id: 2,
        name: "Tulip",
        price: 9.99,
        image: tulipImage,
        category: "Flower Plants",
    },
    {
        id: 3,
        name: "Mogra", // Added Mogra here
        price: 11.99, // Adjust the price as needed
        image: mograImage, // Add the URL for Mogra image
        category: "Flower Plants",
    },
    {
        id: 4,
        name: "Aloe Vera",
        price: 10.99,
        image: aloeveraImage,
        category: "Medicinal Plants",
    },
    {
        id: 5,
        name: "Basil",
        price: 8.49,
        image: basilImage,
        category: "Medicinal Plants",
    },
    {
        id: 6,
        name: "Ginger",
        price: 15.00,
        image: gingerImage,
        category: "Medicinal Plants",
    },
    {
        id: 7,
        name: "Mango Tree",
        price: 30.00,
        image: mangoImage,
        category: "Fruit Plants",
    },
    {
        id: 8,
        name: "Banana Tree",
        price: 18.00, // You can adjust the price as needed
        image: bananaImage,
        category: "Fruit Plants",
    },
    {
        id: 9,
        name: "Orange Tree",
        price: 20.00, // Adjusted price for Orange Tree
        image: orangeImage,
        category: "Fruit Plants",
    },
];

export default plantsData;

import React from "react";
import { ProductCard } from "./components/ProductCard";
import { Product } from "./types";
import "./styles/variables.css";
import "./styles/App.css";

const products: Product[] = [
	{
		id: 1,
		brand: "Ace Superwhite",
		name: "Ace Superwhite Eucalyptus Slim",
		strength: "Extra Strong",
		rating: 3,
		image: "/images/AceOne.webp",
		packOptions: [
			{ size: 10, price: 39.9, pricePerPiece: 3.99 },
			{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		],
	},
	{
		id: 2,
		brand: "Ace Superwhite",
		name: "Ace X Cool Mint Slim",
		strength: "Strong",
		rating: 5,
		image: "/images/AceTwo.png",
		packOptions: [
			{ size: 10, price: 39.9, pricePerPiece: 3.99 },
			{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		],
	},
	{
		id: 3,
		brand: "Ace Superwhite",
		name: "Ace Superwhite x Cosmic Cool Mint",
		strength: "Extra Strong",
		rating: 2,
		image: "/images/AceThree.webp",
		packOptions: [
			{ size: 10, price: 39.9, pricePerPiece: 3.99 },
			{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		],
	},
	{
		id: 4,
		brand: "Ace Superwhite",
		name: "Ace Superwhite Cool Mint Slim Extra",
		strength: "Extra Strong",
		rating: 4,
		image: "/images/AceFour.png",
		packOptions: [
			{ size: 10, price: 39.9, pricePerPiece: 3.99 },
			{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		],
	},
	{
		id: 5,
		brand: "Ace Superwhite",
		name: "Ace Superwhite Green Lemon Slim",
		strength: "Extra Strong",
		rating: 4,
		image: "/images/AceFive.png",
		packOptions: [
			{ size: 10, price: 39.9, pricePerPiece: 3.99 },
			{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		],
	},
	{
		id: 6,
		brand: "Ace Superwhite",
		name: "Ace Superwhite Spearmint Slim",
		strength: "Strong",
		rating: 1,
		image: "/images/AceSix.webp",
		packOptions: [
			{ size: 10, price: 39.9, pricePerPiece: 3.99 },
			{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		],
	},
];

function App() {
	return (
		<div className='app-container'>
			<div className='content-wrapper'>
				<div className='products-grid'>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

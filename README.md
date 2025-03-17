# Product Card Component

A modern, responsive product card component built with React, TypeScript, and
CSS. This project showcases a sleek UI for displaying products with interactive
features like pack selection and add to cart functionality.

![Product Card Preview](./preview.png)

## Features

-   🎨 Clean, modern UI design
-   📱 Fully responsive layout
-   🔄 Interactive pack selection with bottom sheet dialog
-   🛒 Add to cart functionality with visual feedback
-   ⭐ Product rating display
-   💰 Dynamic pricing based on pack selection

## Technologies Used

-   React
-   TypeScript
-   CSS (with CSS variables for theming)
-   Vite (for fast development and building)

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/product-card.git
    cd product-card
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit:
    ```
    http://localhost:5173/
    ```

## Project Structure

```
product-card/
├── public/
│   └── images/         # Product images
├── src/
│   ├── components/     # React components
│   ├── styles/         # CSS files
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
├── index.html
└── README.md
```

## Usage

The product card component can be easily integrated into any React application.
Simply import the component and pass the required props:

```jsx
import { ProductCard } from "./components/ProductCard";

// Example product data
const product = {
	id: 1,
	brand: "Ace Superwhite",
	name: "Ace Superwhite Eucalyptus Slim",
	strength: "Extra Strong",
	rating: 3,
	image: "/images/AceOne.webp",
	packOptions: [
		{ size: 1, price: 4.49, pricePerPiece: 4.49 },
		{ size: 10, price: 39.9, pricePerPiece: 3.99 },
		{ size: 40, price: 147.6, pricePerPiece: 3.69 },
		{ size: 80, price: 279.2, pricePerPiece: 3.49 },
	],
};

function App() {
	return (
		<div className='app-container'>
			<ProductCard product={product} />
		</div>
	);
}
```

## Customization

The component uses CSS variables for easy customization. You can modify the
colors, spacing, and other design elements by editing the variables in
`src/styles/variables.css`.

## License

MIT

## Acknowledgements

-   [Lucide Icons](https://lucide.dev/) for the beautiful icons
-   [Montserrat](https://fonts.google.com/specimen/Montserrat) font from Google
    Fonts

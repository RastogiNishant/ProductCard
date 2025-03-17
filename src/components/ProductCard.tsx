import React, { useState, useEffect } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { Product, PackOption } from "../types";
import "../styles/ProductCard.css";

interface ProductCardProps {
	product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [selectedPack, setSelectedPack] = useState<PackOption>(
		product.packOptions[0],
	);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	useEffect(() => {
		if (isDialogOpen) {
			document.body.classList.add("dialog-open");
		} else {
			document.body.classList.remove("dialog-open");
		}

		return () => {
			document.body.classList.remove("dialog-open");
		};
	}, [isDialogOpen]);

	const handlePackSelect = (pack: PackOption) => {
		setSelectedPack(pack);
		closeDialog();
	};

	const handleAddToCart = () => {
		setIsAddedToCart(true);
		setIsDialogOpen(false);
		setTimeout(() => setIsAddedToCart(false), 2000);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<div className='product-card'>
			<div
				className={`product-info ${isDialogOpen ? "blurred-info" : ""}`}
			>
				<div className='product-image'>
					<img src={product.image} alt={product.name} />
				</div>

				<div className='product-info-container'>
					<div className='rating'>
						<div className='stars'>
							{"★".repeat(product.rating) +
								"☆".repeat(5 - product.rating)}
						</div>
						<span className='rating-count'>{product.rating}</span>
					</div>

					<div className='product-title'>
						<h3>{product.brand}</h3>
						<h2>{product.name}</h2>
						<p className='strength'>{product.strength}</p>
					</div>
				</div>
			</div>

			<div className='price-container'>
				<div
					className={`pack-selector ${isDialogOpen ? "active" : ""}`}
					onClick={() => setIsDialogOpen(!isDialogOpen)}
				>
					<span className='pack-label'>{selectedPack.size}-pack</span>
					<ChevronDown
						className={`transition-transform ${
							isDialogOpen ? "rotate-180" : ""
						}`}
					/>
				</div>
				<div className='price-info'>
					<div className='price'>
						€{selectedPack.price.toFixed(2)}
					</div>
					<div className='price-per-piece'>
						€{selectedPack.pricePerPiece.toFixed(2)}/piece
					</div>
				</div>
			</div>

			<button
				className={`add-to-cart ${isAddedToCart ? "added" : ""}`}
				onClick={handleAddToCart}
			>
				{isAddedToCart ? (
					<span className='button-content'>
						<Check size={20} />
					</span>
				) : (
					<span className='button-content'>Add to Cart</span>
				)}
			</button>

			<div
				className={`overlay ${isDialogOpen ? "active" : ""}`}
				onClick={closeDialog}
			/>

			<div className={`pack-dialog ${isDialogOpen ? "active" : ""}`}>
				<div className='pack-dialog-header'>
					<div className='pack-dialog-title'>
						Zoom out{" "}
						<ChevronDown
							size={12}
							onClick={() => setIsDialogOpen(false)}
						/>
					</div>
					<button className='pack-dialog-close' onClick={closeDialog}>
						<X size={20} />
					</button>
				</div>
				<div className='pack-dialog-subtitle'>Size</div>
				<div className='pack-options'>
					{product.packOptions.map((pack) => (
						<div
							key={pack.size}
							className={`pack-option ${
								selectedPack.size === pack.size
									? "selected"
									: ""
							}`}
							onClick={() => handlePackSelect(pack)}
						>
							<div className='pack-option-size'>
								{pack.size}-Pack
							</div>
							<div className='pack-price'>
								€{pack.price.toFixed(2)}
							</div>
							<div className='pack-option-price'>
								€{pack.pricePerPiece.toFixed(2)}/piece
							</div>
							<div className='checkbox-container'>
								{selectedPack.size === pack.size ? (
									<div className='checkbox checked'>
										<Check size={16} color='black' />
									</div>
								) : (
									<div className='checkbox'></div>
								)}
							</div>
						</div>
					))}
				</div>
				<button
					className='add-to-cart-mobile'
					onClick={handleAddToCart}
				>
					<span className='button-content'>Add to Cart</span>
				</button>
			</div>
		</div>
	);
};

export interface PackOption {
  size: number;
  price: number;
  pricePerPiece: number;
}

export interface Product {
  id: number;
  brand: string;
  name: string;
  strength: string;
  rating: number;
  image: string;
  packOptions: PackOption[];
}
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organik Domates",
    price: 25,
    image: "https://via.placeholder.com/150?text=Domates",
  },
  {
    id: 2,
    name: "Köy Yumurtası (10'lu)",
    price: 35,
    image: "https://via.placeholder.com/150?text=Yumurta",
  },
  {
    id: 3,
    name: "Taze Salatalık",
    price: 20,
    image: "https://via.placeholder.com/150?text=Salatalık",
  },
];

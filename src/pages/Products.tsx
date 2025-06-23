import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ürünler yüklenemedi:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Ürünlerimiz</h2>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-green-200 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-1">
                <Link to={`/products/${product.id}`} className="hover:underline">
                  {product.name}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-green-900 font-bold">{product.price} TL</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

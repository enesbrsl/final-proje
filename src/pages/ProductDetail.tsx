import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === Number(id));
        setProduct(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Yükleniyor...</p>;
  if (!product) return <p>Ürün bulunamadı.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-green-700 underline mb-4 inline-block">
        &larr; Geri Dön
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            {product.name}
          </h2>
          <p className="mb-4">{product.description}</p>
          <p className="text-green-900 font-bold text-xl mb-6">
            {product.price} TL
          </p>
          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

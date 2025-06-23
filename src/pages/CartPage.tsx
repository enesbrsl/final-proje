import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Sepetim</h2>

      {cart.length === 0 ? (
        <p>Sepetin şu anda boş.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center border border-green-200 rounded p-4 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-700">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-green-900 mt-2">
                    {item.price * item.quantity} TL
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 font-semibold ml-4"
                  title="Ürünü sepetten çıkar"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-green-900">
              Toplam: {totalPrice} TL
            </span>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Sepeti Temizle
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

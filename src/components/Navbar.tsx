import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Tarladan Sofraya</Link>
      <div className="flex gap-4">
        <Link to="/products" className="hover:underline">Ürünler</Link>
        <Link to="/cart" className="hover:underline">Sepet</Link>
        <Link to="/login" className="hover:underline">Giriş</Link>
        <Link to="/register" className="hover:underline">Üye Ol</Link>
      </div>
    </nav>
  );
};

export default Navbar;

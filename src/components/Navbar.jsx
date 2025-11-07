import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white text-blue-900 py-3 shadow-md">

      <div className="flex justify-end space-x-8 text-lg font-medium px-6">
        <Link to="/" className="hover:text-gray-400 transition">Home</Link>
        <Link to="/about" className="hover:text-gray-400 transition">About</Link>
        <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

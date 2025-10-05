import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Binary Consultancy</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;


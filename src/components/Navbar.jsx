function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">TaxZoom</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

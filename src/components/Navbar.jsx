import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, User, Menu, X as CloseIcon } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-base-200 relative z-50">
      <div className="navbar bg-base-300 px-4 flex items-center justify-between">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="flex items-center gap-2 sm:text-2xl text-[18px] font-bold text-primary"
          >
            <ShoppingCart className="sm:w-7 sm:h-7 text-accent" />
            <span>
              Online<span className="text-accent">Shop</span>
            </span>
          </NavLink>
        </div>

        <div className="hidden md:flex navbar-center">
          <ul className="menu menu-horizontal px-1 text-base">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-accent" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-accent" : ""}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-accent" : ""}>Contact</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
      
          <div className="hidden md:flex items-center gap-5">
          <NavLink className="flex items-center gap-1.5 hover:text-amber-600 transition-normal" to="/cart" onClick={() => setIsMenuOpen(false)}>
            <ShoppingCart className="w-6 h-6"/>
            <span>Cart</span>
          </NavLink>
          <NavLink className="flex items-center gap-1.5  hover:text-amber-600 transition-normal" to="/profile" onClick={() => setIsMenuOpen(false)}>
            <User className="w-6 h-6"/>
            <span>Profile</span>
          </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-base-100 shadow-lg z-50 p-4 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-ghost btn-circle"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <ul className="menu menu-vertical space-y-2 text-lg mt-4">
          <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
          <li>
           <NavLink className="flex items-center gap-2" to="/cart" onClick={() => setIsMenuOpen(false)}>
            <ShoppingCart className="w-6 h-6"/>
            <span>Cart</span>
           </NavLink>
          </li>
          <li>
           <NavLink className="flex items-center gap-2" to="/profile" onClick={() => setIsMenuOpen(false)}>
            <User className="w-6 h-6"/>
            <span>Profile</span>
           </NavLink>
          </li>
        </ul>

        

      </div>
    </header>
  );
}

export default Navbar;

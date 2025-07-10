import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   navigate('/dashboard');
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   navigate('/');
  // };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Arpit's Restroo</Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/services" className="hover:text-amber-400">Services</Link>
          <Link to="/reviews" className="hover:text-amber-400">Reviews</Link>   
          <Link to="/menu" className="hover:text-amber-400">Menu</Link>
          <Link to="/about" className="hover:text-amber-400">About</Link>
          <Link to="/contact" className="hover:text-amber-400">Contact</Link>
          
          {/* {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="hover:text-amber-400">Dashboard</Link>
              <button 
                onClick={handleLogout}
                className="hover:text-amber-400 bg-transparent border-none cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-amber-400">
              Login
            </Link>
          )} */}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2 mt-2">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/reviews" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Reviews</Link>   
            <Link to="/menu" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link to="/about" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            {/* {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-amber-400" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-amber-400 bg-transparent border-none cursor-pointer text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
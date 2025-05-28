import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Clubs', to: 'wings' },
    { name: 'Events', to: 'events' },
    { name: 'Team', to: 'team' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-white cursor-pointer"
          >
            <img src="./images/techlogo.png" class="mainlogo" />
            <span className="text-xl font-bold">Technical affairs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-200 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="primary" size="sm">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-white block py-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                  <Button variant="primary" size="sm">
                    Join Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useCallback, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownMenus = {
    'The Firm': [
      { name: 'About Us', path: '/about' },
      { name: 'Our Values', path: '/our-values' },
      { name: 'Our Team', path: '/our-team' },
      { name: 'Retainership', path: '/retainership' },
      { name: 'Recognition', path: '/recognition' }
    ],
    'Media & Publications': [
      { name: 'News & Updates', path: '/news' },
      { name: 'Articles', path: '/articles' },
      { name: 'Press Releases', path: '/press' },
      { name: 'Case Studies', path: '/case-studies' }
    ],
    'Practices': [
      { name: 'Civil Law Practice', path: '/civil-law' },
      { name: 'Criminal Law Practice', path: '/criminal-law' },
      { name: 'Corporate Law Practice', path: '/corporate-law' },
      { name: 'Family Law', path: '/family-law' },
      { name: 'NGO & Trust Services', path: '/ngo-services' },
      { name: 'Traffic Challans', path: '/traffic-challans' }
    ],
    'Careers': [
      { name: 'Current Openings', path: '/careers' },
      { name: 'Internship Program', path: '/internships' },
      { name: 'Life at Hashmi Law', path: '/life-at-firm' }
    ]
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const handleMouseEnter = useCallback((menu) => {
    setActiveDropdown(menu);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const handleMenuClick = (path) => {
    navigate(path);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Hashmi Law Associates Pvt. Ltd." />
        </Link>
        
        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/" className="nav-button">Home</Link>
          
          {Object.entries(dropdownMenus).map(([menu, items]) => (
            <div 
              key={menu}
              className={`dropdown ${activeDropdown === menu ? 'active' : ''}`}
              onClick={() => isMobileMenuOpen && setActiveDropdown(activeDropdown === menu ? null : menu)}
            >
              <div className="nav-button">
                {menu}
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className={`dropdown-content ${isMobileMenuOpen ? 'mobile' : ''}`}>
                {items.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <Link to="/contact" className="nav-button contact-button">Contact Us</Link>
          <button className="nav-button login-button">
            <i className="fas fa-user"></i>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
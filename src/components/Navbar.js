import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

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
        
        <div className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          
          {Object.entries(dropdownMenus).map(([menu, items]) => (
            <div 
              key={menu}
              className={`dropdown ${activeDropdown === menu ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="nav-button">
                {menu}
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className="dropdown-content">
                {items.map((item) => (
                  <a 
                    key={item.name}
                    onClick={() => handleMenuClick(item.path)}
                  >
                    {item.name}
                  </a>
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
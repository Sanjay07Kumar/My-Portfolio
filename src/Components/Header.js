
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <div className="Main-page">
        {/* <div className='homepage-fit'> */}
         {/* Top Navbar */}
         
            <div className="home-top1" fixed="top">
              
              <h3 className="home-top1-h3">Portfolio | Sanjay</h3>
              {/* Use a button instead of <a> for accessibility */}
              <button
                onClick={() => setMenuOpen(true)}
                className="menu-icon"
                aria-label="Open menu"
                style={{ background: "none", border: "none" }}
              >
              <HiMenu color="black" size={40}/>
              </button>
            </div>

            {/* Fullscreen Menu Overlay */}
            {menuOpen && (
            <div className="menu-overlay">
                <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <HiX size={35} />
                </button>
                
                <h2>Menu</h2>
                
                <ul className="menu-items">
                  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
            )}
            </div>
);
}
export default Header;
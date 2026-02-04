import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isNotHomePage = location.pathname !== "/";

  const handleBack = () => {
    if (location.state?.fromSection) {
      navigate("/", { state: { scrollTo: location.state.fromSection } });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="fixed z-50 h-[60px] w-full bg-[#E0E0DF]/10 backdrop-blur-lg backdrop-saturate-150">
      <div className={`${menuOpen ? "hidden" : "flex"} px-5 w-full h-16 items-center justify-between`}>
        
        <div className='flex items-center gap-2'>
          {isNotHomePage && (
            <button 
              onClick={handleBack} 
              className="hover:text-gray-500 pb-1 transition-colors flex items-center justify-center"
              aria-label="Go back"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          <h3 className="text-[20px] font-medium">
            Portfolio | Sanjay
          </h3>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="cursor-pointer flex items-center justify-center"
        >
          <HiMenu color="black" size={25} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 w-full min-h-screen bg-blue-200 z-50">
          <div className="flex justify-end p-5">
            <button 
              onClick={() => setMenuOpen(false)} 
              aria-label="Close menu"
              className="cursor-pointer flex items-center justify-center"
            >
              <HiX size={40} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-4xl font-black mb-5">Menu</h2>
            <ul className="justify-center items-center flex flex-col gap-8 text-2xl list-none p-0 m-0">
              <li>
                <a 
                  className="no-underline font-bold hover:text-blue-600 transition-colors" 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                    setMenuOpen(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  className="no-underline font-bold hover:text-blue-600 transition-colors" 
                  href="/#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/", { state: { scrollTo: "about" } });
                    setMenuOpen(false);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  className="no-underline font-bold hover:text-blue-600 transition-colors" 
                  href="/projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/projects");
                    setMenuOpen(false);
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  className="no-underline font-bold hover:text-blue-600 transition-colors" 
                  href="/#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/", { state: { scrollTo: "contact" } });
                    setMenuOpen(false);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
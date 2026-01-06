
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <div className="fixed z-10 h-[70px] w-full bg-[#E0E0DF]">
         
            <div className={`${menuOpen? "hidden" :"flex"} px-5 w-full h-16 justify-between items-center`}>
              <h3 className="">
                Portfolio | Sanjay
              </h3>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                style={{ background: "none", border: "none" }}
              >
                <HiMenu color="black" size={30} />
              </button>
            </div>

            {menuOpen && (
              <div className="fixed inset-0 w-full h-full bg-blue-200 ">

                <div className="flex justify-end p-5">
                  <button 
                    onClick={() => setMenuOpen(false)} 
                    aria-label="Close menu"
                    className="cursor-pointer"
                  >
                    <HiX size={40} />
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center space-y-10">
                  <h2 className="text-4xl font-bold">Menu</h2>

                  <ul className="flex flex-col items-center text-3xl space-y-6">
                    <li><a className="no-underline hover:text-blue-600" href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a className="no-underline hover:text-blue-600" href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a className="no-underline hover:text-blue-600" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a className="no-underline hover:text-blue-600" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                  </ul>
                </div>

              </div>
            )}


            </div>
);
}
export default Header;
import { FaHome, FaUser,FaFolderOpen,FaEnvelope} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li><a href="#home"><FaHome/></a></li>
        <li><a href="#about"><FaUser/></a></li>
        <li><a href="#projects"><FaFolderOpen/></a></li>
        <li><a href="#contact"><FaEnvelope/></a></li>
      </ul>
    </div>
  );
};

export default Navbar;

import { FaHome, FaUser,FaFolderOpen,FaEnvelope} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-[#223B4F] top-1/4 bottom-1/4 rounded-tr-[20px] rounded-br-[20px] fixed w-[55px] flex items-center justify-center hidden lg:flex">
      <ul className="h-full flex flex-col items-center justify-center gap-0 list-none m-0 p-0 w-full">
        
        <li className="flex-1 flex items-center justify-center w-full">
          <a href="#home" className="text-white text-2xl ">
            <FaHome className='hover:text-gray-400'/>
          </a>
        </li>

        <li className="flex-1 flex items-center justify-center w-full">
          <a href="#about" className="text-white text-2xl ">
            <FaUser className='hover:text-gray-400'/>
          </a>
        </li>

        <li className="flex-1 flex items-center justify-center w-full">
          <a href="#projects" className="text-white text-2xl ">
            <FaFolderOpen className='hover:text-gray-400'/>
          </a>
        </li>

        <li className="flex-1 flex items-center justify-center w-full">
          <a href="#contact" className="text-white text-2xl ">
            <FaEnvelope className='hover:text-gray-400'/>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;

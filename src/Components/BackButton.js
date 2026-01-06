// BackButton.js
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // go back to main page with section info
    if (location.state?.fromSection) {
      navigate("/", { state: { scrollTo: location.state.fromSection } });
    } else {
      navigate(-1); // default fallback
    }
  };
  return (
    <button onClick={handleBack} className="fixed py-2 mt-2 text-700 z-50 hover:text-gray-500">
      <FaArrowLeft size={25}/>
    </button>
  );
};

export default BackButton;

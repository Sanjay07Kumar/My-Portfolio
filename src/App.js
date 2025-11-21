import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import About from './Components/About';
import Projects from './Components/Projects';
import Header from './Components/Header';
// import LeetCodeCalendar from './Components/LeetCodeCalender';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      
      {/* Show Navbar only on HomePage */}
      {location.pathname === '/' && <Navbar />}
      
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
      {/* <LeetCodeCalendar/> */}
      
    </Router>
  );
}

export default App;

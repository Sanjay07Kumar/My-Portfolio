
import HomePic from './Assets/ocean1.jpg';

import Estate from './Assets/meinestate.jpg';
import ProjectPic from './Assets/project-pic.jpg';

import ContactPic from './Assets/contact-pic.jpg';
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub,FaInstagram,FaLinkedin } from 'react-icons/fa';

import { useLocation } from "react-router-dom";
import { useEffect } from "react";


import { useNavigate } from 'react-router-dom';
import Resume from './Docs/RESUME.pdf';
const MainPage = () => {
  const navigate =useNavigate();
   const location = useLocation();
   useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
            <div className='scroll-container no-scrollbar overflow-y-scroll'>
            <Container style={{ maxWidth: '100%' }}>
            <div id="home"className='page-section'>
              <Row className="h-screen">
               
                  <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }} 
                    className="lg:ml-[150px] flex flex-col items-center md:items-start text-center md:text-start lg:justify-center space-y-2">
                    
                      <h1 className="text-[20px] sm:text-[40px] md:text-[40px] lg:text-[40px]tracking-widest">S A N J A Y &nbsp; K U M A R</h1>
                  
                      <p className="text-[40px] sm:text-[25px] md:text-[40px] lg:text-[90px] text-black font-black whitespace-nowrap overflow-visible">Full Stack Developer</p>
                      <p className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[22px] text-[rgb(96,93,93)] lg:text-start'>
                        Hi! I’am Sanjay Kumar, A junior fullstack developer specializing in modern Web Development. Passionate about building scalable, user-friendly web applications and exploring new technologies and a proud member of the developer community.
                      </p>
                
                      <div className="button flex mt-5 space-x-5">
                          <div className="">
                            <button 
                              className="bg-[rgb(34,59,79)] border rounded-[20px] text-white px-9 py-3 text-lg"
                              onClick={() => {
                                const link = document.createElement("a");
                                link.href = Resume;
                                link.download = "Sanjay_Kumar_CV.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              Resume
                            </button>
                          </div>

                          <button className="bg-[rgb(34,59,79)] border rounded-[20px] text-white px-9 py-3 text-lg" 
                          onClick={() => window.location.href="#contact"}>Contact</button>
                      {/* </div> */}
                      </div>
                  </Col>

                  <Col 
                    xs={{ order: 1, span: 12  }} 
                    md={{ span: 4, order: 2 }} className="md:ml-10 flex items-center justify-center">
                      <img 
                        className="w-[200px] h-[200px] lg:w-1/2 lg:h-1/2 md:w-full md:h-auto 
                                  aspect-square object-cover grayscale hover:grayscale-0 transition duration-400
                                  rounded-full " 
                        src={HomePic} 
                        alt="Profile"
                      />
                  </Col>
              </Row>
              </div>



              <hr></hr>
              <div id="about" className="page-section">

                  <Row className="h-screen flex flex-col md:flex items-center justify-center">

                    <Col 
                      xs={{ span: 12, order: 1 }} 
                      md={{ span: 5, order: 2 }} 
                      className="flex items-center justify-center p-0"
                    >
                      <div className="relative w-[80%] md:w-full flex justify-center">
                        <img 
                          className="w-full h-screen max-h-[50vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400" 
                          src={Estate} 
                          alt="Profile"
                        />
                        
                        <h1 className="
                          absolute bottom-4 left-0 bg-white/90 px-4 py-1 
                          md:hidden 
                          text-[40px] font-black text-black whitespace-nowrap">
                          About Me
                        </h1>
                      </div>
                    </Col>

                    <Col 
                      xs={{ span: 12, order: 2 }} 
                      md={{ span: 5, order: 1 }} 
                      className="lg:ml-[150px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6" 
                    >
                      <h1 className="hidden md:block lg:text-[120px] md:text-[70px] text-black font-black whitespace-nowrap offset-underline">
                        About Me
                      </h1>

                      <p className="text-[rgb(96,93,93)] ml-10 lg:ml-0 text-[18px] md:text-[22px] text-left max-w-[85%] md:max-w-none">
                        A brief introduction about me and my interest.
                      </p>

                      <button 
                        onClick={() => navigate('/about', { state: { fromSection: 'about' } })} 
                        className="w-fit bg-[rgb(34,59,79)] ml-10 lg:ml-0 border rounded-[20px] text-white text-xl md:text-2xl px-6 py-2 shadow-md"
                      >
                        Learn more
                      </button>
                    </Col>

                  </Row>
              </div>
              <hr></hr>
              <div id="projects" className="page-section">
                
                  <Row className="h-screen flex flex-col md:flex items-center justify-center">

                    <Col 
                      xs={{ span: 12, order: 1 }} 
                      md={{ span: 5, order: 2 }} 
                      className="flex items-center justify-center p-0"
                    >
                      <div className="relative w-[80%] md:w-full flex justify-center">
                         <img 
                          className="w-full h-screen max-h-[60vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400" 
                          src={ProjectPic} 
                          alt="Profile"
                        />
                        
                        <h1 className="
                          absolute bottom-4 left-0 bg-white/90 px-4 py-1 
                          md:hidden 
                          text-[40px] font-black text-black whitespace-nowrap">
                          My Projects
                        </h1>
                      </div>
                    </Col>

                    <Col 
                      xs={{ span: 12, order: 2 }} 
                      md={{ span: 5, order: 1 }} 
                      className="lg:ml-[150px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6" 
                    >
                      <h1 className="hidden md:block lg:text-[120px] md:text-[70px] text-black font-black whitespace-nowrap offset-underline">
                        My Projects
                      </h1>

                      <p className="text-[rgb(96,93,93)] ml-10 lg:ml-0 text-[18px] md:text-[22px] text-left max-w-[85%] md:max-w-none">
                        These are some of the projects that i have done and currently working on.
                      </p>

                      <button 
                        onClick={() => navigate('/projects', { state: { fromSection: 'projects' } })} 
                        className="w-fit bg-[rgb(34,59,79)] ml-10 lg:ml-0 border rounded-[20px] text-white text-xl md:text-2xl px-6 py-2 shadow-md"
                      >
                        Learn more
                      </button>
                    </Col>

                  </Row>
                  
              </div>


              <hr></hr>

              <div id="contact" className="page-section">
                  <Row className="h-screen flex flex-col md:flex items-center justify-center">

                    <Col 
                      xs={{ span: 12, order: 1 }} 
                      md={{ span: 5, order: 2 }} 
                      className="flex items-center justify-center p-0"
                    >
                      <div className="relative w-[80%] md:w-full flex justify-center">
                        <img 
                          className="w-full h-screen max-h-[60vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400" 
                          src={ContactPic} 
                          alt="Profile"
                        />
                        
                        <h1 className="
                          absolute bottom-4 left-0 bg-white/90 px-4 py-1 
                          md:hidden 
                          text-[40px] font-black text-black whitespace-nowrap">
                          Contact me
                        </h1>
                      </div>
                    </Col>

                    <Col 
                      xs={{ span: 12, order: 2 }} 
                      md={{ span: 5, order: 1 }} 
                      className="lg:ml-[150px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6" 
                    >
                      <h1 className="hidden md:block lg:text-[120px] md:text-[70px] text-black font-black whitespace-nowrap offset-underline">
                        Contact me
                      </h1>

                      <p className="text-[rgb(96,93,93)] ml-10 lg:ml-0 text-[18px] md:text-[22px] text-left max-w-[85%] md:max-w-none">
                        Feel free to contact me if you want to ask something or just to say hi.
                      </p>

                      <a 
                        href="mailto:ask4kumar07@gmail.com" 
                        className="mail ml-10 lg:ml-0 text-[18px] md:text-[22px] text-[rgb(34,59,79)] font-medium underline decoration-2 underline-offset-4"
                      >
                        ask4kumar07@gmail.com
                      </a>

                      <div className='flex ml-10 lg:ml-0 space-x-8'>
                        <a href="https://github.com/Sanjay07Kumar" className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/sanjay-kumar-1820t1820/" className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"><FaLinkedin/></a>
                        <a href="https://www.instagram.com/k_umar_04/" className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"><FaInstagram/></a>
                        <a href="mailto:ask4kumar07@gmail.com" className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"><FaEnvelope/></a>
                      </div>
                    </Col>

                  </Row>
                                  
              </div>
            </Container>
    </div>
  );
};
export default MainPage;
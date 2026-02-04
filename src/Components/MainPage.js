import ProjectPic from './Assets/project-pic.jpg';
import MainPic from './Assets/about-section.jpg';
import ContactPic from './Assets/contact-pic.jpg';
import { Container, Row, Col } from "react-bootstrap";

import Ocean3 from './Assets/ocean3.jpg';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { useLocation } from "react-router-dom";
import { useEffect } from "react";


import { useNavigate } from 'react-router-dom';
import Resume from './Docs/RESUME.pdf';
const MainPage = () => {
  const navigate = useNavigate();
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
        <div id="home" className='page-section'>
          <Row className="h-screen w-full">

            <Col xs={{ order: 2 }} md={{ span: 7, order: 1 }}
              className="lg:ml-[100px] flex flex-col items-center text-center md:items-start md:text-start lg:justify-center space-y-5">

              <h1 className="text-[20px] sm:text-[40px] md:text-[40px] lg:text-[30px] tracking-widestt">S A N J A Y &nbsp; K U M A R</h1>

              <h1 className="text-[30px] sm:text-[23px] md:text-[40px] lg:text-[70px] text-black font-black text-center md:text-start whitespace-nowrap">Full Stack Developer</h1>
              <p className='text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-[rgb(96,93,93)] lg:text-start'>
                Hi! I’am Sanjay Kumar, A junior fullstack developer specializing in modern Web Development. Passionate about building scalable, user-friendly web applications and exploring new technologies and a proud member of the developer community.
              </p>

              <div className="button flex mt-5 space-x-5">
                <div className="">
                  <button
                    className='bg-[rgb(34,59,79)] ml-10 md:ml-0 lg:ml-0 border-2 border-[#E0E0DF] rounded-[15px] text-[rgb(218,218,218)] px-6 py-2 text-lg hover:text-[rgb(34,59,79)] hover:bg-[#E0E0DF] hover:border-[rgb(34,59,79)] transition duration-300'
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

                <button
                  className='bg-[#E0E0DF] ml-10 md:ml-0 lg:ml-0 border-2 border-[rgb(34,59,79)] rounded-[15px] text-[rgb(34,59,79)] px-6 py-2 text-lg hover:text-[rgb(218,218,218)] hover:bg-[rgb(34,59,79)] hover:border-[rgb(34,59,79)] transition duration-300'
                  onClick={() => window.location.href = "#contact"}>Contact</button>
                {/* </div> */}
              </div>
            </Col>

            <Col
              xs={{ order: 1, span: 12 }}
              md={{ span: 3, order: 2 }} className="md:ml-10 flex items-center justify-center">
              <img
                className="w-[200px] h-[200px] lg:w-4/5 lg:h-1/2 md:w-1/3 md:h-[60%]
                                  aspect-square object-cover grayscale hover:grayscale-0 transition duration-400
                                  rounded-full md:rounded-1/2"
                src={MainPic}
                alt="Profile"
              />
            </Col>
          </Row>
        </div>



        <div id="about" className="page-section">

          <Row className="h-screen flex flex-col gap-0 justify-between-0 md:flex items-center justify-center">

            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, order: 2 }}
              className="flex items-center justify-center p-0"
            >
              <div className="relative w-[80%] md:w-full flex justify-center">
                <img
                  className="w-full md:w-3/4 h-screen max-h-[50vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400"
                  src={Ocean3}
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
              className="lg:ml-[200px]  md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6"
            >
              <h1 className="hidden md:block lg:text-[100px] md:text-[70px] text-black font-bold whitespace-nowrap offset-underline">
                About Me
              </h1>

              <p className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] ml-10 md:ml-0 lg:ml-0 text-[rgb(96,93,93)] lg:text-start'>
                A brief introduction about me and my interests as a software engineer.
              </p>

              <button
                onClick={() => navigate('/about', { state: { fromSection: 'about' } })}
                className='bg-[rgb(34,59,79)] ml-10 md:ml-0 lg:ml-0 border-2 border-[#E0E0DF] rounded-[15px] text-[rgb(218,218,218)] px-6 py-2 text-lg hover:text-[rgb(34,59,79)] hover:bg-[#E0E0DF] hover:border-[rgb(34,59,79)] transition duration-300'
              >
                Learn more
              </button>
            </Col>

          </Row>
        </div>
        <div id="projects" className="page-section">

          <Row className="h-screen flex flex-col md:flex items-center justify-center">

            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, order: 2 }}
              className="flex items-center justify-center p-0"
            >
              <div className="relative w-[80%] md:w-full flex justify-center">
                <img
                  className="w-full md:w-3/4 h-screen max-h-[50vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400"
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
              className="lg:ml-[200px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6"
            >
              <h1 className="hidden md:block lg:text-[100px] md:text-[70px] text-black font-bold whitespace-nowrap offset-underline">
                My Projects
              </h1>

              <p className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] ml-10 md:ml-0 lg:ml-0 text-[rgb(96,93,93)] lg:text-start'>
                These are some of the projects that i have done and currently working on.
              </p>

              <button
                onClick={() => navigate('/projects', { state: { fromSection: 'projects' } })}
                className='bg-[rgb(34,59,79)] ml-10 md:ml-0 lg:ml-0 border-2 border-[#E0E0DF] rounded-[15px] text-[rgb(218,218,218)] px-6 py-2 text-lg hover:text-[rgb(34,59,79)] hover:bg-[#E0E0DF] hover:border-[rgb(34,59,79)] transition duration-300'

              >
                Learn more
              </button>
            </Col>

          </Row>

        </div>



        <div id="contact" className="page-section">
          <Row className="h-screen flex flex-col md:flex items-center justify-center">

            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, order: 2 }}
              className="flex items-center justify-center p-0"
            >
              <div className="relative w-[80%] md:w-full flex justify-center">
                <img
                  className="w-full md:w-3/4 h-screen max-h-[50vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400"
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
              className="lg:ml-[200px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6"
            >
              <h1 className="hidden md:block lg:text-[100px] md:text-[70px] text-black font-bold whitespace-nowrap offset-underline">
                Get in Touch
              </h1>

              <p className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] ml-10 md:ml-0 lg:ml-0 text-[rgb(96,93,93)] lg:text-start'>
                Feel free to contact me if you want to ask something or just to say hi.
              </p>

              <a
                href="mailto:ask4kumar07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] ml-10 md:ml-0 lg:ml-0 text-[rgb(96,93,93)] lg:text-start no-underline"
              >
                ask4kumar07@gmail.com
              </a>

              <div className='flex ml-10 lg:ml-0 space-x-8'>
                <a
                  href="https://github.com/Sanjay07Kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/sanjay-kumar-1820t1820/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/k_umar_04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"
                >
                  <FaInstagram />
                </a>

                <a
                  href="mailto:ask4kumar07@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(34,59,79)] text-4xl md:text-5xl hover:scale-110 transition-transform"
                >
                  <FaEnvelope />
                </a>
              </div>
            </Col>

          </Row>

        </div>
      </Container>
    </div>
  );
};
export default MainPage;
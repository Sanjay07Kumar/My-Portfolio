
import HomePic from './Assets/road-pic.jpg';
// import AboutPic from './Assets/about-pic.jpg';

import Estate from './Assets/meinestate.jpg';
import ProjectPic from './Assets/project-pic.jpg';

import ContactPic from './Assets/contact-pic.jpg';
import '../App.css';
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
            <div className='scroll-container'>
            <Container style={{ maxWidth: '100%' }}>
            <div id="home"className='page-section'>
              <Row className="home-top2">
               
                  <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }} className="home-text">
                    {/* <div className="row-1-content"> */}
                      <h1 className="name">S&nbsp;&nbsp;A&nbsp;&nbsp;N&nbsp;&nbsp;J&nbsp;&nbsp;A&nbsp;&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;K&nbsp;&nbsp;U&nbsp;&nbsp;M&nbsp;&nbsp;A&nbsp;&nbsp;R</h1>
                  
                      <p className="role">Full Stack Developer</p>
                      <p className='pppp'>
                        Hi! I’am Sanjay Kumar, A junior fullstack developer specializing in modern Web Development. Passionate about building scalable, user-friendly web applications and exploring new technologies and a proud member of the developer community.
                      </p>
                
                      <div className="button flex space-x-4">
                          <div className="">
                            <button 
                              className="button-resume"
                              onClick={() => {
                                const link = document.createElement("a");
                                link.href = Resume; // imported file
                                link.download = "Sanjay_Kumar_CV.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              Resume
                            </button>
                          </div>

                          <button className="button-contact" 
                          onClick={() => window.location.href="#contact"}>Contact</button>
                      {/* </div> */}
                      </div>
                  </Col>

                  <Col xs={{ order: 1 }} md={{ span: 4, order: 2 }} className="d-flex home-image justify-content-center align-items-center">
                      <img className="home-pic" src={HomePic} alt="Profile" />
                  </Col>
              </Row>
              </div>



              {/* </div> */}
              <hr></hr>
              <div id="about" className="page-section">

                  <Row className="about-sec">

                  
                      <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }} className="about-left">
                          <h1 className="about-h offset-underline">About Me</h1>

                          <p className="about-p">A brief introduction about me and my interest.</p>
                          <button onClick={() => navigate('/about', { state: { fromSection: 'about' } })} className="button-learn-more" >Learn more</button>
                      </Col>

                      <Col xs={{ order: 1 }} md={{ span:4, order: 2 }} className="about-right">
                          <img className="about-pic" src={Estate} alt="Profile"/>
                      </Col>

                  
                  </Row>

              </div>
              <hr></hr>
              <div id="projects" className="page-section">
                
                  <Row className="project-sec">


                     <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }}className="project-left">
                          <h1 className="project-h offset-underline">My Projects</h1>
                          <p className="project-p">These are some of the projects that i have done and currently working on.</p>
                          <button className="button-learn-more" onClick={() => navigate('/projects', { state: { fromSection: 'projects' } })}>Learn more</button>
                      </Col>

                      <Col xs={{ order: 1 }} md={{ span:4, order: 2 }} className="project-right">
                          <img className="project-pic" src={ProjectPic} alt="Profile"/>
                      </Col>
                     
                      
                  </Row>
                  
              </div>


              <hr></hr>
              <div id="contact" className="page-section">
                
                  <Row className="contact-sec" >

                    <Col xs={{ order: 1 }} md={{ span:4, order: 1 }} className="contact-left">
                          <img className="contact-pic" src={ContactPic} alt="Profile"/>
                      </Col>

                     <Col xs={{ order: 2 }} md={{ span: 6, order: 2 }} className="contact-right">
                          <h1 className="contact-h offset-underline">Contact me</h1>
                          <p className="contact-p">Feel free to contact me if you want to ask something or just to say hi.</p>
                          <a href="mailto.ask4kumar07@gmail.com" className="mail">ask4kumar07@gmail.com</a>
                          <div className='flex space-x-8'>
                          
                          <a href="https://github.com/Sanjay07Kumar" className="contact-icons"><FaGithub/></a>
                          <a href="https://www.linkedin.com/in/sanjay-kumar-1820t1820/" className="contact-icons"><FaLinkedin/></a>
                          <a href="https://www.instagram.com/k_umar_04/" className="contact-icons"><FaInstagram/></a>
                          <a href="mailto:ask4kumar07@gmail.com" className="contact-icons"><FaEnvelope/></a>
                          </div>
                      </Col>

                  </Row>
                
              </div>
            </Container>
    </div>
  );
};
export default MainPage;

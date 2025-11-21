// import Header from './Header'; // path may vary
import BackButton from './BackButton';
import AboutSectionPic from './Assets/about-pic.jpg';

import AboutSectionPic1 from './Assets/about-picc1.jpg';
import AboutSectionPic2 from './Assets/about-picc2.jpg';
import AboutSectionPic3 from './Assets/about-picc3.jpg';

import Ocean1 from './Assets/ocean1.jpg';
import Ocean2 from './Assets/ocean2.jpg';
import Ocean3 from './Assets/ocean3.jpg';

import Estate from './Assets/meinestate.jpg';
// import AboutPi1 from './Assets/about-pi1.jpg';

// import AboutPi2 from './Assets/about-pi2.jpg';
// import { motion } from "framer-motion";


// import AboutPi3 from './Assets/about-pi3.jpg';
import {Container,Row,Col} from "react-bootstrap";
import { Brain, Server,Medal,Trophy,Award, Smartphone, ArrowBigRight } from "lucide-react";
import { FaLaptopCode} from "react-icons/fa";
import { useState } from "react";
// import { motion } from "framer-motion";

const About = () => {
  const [activeSkill, setActiveSkill] = useState("web");
  return (
    
    <>
      {/* <Header /> */}
      <Container  style={{ maxWidth: '100%'}} className='about-container'>
        <BackButton />
        {/* About page content */}
        <Row className=' block justify-center items-center flex gap-0 h-100vh '>
          
          <Col xs={{ order: 2 }} md={{ span: 5, order: 1 }} className='about-row1-left'>
            <h1 className='font-[1000] text-black text-[140px] text-jost offset-underline ml-[120px] whitespace-nowrap'>About Me</h1>
            <p className="pt-[50px] text-[30px] ml-[120px] whitespace-nowrap text-[rgb(34,59,79)]">A brief introduction about me and my interest.</p>
            <button className='button-scroll-down ml-[120px] mt-4'
            onClick={() => window.scrollBy({
              top:window.innerHeight,
              left:0,
              behavior:'smooth'
            })}>Scroll Down</button>
          </Col>

          <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} className='about-row1-right'>
            <img className='about-sec-pic w-[100%] h-screen ml-[80px] grayscale transition ease-in-out hover:grayscale-0 object-cover' src={Estate} alt=""></img>
          </Col>
 
        </Row>

        
        <Row className=" about-row2">
          
          <h2 className='offset-underline about-row2-h2'>Who Am I?</h2>
          <Col xs={{ order: 2 }} md={{ span: 5, order: 1 }} className='flex about-row2-left'>
            
            <img className='about-row2-pic' src={AboutSectionPic} 
            alt="about-sec-pics"></img>
            <img className='about-row2-pic' src={Estate} 
            alt="about-sec-pics"></img>
            <img className='about-row2-pic' src={AboutSectionPic2} 
            alt="about-sec-pics"></img>
            <img className='about-row2-pic' src={AboutSectionPic1} 
            alt="about-sec-pics"></img>
            <img className='about-row2-pic' src={Ocean3} 
            alt="about-sec-pics"></img>
          </Col>

        
          <Col xs={{ order: 1 }} md={{ span: 5, order: 2 }} className='about-row2-right'>
            <h3>Sanjay Kumar</h3>
            <p>I’m Sanjay Kumar, a <span className='p-contents'>passionate Web Developer</span> from Coimbatore, Tamil Nadu, currently pursuing my degree in <span className='p-contents'>Computer Science</span> at <span className='p-contents'>Sri Krishna College of Engineering and Technology</span>, India. My work focuses on building responsive, scalable, and user-friendly websites, while I also dedicate time to practicing problem-solving and enhancing my coding skills. Alongside web development, I am deeply curious about design trends and emerging technologies in today’s fast-changing digital landscape. I believe that being a <span className='p-contents'>lifelong learner</span> is essential to growth, and I’m eager to connect, collaborate, and contribute to innovative projects at the intersection of web development, intelligent systems, and <span className='p-contents'>problem-solving</span> excellence.</p>
          </Col>
        </Row>

        
        <Row className='about-row3'>
          <h1>Skills & Expertise</h1>
          <p>Explore my technical skills across different domains. Click on any category to see the specific technologies and tools I work with.</p>
        </Row>          

        <div className='skills-buttons '>

          <button className={`skill-button ${activeSkill==="web" ? "active":""}`} onClick={() => setActiveSkill("web")}>
            <FaLaptopCode className="skill-button-icons bg-[#e1e1e1] justify-self-center rounded-[10px] mb-4" size={40} ></FaLaptopCode>
            <h3>Web development</h3>
            <p>Building modern, responsive web applications.</p>
          </button>

          <button className={`skill-button ${activeSkill==="api" ? "active":""}`} onClick={() => setActiveSkill("api")}>
            <Server className="skill-button-icons justify-self-center rounded-[10px] mb-4" size={40}></Server>
            <h3>REST API</h3>
            <p>Creating robust and scalable backend services.</p>
          </button>

          <button className={`skill-button ${activeSkill==="problem" ? "active":""}`} onClick={() => setActiveSkill("problem")}>
            <Brain className="skill-button-icons bg-[#e1e1e1] justify-self-center rounded-[10px] mb-4" size={40}></Brain>
            <h3>Problem Solving</h3>
            <p>Solving complex problems, improving skills.</p>
          </button>
          
          <button className={`skill-button ${activeSkill==="mobile" ? "active":""}`} onClick={() => setActiveSkill("mobile")}>
            <Smartphone className="skill-button-icons bg-[#e1e1e1] justify-self-center rounded-[10px] mb-4" size={40}></Smartphone>
            <h3>Mobile Development</h3>
            <p>Cross-platform mobile app development</p>
          </button>
        </div>        

        <div className='skill-langs-frames'>
          <h1>Languages & Frameworks</h1>
           <div className='activeskillss'>
              {activeSkill === "web" && (
                <ul className='lang-frame-sections'>
                  <button className='lang-fras'>HTML</button>
                  <button className='lang-fras'>CSS</button>
                  <button className='lang-fras'>JavaScript</button>
                  <button className='lang-fras'>React.js</button>
                  <button className='lang-fras'>TailwindCSS</button>
                  <button className='lang-fras'>Bootstrap</button>
                </ul>
          
              )}
              {activeSkill === "api" && (
                <ul className='lang-frame-sections'>
                  <button className='lang-fras'>Node.js</button>
                  <button className='lang-fras'>Spring Boot</button>
                  <button className='lang-fras'>MySQL</button>
                  <button className='lang-fras'>PostGresSQL</button>
                </ul>
              )}
              {activeSkill === "problem" && (
                <ul className='lang-frame-sections'>
                  <button className='lang-fras'>C++</button>
                  <button className='lang-fras'>Java</button>
                  <button className='lang-fras'>Data Structures and Algorithms</button>  
               </ul>
              )}
              {activeSkill === "mobile" && (
                <ul className='lang-frame-sections'>
                  <button className='lang-fras'>React Native</button>
                </ul>
              )}
          </div>
        </div>   

        <div className='skill-tools-techs'>
          <h1>Tools & Technologies</h1>
          <div className='activetoolss'>
            {activeSkill === "web" && (
              
              <ul className='tool-tech-sections'>
                <button className='tool-techs'>Visual Studio Code</button>
                <button className='tool-techs'>Git</button>
                <button className='tool-techs'>Github</button>
                <button className='tool-techs'>Vite</button>
                <button className='tool-techs'>Postman</button>
              </ul>
            )}
            {activeSkill === "api" && (
              <ul className='tool-tech-sections'>
                <button className='tool-techs'>Postman</button>
                <button className='tool-techs'>Visual Studio Code</button>
                <button className='tool-techs'>MySQL</button>
                <button className='tool-techs'>Git</button>
                <button className='tool-techs'>Github</button>
              </ul>
            )}
            {activeSkill === "problem" && (
              <ul className='tool-tech-sections'>
                <button className='tool-techs'>LeetCode</button>
                <button className='tool-techs'>Visual Studio Code</button>
                <button className='tool-techs'>Geeks for Geeks</button>
              </ul>
            )}
            {activeSkill === "mobile" && (
              <ul className='tool-tech-sections'>
                <button className='tool-techs'>Android Studio</button>
              </ul>
            )}
          </div>
        </div>

        <div className='about-education flex flex-col justify-self-center bg-[#e6e6e6] mt-12 rounded-[30px] w-[95%] h-auto gap-20 pb-20'>
          <div>
            <h1 className='text-center font-jost font-semibold text-[60px] text-black pt-5'>Education</h1>
            <p className='text-center font-jost text-grey text-[28px]'>Get to know of my education and my achievements.</p>
          </div>
          <Row className=''>
            

            <Col className='education-left flex flex-col gap-10'>
              <div className='ml-[50px] '>
              <h2 className='font-normal text-[25px] '>2025</h2>
              <h1 className='text-[30px]'>Sri Krishna College of Engineering and Technology</h1>
              <h2 className='font-normal text-[25px]'>3rd | Computer Science and Engineering</h2>
              </div>
              <div className="relative ml-[100px] mt-[20px] w-[600px] h-[650px] " >

                <img className="absolute top-[90px] left-0 w-[300px] h-[320px] grayscale hover:grayscale-0 object-cover"src={Ocean1} alt="EducationPic" ></img>

                <img className="absolute  top-5 left-[260px] w-[220px] h-[220px] grayscale hover:grayscale-0 object-cover"src={Ocean2} alt="EducationPic" ></img>

                <img className="absolute top-[315px] left-[240px]  w-[260px] h-[260px] grayscale hover:grayscale-0 object-cover"src={Ocean3} alt="EducationPic" ></img>

              </div>
              <div className="w-[80%]  flex mx-auto items-center">
                <h1 className="italic text-3xl ml-10">
                  “Code is more than logic—
                  <br />
                  <br/>
                  <span className="italic block ml-24">it’s imagination brought to life.”</span>
                </h1>
              </div>


              
              
              
            </Col>
             
            <Col className='flex flex-col gap-20'>
              
              {/* <br></br>  */}
              
              <div className='flex flex-col gap-10'>
                <div className='mb-10 ml-[50px]'>
                  <h1 className='text-[30px]  '>Achievements</h1>
                  <h2 className='font-normal text-[25px] '>Some of my achievements </h2>
                </div>
                <div className='flex mx-auto w-[70%] rounded-5 bg-[rgba(221,220,220,1)] shadow group'>
                  <div className=' h-[100%] w-[20%] flex items-center justify-center'>
                  <div className='h-16 w-16 flex  items-center justify-self-center justify-center rounded-full bg-[rgba(228,223,223,1)] shadow transition-transform duration-300 ease-in-out over:scale-105 hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-yellow-400  transition ease-in-ease-out-300'>
                    <Medal className='w-8 h-8'/>
                  </div>
                  </div>
                  <div className=' my-auto h-[80%] w-[70%] items-center'>
                    <h1 className='flex items-center text-[25px] font-bold '>Problem Solving</h1>
                    <h2 className='flex items-center text-[20px] font-normal '>Solved 150+ DSA problems in Leetcode, improving problem solving.</h2>
                    <p className='flex items-center text-[15px] font-small '>Present</p>
                  </div>
                </div>

                <div className='flex mx-auto w-[70%]  rounded-5 bg-[rgba(221,220,220,1)] shadow group'>
                  <div className=' h-[100%] w-[20%] flex items-center justify-center'>
                  <div className='h-16 w-16 flex  items-center justify-self-center justify-center rounded-full bg-[rgba(228,223,223,1)] shadow transition-transform duration-300 ease-in-out over:scale-105 hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-blue-400 transition'>
                    <Award className='w-8 h-8'/>
                  </div>
                  </div>
                  <div className='my-auto h-[80%] w-[70%] items-center'>
                    <h1 className='flex items-center text-[25px] font-bold '>Projects</h1>
                    <h2 className='flex items-center text-[20px] font-normal '>Developed full-stack applications following clean architecture.</h2>
                    <p className='flex items-center text-[15px] font-small '>Present</p>
                  </div>
                </div>

                <div className='flex mx-auto w-[70%] rounded-5 bg-[rgba(221,220,220,1)] shadow group'>
                  <div className=' h-[100%] w-[20%] flex items-center justify-center'>
                  <div className='h-16 w-16 flex  items-center justify-self-center justify-center rounded-full bg-[rgba(228,223,223,1)] shadow transition-transform duration-3000 ease-in-out over:scale-1050 group-hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-green-400 transition'>
                    <Trophy className='w-8 h-8'/>
                  </div>
                  </div>
                  <div className=' my-auto h-[80%] w-[80%] items-center'>
                    <h1 className='flex items-center text-[25px] font-bold '>Testing</h1>
                    <h2 className='flex items-center text-[20px] font-normal '>Hands-on experience in Selenium Automation, writing test scripts for UI testing</h2>
                    <p className='flex items-center text-[15px] font-small '>Present</p>
                  </div>
                </div>
              </div>

              <div className='w-[90%] mx-auto flex flex-col gap-10'>
                <p className='w-[90%] mx-auto my-auto text-[23px] text-[rgb(93,93,93)] leading-relaxed'>I believe technology is not just about writing code, but about solving problems, creating meaningful experiences, and shaping the future. Every project I work on is a reflection of my curiosity, dedication, and drive to learn. For me, being a developer means constantly evolving—embracing challenges, turning ideas into solutions, and leaving a lasting impact through innovation.</p>

                <p className='w-[90%] mx-auto my-auto text-[23px] text-[rgb(93,93,93)] leading-relaxed'>Technology to me is more than a skillset—it’s a mindset. I believe in building solutions that are reliable, scalable, and impactful. Every line of code is an opportunity to simplify complexity, every project a chance to create value. As a developer, my goal is to merge creativity with logic, delivering software that not only works but inspires confidence and drives progress.</p>

                <div className="node top-[0px]"></div>
              <div className="node top-[100%]"></div>
              </div>

              
            </Col>

            
          </Row>
          {/* <Row className=''>
            <Col className='education-left border-r-5  border-black flex flex-col gap-20'>
              <div className='w-[90%] ml-[50px]'>
                <h1 className='text-[50px] mt-[8px] '>Other Skills</h1>
                <h2 className='font-normal text-[25px] mb-10 '>Selenium Automation</h2>
                <p className='text-[25px] text-[rgb(93,93,93)]'>I have practical experience in Selenium automation, where I’ve written test scripts to automate user flows, validate UI components, and ensure higher reliability of web applications. This experience has strengthened my analytical thinking and attention to detail.</p>
                
                <br></br>

                <h2 className='font-normal text-[25px] mb-10 '>Linux Administration</h2>
                <p className='text-[25px] text-[rgb(93,93,93)]'>I am comfortable working in Linux environments and have developed solid skills in system administration, including file management, shell commands, user and permission handling, process monitoring, and package management. I enjoy using the terminal to troubleshoot issues, configure environments, and automate tasks through basic scripting. Working with Linux has improved my understanding of how systems function internally and has helped me become more confident in managing servers and development environments.</p>
              
              </div>
            </Col>
            
            <Col>
              <div className="node top-[0px]"></div>
              <div className="node top-[100%]"></div>
              </Col>
          </Row> */}

          
        </div>

        <div className="flex items-center justify-center  h-[100vh]">
          <h1 className="text-[40px] text-center text-black italic font-normal w-[60%] mx-auto leading-snug">
            “Problems exist so solutions can be created, not avoided.”
          </h1>
        </div>

        <footer className="flex flex-col items-center justify-center py-20 ">
          <div className="flex items-center gap-4 ">
            <a href="/#contact" className="text-black font-bold flex text-[90px] no-underline hover:underline">
              Contact Me Here
              <ArrowBigRight className="text-black w-16 h-16 ml-4 mt-[45px]" />
            </a>
            
          </div>

          <hr className="h-1 bg-black border-0 my-4 w-[70%]" />

          <p className="text-gray-500 text-2xl mt-2 mb-2">
            &copy; {new Date().getFullYear()} Sanjay Kumar. All rights reserved.
          </p>
        </footer>

 
      </Container>
    </>
  );
};

export default About;
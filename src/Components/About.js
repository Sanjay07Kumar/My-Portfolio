import BackButton from './BackButton';

import AboutSectionPic1 from './Assets/about-section-picc.jpg';
import AboutSectionPic2 from './Assets/about-section-pi.jpg';
import AboutSectionPic3 from './Assets/about-section-pic.jpg';

import Ocean1 from './Assets/ocean1.jpg';
import Ocean2 from './Assets/ocean2.jpg';
import Ocean3 from './Assets/ocean3.jpg';

import Estate from './Assets/meinestate.jpg';
import {Container,Row,Col} from "react-bootstrap";
import { Brain, Server,Medal,Trophy,Award, Smartphone} from "lucide-react";
import { FaLaptopCode} from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [activeSkill, setActiveSkill] = useState("web");
  return (
    
    <>
      <Container  style={{ maxWidth: '100%'}} className="about-container">
        <BackButton />

      <div className='page-section'>

        <Row className='h-screen flex flex-col md:flex items-center justify-center'>
          

          <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} 
            className='flex items-center justify-center p-0'>
            <div className="relative w-full md:w-full flex justify-center">
                      
              <img 
                className="w-full h-screen max-h-[60vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400" 
                src={Estate} 
                alt="Profile"
              />

              <h1 className="
                absolute ml-10 bottom-4 left-0 bg-white/90 px-4 py-1 
                md:hidden 
                text-[40px] font-black text-black whitespace-nowrap">
                About me
              </h1>

            </div>
          </Col>

          <Col 
            xs={{ order: 2 }} 
            md={{ span: 5, order: 1 }} 
            className='lg:ml-[150px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6'
          >
            <h1 className='hidden md:block lg:text-[120px] md:text-[70px] text-black font-black whitespace-nowrap offset-underline'>
              About Me
            </h1>

            <p className='text-[rgb(96,93,93)] ml-10 lg:ml-0 text-[18px] md:text-[22px] text-left max-w-[85%] md:max-w-none'>
              A brief introduction about me and my interest.
            </p>

            <button 
              className='w-fit bg-[rgb(34,59,79)] ml-10 lg:ml-0 border rounded-[20px] text-white text-xl md:text-2xl px-6 py-2 shadow-md'
              onClick={() => window.scrollBy({
                top:window.innerHeight,
                left:0,
                behavior:'smooth'
              })}>
                Scroll Down
              </button>
          </Col>
 
        </Row>
      </div>

      <div className='md:mt-10 md:mb-10 w-[85%] flex   mx-auto items-center'>
        <Row className="w-full">
          
          <h1 className='ml-0 sm:ml-0 md:ml-10 lg:ml-10 font-bold  text-black text-[20px]  md:text-[40px] lg:text-[40px] offset-underline mt-0'>Who Am I?</h1>
          <Col xs={{ order: 1 }} md={{ span: 5, order: 1 }} 
            
            className='flex '>
            <div className="relative
              mt-0
                md:mt-5
                w-full
                md:w-[600px]
                h-[200px]
                md:h-[650px]

                /* positioning */
                ml-0 md:ml-[100px]
                mt-0
                mb-10

                /* scaling */
                scale-[0.4]
                sm:scale-[0.8]
                md:scale-100

                /* center on mobile */
                origin-top
                mx-auto md:mx-0"
              >
                <img className="absolute top-[90px] left-0 w-[300px] h-[320px] grayscale hover:grayscale-0 object-cover"src={AboutSectionPic3} alt="EducationPic" ></img>

                  <img className="absolute  top-5 left-[260px] w-[220px] h-[220px] grayscale hover:grayscale-0 object-cover"src={AboutSectionPic2} alt="EducationPic" ></img>

                  <img className="absolute top-[315px] left-[240px]  w-[260px] h-[260px] grayscale hover:grayscale-0 object-cover"src={AboutSectionPic1} alt="EducationPic" ></img>

            </div>
          </Col>

        
          <Col xs={{ order: 2 }} md={{ span: 7, order: 2 }} 
            className='text-left sm:text-center md:text-left'>
            <h2 className='text-black font-bold mb-4 text-[14px] md:text-[40px] lg:text-[40px]'>S A N J A Y&nbsp; &nbsp;K U M A R</h2>
            <p className='text-[rgb(96,93,93)] text-[12px] md:text-[27px] lg:text-[25px]'>A <span className='text-black font-semibold'>passionate Web Developer</span> from Coimbatore, Tamil Nadu, currently pursuing my degree in <span className='text-black font-semibold'>Computer Science</span> at <span className='text-black font-semibold'>Sri Krishna College of Engineering and Technology</span>, India. My work focuses on building responsive, scalable, and user-friendly websites, while I also dedicate time to practicing problem-solving and enhancing my coding skills. Alongside web development, I am deeply curious about design trends and emerging technologies in today’s fast-changing digital landscape. I believe that being a <span className='text-black font-semibold'>lifelong learner</span> is essential to growth, and I’m eager to connect, collaborate, and contribute to innovative projects at the intersection of web development, intelligent systems, and <span className='text-black font-semibold'>problem-solving</span> excellence.</p>
          </Col>
        </Row>
      </div>
      
      <div className='space-y-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center font-jost font-semibold text-[20px] md:text-[60px] lg:text-[60px] text-black pt-5'>
              Skills & Expertise
            </h1>
            <p className='text-center font-jost text-grey md:w-1/2 text-[12px] md:text-[28px]'>
              Explore my technical skills across different domains. Click on any category to see the specific technologies and tools I work with.
            </p>
        </div> 


        <div
          className="
            grid grid-cols-2
            md:grid-cols-4
            gap-3 md:gap-5
            justify-center
          "
        >
          {/* WEB */}
          <button
            className={`
              ${activeSkill === "web" ? "active" : ""}
              bg-[rgba(233,232,232,1)]
              border-2 border-black rounded-[16px]
              p-3 sm:p-4 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
            onClick={() => setActiveSkill("web")}
          >
            <FaLaptopCode className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2" />
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
              Web Development
            </h3>
            <p className="text-xs sm:text-sm md:text-lg">
              Building modern, responsive web applications.
            </p>
          </button>

          {/* API */}
          <button
            className={`
              ${activeSkill === "api" ? "active" : ""}
              bg-[rgba(233,232,232,1)]
              border-2 border-black rounded-[16px]
              p-3 sm:p-4 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
            onClick={() => setActiveSkill("api")}
          >
            <Server className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2" />
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
              REST API
            </h3>
            <p className="text-xs sm:text-sm md:text-lg">
              Creating robust and scalable backend services.
            </p>
          </button>

          <button
            className={`
              ${activeSkill === "problem" ? "active" : ""}
              bg-[rgba(233,232,232,1)]
              border-2 border-black rounded-[16px]
              p-3 sm:p-4 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
            onClick={() => setActiveSkill("problem")}
          >
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2" />
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
              Problem Solving
            </h3>
            <p className="text-xs sm:text-sm md:text-lg">
              Solving complex problems, improving skills.
            </p>
          </button>

          {/* MOBILE */}
          <button
            className={`
              ${activeSkill === "mobile" ? "active" : ""}
              bg-[rgba(233,232,232,1)]
              border-2 border-black rounded-[16px]
              p-3 sm:p-4 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
            onClick={() => setActiveSkill("mobile")}
          >
            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2" />
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
              Mobile Development
            </h3>
            <p className="text-xs sm:text-sm md:text-lg">
              Developing suitable mobile applications.
            </p>
          </button>
        </div>
      

        <div className='flex flex-col justify-self-center bg-[#e6e6e6] rounded-[30px] w-[95%] h-auto gap-10 py-5'>
          <h1 className='text-center font-jost font-semibold text-[20px] md:text-[40px] lg:text-[40px] text-black'>Languages & Frameworks</h1>
           <div className="flex justify-center items-center w-full ">
            {/* WEB */}
            {activeSkill === "web" && (
              <ul
                className="
                  flex flex-wrap justify-center
                  gap-2 sm:gap-3 md:gap-4
                  max-w-full
                "
              >
                {[
                  "HTML","CSS","JavaScript","React.js","TailwindCSS","Bootstrap",].map((skill) => (
                  <li key={skill}>
                    <button className="pill-button">{skill}</button>
                  </li>
                ))}
              </ul>
            )}

            {/* API */}
            {activeSkill === "api" && (
              <ul
                className="
                  flex flex-wrap justify-center
                  gap-2 sm:gap-3 md:gap-4
                  max-w-full
                "
              >
                {["Node.js", "Spring Boot", "MySQL", "PostgreSQL"].map((skill) => (
                  <li key={skill}>
                    <button className="pill-button">{skill}</button>
                  </li>
                ))}
              </ul>
            )}

            {/* PROBLEM SOLVING */}
            {activeSkill === "problem" && (
              <ul
                className="
                  flex flex-wrap justify-center
                  gap-2 sm:gap-3 md:gap-4
                  max-w-full
                "
              >
                {["C++", "Java", "Data Structures & Algorithms"].map((skill) => (
                  <li key={skill}>
                    <button className="pill-button">{skill}</button>
                  </li>
                ))}
              </ul>
            )}

            {/* MOBILE */}
            {activeSkill === "mobile" && (
              <ul className="flex flex-wrap justify-center
                  gap-2 sm:gap-3 md:gap-4
                  max-w-full
                "
              >
                {["React Native"].map((skill) => (
                <li key={skill} >
                  <button className="pill-button">{skill}</button>
                </li>
                ))}
              </ul>
            )}
          </div>

        </div>   

        <div className='flex flex-col justify-self-center bg-[#e6e6e6] rounded-[30px] w-[95%] h-auto gap-10 py-5'>
          <h1 className='text-center font-jost font-semibold text-[20px] md:text-[40px] lg:text-[40px] text-black'>Tools & Technologies</h1>
          <div className="flex justify-center items-center w-full ">
            {activeSkill === "web" && (
              
              <ul className='flex flex-wrap justify-center
                gap-2 sm:gap:3 md:gap-4
                max-w-full'
              >
                {["Visual Studio Code" ,"Git" ,"Github", "Vite", "Postman"].map((tool) => (
                <li key={tool}>
                  <button className='pill-button'>{tool}</button>
                </li>
                ))}
              </ul>
            )}
            {activeSkill === "api" && (
              <ul className='flex flex-wrap justify-center
                gap-2 sm:gap:3 md:gap-4
                max-w-full'
              >
                {["Postman" ,"Visual Studio Code" ,"MySQL", "Git", "Github"].map((tool) => (
                <li key={tool}>
                  <button className='pill-button'>{tool}</button>
                </li>
                ))}
              </ul>
            )}
            {activeSkill === "problem" && (
              <ul className='flex flex-wrap justify-center
                gap-2 sm:gap:3 md:gap-4
                max-w-full'
              >
                {["LeetCode" ,"Visual Studio Code" ,"Geeks for Geeks"].map((tool) => (
                <li key={tool}>
                  <button className='pill-button'>{tool}</button>
                </li>
                ))}
              </ul>
            )}
            {activeSkill === "mobile" && (
              <ul className='flex flex-wrap justify-center
                gap-2 sm:gap:3 md:gap-4
                max-w-full'
              >
                {["Android Studio"].map((tool) => (
                <li key={tool}>
                  <button className='pill-button'>{tool}</button>
                </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

        <div className='flex flex-col justify-self-center bg-[#e6e6e6] rounded-[30px] w-[95%] h-auto gap-3 md:gap-10 pb-5 mt-10'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center font-jost font-semibold text-[22px] md:text-[60px] lg:text-[60px] text-black pt-5'>Education</h1>
            <p className='text-center font-jost text-grey md:w-1/2 text-[14px] md:text-[28px]'>Get to know of my education and my achievements.</p>
          </div>
          <Row className='flex flex-col md:flex-row'>
            

            <Col className='md:education-left lg:education-left  flex flex-col gap-10'>
              <div className='ml-[50px] '>
              <h2 className='font-normal text-[12px] md:text-[25px] '>2025</h2>
              <h1 className='text-[15px] md:text-[30px]'>Sri Krishna College of Engineering and Technology</h1>
              <h2 className='font-normal text-[12px] md:text-[25px]'>3rd | Computer Science and Engineering</h2>
              </div>
              <div 
                className="relative
                mt-0
                  md:mt-5
                  w-full
                  md:w-[600px]
                  h-[200px]
                  md:h-[650px]

                  /* positioning */
                  ml-0 md:ml-[100px]
                  mt-0
                  mb-10

                  /* scaling */
                  scale-[0.4]
                  sm:scale-[0.8]
                  md:scale-100

                  /* center on mobile */
                  origin-top
                  mx-auto md:mx-0" >

                <img className="absolute top-[90px] left-0 w-[300px] h-[320px] grayscale hover:grayscale-0 object-cover"src={Ocean1} alt="EducationPic" ></img>

                <img className="absolute  top-5 left-[260px] w-[220px] h-[220px] grayscale hover:grayscale-0 object-cover"src={Ocean2} alt="EducationPic" ></img>

                <img className="absolute top-[315px] left-[240px]  w-[260px] h-[260px] grayscale hover:grayscale-0 object-cover"src={Ocean3} alt="EducationPic" ></img>

              </div>
              <div className="w-[80%]  flex mx-auto items-center">
                <h1 className="italic text-[9px] md:text-3xl ml-10">
                  “Code is more than logic—
                  <br />
                  <br/>
                  <span className="italic block ml-14 md:ml-24">it’s imagination brought to life.”</span>
                </h1>
              </div>


              
              
              
            </Col>
             
            <Col className="flex flex-col">

              <div className="flex flex-col gap-2 ml-6 mt-10 md:mt-0">
                <h1 className="text-[18px] md:text-[30px] font-semibold">
                  Achievements
                </h1>
                <h2 className="text-[12px] md:text-[25px] font-normal text-gray-600">
                  Here are some of my achievements
                </h2>
              </div>

              <div className="flex flex-col gap-5 mt-6">

                <div className="
                  flex w-[90%] mx-auto
                  md:w-[70%] md:mx-auto
                  bg-[rgba(221,220,220,1)]
                  rounded-xl shadow
                  p-2 sm:p-3 md:p-6
                  group
                ">
                  <div className="w-[20%] flex items-center justify-center">
                    <div className="
                      h-8 w-8 md:h-16 md:w-16
                      flex items-center justify-center
                      rounded-full bg-[rgba(228,223,223,1)]
                      shadow

                      group-hover:bg-gradient-to-r
                      group-hover:from-gray-300
                      group-hover:to-orange-500
                      group-hover:via-yellow-300
                    ">
                      <Medal className="w-4 h-4 md:w-8 md:h-8" />
                    </div>
                  </div>

                  <div className="w-[80%]">
                    <h1 className="text-[12px] sm:text-base md:text-2xl font-bold">
                      Problem Solving
                    </h1>
                    <p className="text-[8px] sm:text-sm md:text-lg">
                      Solved 150+ DSA problems in Leetcode, improving problem solving.
                    </p>
                    <span className="text-[8px] sm:text-xs md:text-sm text-gray-500">
                      Present
                    </span>
                  </div>
                </div>

                <div className="
                  flex w-[90%] mx-auto
                  md:w-[70%] md:mx-auto
                  bg-[rgba(221,220,220,1)]
                  rounded-xl shadow
                  p-2 sm:p-3 md:p-6
                  group
                ">
                  <div className="w-[20%] flex items-center justify-center">
                    <div className="
                      h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16
                      flex items-center justify-center
                      rounded-full bg-[rgba(228,223,223,1)]
                      shadow

                      group-hover:bg-gradient-to-r
                      group-hover:from-gray-300
                      group-hover:to-red-500
                      group-hover:via-pink-400
                    ">
                      <Award className="w-4 h-4 md:w-8 md:h-8" />
                    </div>
                  </div>

                  <div className="w-[80%]">
                    <h1 className="text-[12px] sm:text-base md:text-2xl font-bold">
                      Projects
                    </h1>
                    <p className="text-[8px] sm:text-sm md:text-lg">
                      Developed full-stack applications following clean architecture.
                    </p>
                    <span className="text-[8px] sm:text-xs md:text-sm text-gray-500">
                      Present
                    </span>
                  </div>
                </div>

                <div className="
                  flex w-[90%] mx-auto
                  md:w-[70%] md:mx-auto
                  bg-[rgba(221,220,220,1)]
                  rounded-xl shadow
                  p-2 sm:p-3 md:p-6
                  group
                ">
                  <div className="w-[20%] flex items-center justify-center">
                    <div className="
                      h-8 w-8 md:h-16 md:w-16
                      flex items-center justify-center
                      rounded-full bg-[rgba(228,223,223,1)]
                      shadow
                      group-hover:bg-gradient-to-r
                      group-hover:from-gray-300
                      group-hover:to-green-600
                      group-hover:via-green-300
                    ">
                      <Trophy className="w-4 h-4 md:w-8 md:h-8" />
                    </div>
                  </div>

                  <div className="w-[80%]">
                    <h1 className="text-[12px] sm:text-base md:text-2xl font-bold">
                      Testing
                    </h1>
                    <p className="text-[8px] sm:text-sm md:text-lg">
                      Hands-on experience in Selenium Automation and UI testing.
                    </p>
                    <span className="text-[8px] sm:text-xs md:text-sm text-gray-500">
                      Present
                    </span>
                  </div>
                </div>

              </div>

              <div className="w-[90%] mx-auto mt-10 flex flex-col gap-6">
                <p className="text-[12px] md:text-[20px] text-[rgb(93,93,93)] leading-relaxed">
                  I believe technology is not just about writing code, but about solving
                  problems, creating meaningful experiences, and shaping the future.
                </p>

                <p className="text-[12px] md:text-[20px] text-[rgb(93,93,93)] leading-relaxed">
                  Technology to me is more than a skillset—it’s a mindset. My goal is to
                  build scalable, reliable, and impactful solutions.
                </p>
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

        <div className="flex items-center justify-center h-[30vh] md:h-[100vh] lg:h-[100vh]">
          <h1 className="text-[15px] md:text-[40px] md:text-[40px] text-center text-black italic font-normal w-[60%] mx-auto">
            “Problems exist so solutions can be created, not avoided.”
          </h1>
        </div>



        <footer className="flex flex-col items-center justify-center pt-20 pb-2">
          <div className="flex md:mt-5 items-center">
            
            <a href="/#contact" className="text-black font-bold flex text-[15px] md:text-[50px] no-underline hover:underline">
              Click here to Contact me 
            </a>
            
          </div>

          <hr className="h-1 bg-black border-0 md:my-4 w-[70%]"/>

          <p className="text-gray-500 text-[12px] md:text-2xl md:mt-2 md:mb-2">
            &copy; {new Date().getFullYear()} Sanjay Kumar. All rights reserved.
          </p>
        </footer>

 
      </Container>
    </>
  );
};
export default About;

















// import BackButton from './BackButton';
// import AboutSectionPic1 from './Assets/about-picc1.jpg';
// import AboutSectionPic2 from './Assets/about-picc2.HEIC';
// import Ocean1 from './Assets/ocean1.jpg';
// import Ocean2 from './Assets/ocean2.jpg';
// import Ocean3 from './Assets/ocean3.jpg';
// import Estate from './Assets/meinestate.jpg';
// import { Container, Row, Col } from "react-bootstrap";
// import { Brain, Server, Medal, Trophy, Award, Smartphone, ArrowBigRight } from "lucide-react";
// import { FaLaptopCode } from "react-icons/fa";
// import { useState } from "react";

// const About = () => {
//   const [activeSkill, setActiveSkill] = useState("web");

//   return (
//     <>
//       <Container style={{ maxWidth: '100%' }} className="about-container p-0">
//         <BackButton />

//         {/* SECTION 1: HERO */}
//         <Row className="min-h-screen flex flex-col md:flex-row items-center justify-center">
//           <Col 
//             xs={{ span: 12, order: 1 }} 
//             md={{ span: 6, order: 2 }} 
//             className="flex items-center justify-center p-0"
//           >
//             <div className="relative w-[80%] md:w-full flex justify-center">
//               <img 
//                 className="w-full min-h-screen max-h-[60vh] md:min-h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400" 
//                 src={Estate} 
//                 alt="Profile"
//               />
//               <h1 className="absolute bottom-4 left-0 bg-white/90 px-4 py-1 md:hidden text-[40px] font-black text-black whitespace-nowrap">
//                 About Me
//               </h1>
//             </div>
//           </Col>

//           <Col 
//             xs={{ span: 12, order: 2 }} 
//             md={{ span: 5, order: 1 }} 
//             className="lg:ml-[120px] md:ml-0 ml-[10%] flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6" 
//           >
//             <h1 className="hidden md:block font-[1000] text-black lg:text-[140px] md:text-[70px] offset-underline whitespace-nowrap overflow-visible">
//               About Me
//             </h1>
//             <p className="text-[rgb(96,93,93)] text-[18px] md:text-[25px] text-left max-w-[85%] md:max-w-none">
//               A brief introduction about me and my interest.
//             </p>
//             <button 
//               className="w-fit bg-[rgb(34,59,79)] border rounded-[20px] text-white text-xl md:text-2xl px-6 py-2 shadow-md"
//               onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
//             >
//               Scroll Down
//             </button>
//           </Col>
//         </Row>

//         {/* SECTION 2: WHO AM I */}
//         <div className='min-min-h-screen w-full md:w-[85%] flex flex-col mx-auto items-center py-20'>
//           <Row className="w-full gap-5">
//             <h1 className='offset-underline ml-10 font-bold text-black text-4xl md:text-6xl mb-10'>Who Am I?</h1>
            
//             {/* Image Collage - Grid on Desktop, Simplified on Mobile */}
//             <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }} className='flex justify-center p-4 relative min-h-[400px]'>
//               <img className='absolute w-40 h-40 md:w-60 md:h-60 top-0 md:top-10 left-10 md:left-0 object-cover grayscale hover:scale-105 hover:grayscale-0 transition duration-300' src={AboutSectionPic2} alt="pic2" />
//               <img className='absolute w-40 h-40 md:w-60 md:h-60 top-20 md:top-25 right-10 object-cover grayscale hover:scale-105 hover:grayscale-0 transition duration-300 shadow-xl z-10' src={Estate} alt="estate" />
//               <img className='absolute w-40 h-40 md:w-60 md:h-60 bottom-0 md:bottom-10 left-1/4 object-cover grayscale hover:scale-105 hover:grayscale-0 transition duration-300' src={AboutSectionPic1} alt="pic1" />
//             </Col>

//             <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className='p-4 px-10 md:px-4'>
//               <h2 className='text-black text-2xl md:text-4xl mb-4'>S A N J A Y &nbsp; &nbsp; K U M A R</h2>
//               <p className='text-[rgb(96,93,93)] text-[18px] md:text-[25px] leading-relaxed'>
//                 I’m Sanjay Kumar, a <span className='text-black font-semibold'>passionate Web Developer</span> from Coimbatore, Tamil Nadu, currently pursuing my degree in <span className='text-black font-semibold'>Computer Science</span> at <span className='text-black font-semibold'>Sri Krishna College of Engineering and Technology</span>, India. My work focuses on building responsive, scalable, and user-friendly websites...
//               </p>
//             </Col>
//           </Row>
//         </div>

//         {/* SECTION 3: SKILLS */}
//         <div className='py-20 space-y-10'>
//           <div className='flex flex-col justify-center items-center px-6'>
//             <h1 className='text-center font-semibold text-[40px] md:text-[60px] text-black'>Skills & Expertise</h1>
//             <p className='text-center text-gray-500 w-full md:w-1/2 text-[18px] md:text-[28px]'>Explore my technical skills across different domains.</p>
//           </div>

//           <div className='flex flex-wrap gap-3 justify-center px-4'>
//             {[
//               { id: "web", icon: <FaLaptopCode  />, title: "Web development", desc: "Building modern web apps." },
//               { id: "api", icon: <Server  />, title: "REST API", desc: "Scalable backend services." },
//               { id: "problem", icon: <Brain  />, title: "Problem Solving", desc: "Complex DSA problems." },
//               { id: "mobile", icon: <Smartphone  />, title: "Mobile Dev", desc: "Cross-platform apps." }
//             ].map((skill) => (
//               <button 
//                 key={skill.id}
//                 className={`${activeSkill === skill.id ? "border-[rgb(34,59,79)] bg-gray-100" : "border-black"} flex flex-col items-center border-2 rounded-[20px] p-5 w-[45%] md:w-[280px] transition-all`}
//                 onClick={() => setActiveSkill(skill.id)}>
//                 <div className="mb-4 text-[rgb(34,59,79)]">{skill.icon}</div>
//                 <h3 className="text-lg md:text-xl font-bold">{skill.title}</h3>
//                 <p className='hidden md:block text-center text-sm'>{skill.desc}</p>
//               </button>
//             ))}
//           </div>

//           <div className='flex flex-col mx-auto bg-[#e6e6e6] mt-12 rounded-[30px] w-[95%] h-auto gap-10 pb-20 p-6'>
//             <h1 className='text-center font-semibold text-[30px] md:text-[50px] text-black pt-5'>Languages & Tools</h1>
//             <div className='flex flex-wrap justify-center gap-3'>
//               {activeSkill === "web" && ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Bootstrap", "VS Code", "Git", "GitHub"].map(item => (
//                 <button key={item} className='py-2 px-4 text-sm md:text-2xl bg-white rounded-full shadow-sm'>{item}</button>
//               ))}
//               {activeSkill === "api" && ["Node.js", "Spring Boot", "MySQL", "PostgreSQL", "Postman"].map(item => (
//                 <button key={item} className='py-2 px-4 text-sm md:text-2xl bg-white rounded-full shadow-sm'>{item}</button>
//               ))}
//               {activeSkill === "problem" && ["C++", "Java", "DSA", "LeetCode", "GFG"].map(item => (
//                 <button key={item} className='py-2 px-4 text-sm md:text-2xl bg-white rounded-full shadow-sm'>{item}</button>
//               ))}
//               {activeSkill === "mobile" && ["React Native", "Android Studio"].map(item => (
//                 <button key={item} className='py-2 px-4 text-sm md:text-2xl bg-white rounded-full shadow-sm'>{item}</button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* SECTION 4: EDUCATION */}
//         <div className='flex flex-col mx-auto bg-[#e6e6e6] mt-12 rounded-[30px] w-[95%] py-20 px-6 gap-10'>
//           <h1 className='text-center font-semibold text-[40px] md:text-[60px] text-black'>Education</h1>
//           <Row className="flex-col md:flex-row items-start">
//             <Col xs={12} md={6} className='flex flex-col gap-10'>
//               <div className='md:ml-[50px]'>
//                 <h2 className='font-normal text-[20px] md:text-[25px]'>2025</h2>
//                 <h1 className='text-[25px] md:text-[30px] font-bold'>Sri Krishna College of Engineering and Technology</h1>
//                 <h2 className='font-normal text-[20px] md:text-[25px]'>3rd | Computer Science and Engineering</h2>
//               </div>
//               <div className="relative w-full h-[300px] md:h-[500px] hidden md:block">
//                 <img className="absolute top-20 left-0 w-[200px] md:w-[300px] h-auto grayscale" src={Ocean1} alt="o1" />
//                 <img className="absolute top-0 left-[200px] w-[150px] md:w-[220px] h-auto grayscale" src={Ocean2} alt="o2" />
//                 <img className="absolute top-60 left-[180px] w-[180px] md:w-[260px] h-auto grayscale" src={Ocean3} alt="o3" />
//               </div>
//             </Col>

//             <Col xs={12} md={6} className='flex flex-col gap-10 mt-10 md:mt-0'>
//               <h1 className='text-[30px] md:ml-[50px]'>Achievements</h1>
//               {[
//                 { icon: <Medal />, title: "Problem Solving", desc: "150+ DSA problems solved." },
//                 { icon: <Award />, title: "Full-stack Projects", desc: "Clean architecture builds." },
//                 { icon: <Trophy />, title: "Automation", desc: "Selenium UI testing scripts." }
//               ].map((item, idx) => (
//                 <div key={idx} className='flex mx-auto w-full md:w-[80%] rounded-xl bg-gray-200 p-4 shadow-sm group hover:bg-white transition-all'>
//                   <div className='p-4 bg-white rounded-full mr-4'>{item.icon}</div>
//                   <div>
//                     <h3 className='font-bold text-xl'>{item.title}</h3>
//                     <p className='text-gray-600'>{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </Col>
//           </Row>
//         </div>

//         {/* FOOTER */}
//         <footer className="flex flex-col items-center justify-center py-20">
//           <a href="/#contact" className="text-black font-bold flex flex-wrap justify-center items-center text-[40px] md:text-[90px] no-underline hover:underline px-4">
//             Contact Me Here
//             <ArrowBigRight className="w-10 h-10 md:w-16 md:h-16 ml-4" />
//           </a>
//           <hr className="h-1 bg-black border-0 my-4 w-[70%]" />
//           <p className="text-gray-500 text-xl md:text-2xl">
//             &copy; {new Date().getFullYear()} Sanjay Kumar. All rights reserved.
//           </p>
//         </footer>
//       </Container>
//     </>
//   );
// };

// export default About;
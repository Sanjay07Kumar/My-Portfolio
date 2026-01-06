import BackButton from "./BackButton";

import 'aos/dist/aos.css';
import Iot1 from './ScreenShots/iot1.jpg';
import Iot2 from './ScreenShots/iot2.jpg';
import Iot3 from './ScreenShots/iot3.jpg';

import Exsell1 from './ScreenShots/Exsell1.png';
import Exsell2 from './ScreenShots/Exsell2.png';
import Exsell3 from './ScreenShots/Exsell3.png';

import Employee1 from './ScreenShots/Employee-1.png';
import Employee2 from './ScreenShots/Employee-2.png';
import Employee3 from './ScreenShots/Employee-3.png';


import ProjectPic from './Assets/project-pic.jpg';
import { Container,Row,Col } from "react-bootstrap";

import AutoSlideShow from "./AutoSlideShow";

const excellImages = [Exsell1, Exsell2 ,Exsell3];
const employeeImages = [Employee1, Employee2, Employee3];
const iotImages = [Iot1, Iot2, Iot3];
const Projects = () => {
  
    return (
      
        <>
          <Container style={{ maxWidth: '100%'}} className="about-container">
          <BackButton/>
        <div className="page-section">
          <Row className='h-screen flex flex-col md:flex items-center justify-center'>

            <Col 
            xs={{ order: 2 }} 
            md={{ span: 5, order: 1 }} 
            className='lg:ml-[150px] md:ml-0 flex flex-col items-start space-y-7 mt-6 md:mt-0 pr-6'
          >
            <h1 className='hidden md:block lg:text-[120px] md:text-[70px] text-black font-black whitespace-nowrap offset-underline'>
              My Projects
            </h1>

            <p className='text-[rgb(96,93,93)] ml-10 lg:ml-0 text-[18px] md:text-[22px] text-left max-w-[85%] md:max-w-none'>
              Get a look at my projects and works.
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


            <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} 
            className='flex items-center justify-center p-0'>
            <div className="relative w-full md:w-full flex justify-center">
                      
              <img 
                className="w-full h-screen max-h-[60vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400" 
                src={ProjectPic} 
                alt="ProjectPage"
              />

              <h1 className="
                absolute ml-10 bottom-4 left-0 bg-white/90 px-4 py-1 
                md:hidden 
                text-[40px] font-black text-black whitespace-nowrap">
                My projects
              </h1>

            </div>
          </Col>
  
          </Row>
        </div>
        
        <div className="w-[85%] h-hidden md:min-h-screen  mx-auto flex items-center ">
          <Row className="gap-5">
                    
            <h1 className='ml-0 sm:ml-0 md:ml-10 lg:ml-10 font-semibold  text-black text-[20px]  md:text-[40px] lg:text-[40px] offset-underline mt-0 mb-10'>Highlight?</h1>
            
            <Col xs={{ order: 2 }} md={{ span: 5, order: 1 }} className="flex items-center justify-center">
              <div className="w-2/3 md:w-[600px] mx-auto">
                <AutoSlideShow images={excellImages} />
              </div>
            </Col>
                  
            <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} 
              className='px-4 text-left sm:text-center md:text-left'>
              <h2 className="text-black mb-4 text-[13px] md:text-[40px] lg:text-[40px">ExSell</h2>
              <p className='text-[rgb(96,93,93)] text-[12px] md:text-[27px] lg:text-[25px]'>The following projects highlight my hands-on experience with <span className='text-black font-semisemibold'>React</span>, <span className='text-black font-semibold'>Spring Boot </span>, <span className='text-black font-semisemibold'>MySql Database</span>. They represent my ability to apply technical concepts to real-world applications and build systems that are functional, scalable, and <span className='text-black font-semisemibold'>user-friendly</span>.These projects demonstrate my learning journey and practical understanding of <span className='text-black font-semisemibold'>full-stack-development</span>, <span className='text-black font-semisemibold'> automation-testing</span>, and <span className='text-black font-semisemibold'>system administration</span>. Through them, I’ve gained strong problem-solving skills, improved my coding practices, and learned how to build complete, working applications.</p>
            </Col>
          </Row>
        </div>


        <div className='flex ml-0 md:ml-20 flex-col items-center mb-10'>
          <h1 className='text-center md:text-left font-jost font-semisemibold text-[20px] md:text-[60px] lg:text-[60px] text-black mt-5'>My Other Projects</h1>
          <p className=' text-center flex  font-jost text-grey md:w-3/4 text-[12px] md:text-[28px]'>Here are some of the major projects I’ve developed, reflecting my technical skills and ability to build real-world applications from scratch.</p>
        </div>  


          
          <div className="w-[85%] h-hidden md:min-h-screen mx-auto flex items-center ">

            <Row className="gap-5">
              <Col xs={{ order: 2 }} md={{ span: 5, order: 2 }} className="flex items-center justify-center">
                <div className="w-2/3 md:w-[600px] mx-auto">
                  <AutoSlideShow images={employeeImages} />
                </div>
              </Col>

              <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} className=''>
                <h2 className='text-black mb-4 text-[13px] md:text-[40px] lg:text-[40px]'>Employee Management System</h2>
                <p className='text-[rgb(96,93,93)] text-[12px] md:text-[27px] lg:text-[25px]'>
                  I developed an <span className='text-black font-semibold'>Employee Management System</span> that streamlines and automates essential workforce operations within an organization. This system provides a centralized platform for maintaining comprehensive <span className='text-black font-semibold'>employee records</span>, enabling teams to perform essential <span className='text-black font-semibold'>CRUD operations</span> with accuracy and ease. It ensures smooth <span className='text-black font-semibold'>data management</span> by organizing all employee-related information in a structured and accessible format. The application features seamless communication between a responsive <span className='text-black font-semibold'>React.js frontend</span> and a robust <span className='text-black font-semibold'>Spring Boot backend</span>. Built using a clean and scalable <span className='text-black font-semibold'>layered architecture</span>—including <span className='text-black font-semibold'>controller</span>, <span className='text-black font-semibold'>service</span>, <span className='text-black font-semibold'>repository</span>, and <span className='text-black font-semibold'>model</span> layers—it ensures maintainability, future expansion, and enterprise-level reliability. This project showcases my ability to build <span className='text-black font-semibold'>full-stack applications</span> with optimized performance, clean design, and robust API communication.
                </p>
              </Col>
            </Row>
          </div>


          <div className="w-[85%] h-hidden md:min-h-screen  mx-auto  mt-5 flex flex-col md:flex-row">
            <Row className="gap-5">
              <Col  xs={{ order: 1 }} md={{ span: 6, order: 1 }} 
                className='flex flex-col justify-center relative'>
                <h2 className='text-black mb-4 text-[13px] md:text-[40px] lg:text-[40px]'>Smoke and Fire Detection</h2>
                <p className='text-[rgb(96,93,93)] text-[12px] md:text-[27px] lg:text-[25px]'>
                  I developed a real-time <span className='text-black font-semibold'>Smoke and Fire Detection System</span> using <span className='text-black font-semibold'>Arduino Uno</span> to enhance safety and provide early warning during fire hazards. The system integrates an <span className='text-black font-semibold'>MQ-2 gas sensor</span> to detect smoke and harmful gases and a <span className='text-black font-semibold'>flame sensor</span> to accurately identify fire presence through infrared light patterns. When smoke levels rise or a flame is detected, the system immediately triggers an <span className='text-black font-semibold'>active buzzer alarm</span> to alert users. Designed with a simple yet reliable circuit using sensor modules, jumper wires, and a 9V power supply, this project demonstrates practical <span className='text-black font-semibold'>IoT safety automation</span> and the ability to build efficient embedded systems. It highlights my skills in sensor integration, microcontroller programming, and real-time hazard monitoring.
                </p>
              </Col>

              <Col xs={{ order: 1 }} md={{ span: 5, order: 2 }} className="flex items-center justify-center">
                <div className="w-1/3 md:w-[300px] mx-auto">
                  <AutoSlideShow images={iotImages} />
                </div>
              </Col>
            </Row>


          </div>


          {/* project cards */}
          {/* <div className="w-[90%] mx-auto mt-5 flex flex-col md:flex-row">

            <div className="w-full  md:w-1/2 flex items-center justify-center">
              <img
                className="scale-[0.8] object-cover grayscale hover:grayscale-0 hover:scale-[0.85] transition-all"
                src={Employee1}
                alt="EducationPic"
              />
            </div>

            <div className="w-full md:w-1/2 p-10">
              <h2 className="text-4xl font-semibold mb-4">Employee Management System</h2>
              <p className="text-[22px] leading-relaxed">
                I developed an <span className='text-black font-semibold'>Employee Management System</span> that streamlines and automates essential workforce operations within an organization. This system provides a centralized platform for maintaining comprehensive <span className='text-black font-semibold'>employee records</span>, enabling teams to perform essential <span className='text-black font-semibold'>CRUD operations</span> with accuracy and ease. It ensures smooth <span className='text-black font-semibold'>data management</span> by organizing all employee-related information in a structured and accessible format. The application features seamless communication between a responsive <span className='text-black font-semibold'>React.js frontend</span> and a robust <span className='text-black font-semibold'>Spring Boot backend</span>. Built using a clean and scalable <span className='text-black font-semibold'>layered architecture</span>—including <span className='text-black font-semibold'>controller</span>, <span className='text-black font-semibold'>service</span>, <span className='text-black font-semibold'>repository</span>, and <span className='text-black font-semibold'>model</span> layers—it ensures maintainability, future expansion, and enterprise-level reliability. This project showcases my ability to build <span className='text-black font-semibold'>full-stack applications</span> with optimized performance, clean design, and robust API communication.
              </p>
            </div>
          </div> */}
          

        <div className="flex items-center justify-center h-[30vh] md:h-[100vh] lg:h-[100vh]">
          <h1 className="text-[15px] md:text-[40px] text-center text-black italic w-[60%] mx-auto">
            “Problems exist so solutions can be created, not avoided.”
          </h1>
        </div>



        <footer className="flex flex-col items-center justify-center pt-20 pb-2">

          <div>
            <h1 className="text-[10px] font-xs md:text-[40px] text-center text-gray-500 italic w-full mx-auto">
              Want to work together?
            </h1>
          </div>

          <div className="flex md:mt-5 items-center">
            
            <a href="/#contact" className="text-black font-bold flex text-[15px] md:text-[0px] no-underline hover:underline">
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

export default Projects;
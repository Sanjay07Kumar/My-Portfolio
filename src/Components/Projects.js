import BackButton from "./BackButton";

import 'aos/dist/aos.css';


import AboutSectionPic from './Assets/about-pic.jpg';

import AboutSectionPic1 from './Assets/about-picc1.jpg';
import AboutSectionPic2 from './Assets/about-picc2.jpg';
import AboutSectionPic3 from './Assets/about-picc3.jpg';


import Employee1 from './ScreenShots/Employee-1.png';
import Employee2 from './ScreenShots/Employee-2.png';
import Employee3 from './ScreenShots/Employee-3.png';


import ProjectPic from './Assets/project-pic.jpg';
import { Row,Col } from "react-bootstrap";
const Projects = () => {
    return (

        <div>
          <BackButton/>

          <Row className='items-center block justify-center flex gap-0 h-100vh '>
                    
            <Col xs={{ order: 2 }} md={{ span: 5, order: 1 }} className=''>
              <h1 className='font-[1000] text-black text-[140px] text-jost offset-underline ml-[120px] whitespace-nowrap z-1'>My Projects</h1>
              <p className="pt-[50px] text-[30px] ml-[120px] text-[rgb(34,59,79)]">Get a look at my projects and works.</p>
              <button className='button-scroll-down ml-[120px] mt-4'
              onClick={() => window.scrollBy({
                top:window.innerHeight,
                left:0,
                behavior:'smooth'
              })}>Scroll Down</button>
            </Col>
  
            <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} className='about-row1-right'>
              <img className='about-sec-pic w-[100%] h-screen ml-[80px] grayscale transition ease-in-out hover:grayscale-0 object-cover' src={ProjectPic} alt=""></img>
            </Col>
  
          </Row>

          <Row className=" about-row2">
                    
            <h2 className='offset-underline about-row2-h2'>Highlight?</h2>
            <Col xs={{ order: 2 }} md={{ span: 5, order: 1 }} className='flex about-row2-left top-10 right-6 relative'>
              
              <img className='w-[60%] h-[60%]] object-cover absolute top-0 right-10 hover:scale-105 hover:z-50 transition-all duration-300 grayscale transition ease-in-out hover:grayscale-0' src={Employee1} 
              alt="Project ScreenShots"></img>
              <img className='w-[65%] h-[65%]] object-cover absolute top-[240px] left-40 hover:scale-105 hover:z-50 transition-all duration-300 grayscale transition ease-in-out hover:grayscale-0' src={Employee3} 
              alt="Project ScreenShots"></img>

              <img className='w-[70%] h-[70%]] object-cover absolute top-20 left-10 hover:scale-105 hover:z-50 transition-all duration-300 grayscale transition ease-in-out hover:grayscale-0' src={Employee2} 
              alt="Project ScreenShots"></img>
              
              
            </Col>
  
          
            <Col xs={{ order: 1 }} md={{ span: 5, order: 2 }} className='about-row2-right'>
              <h3>Sanjay Kumar</h3>
              <p>The following projects highlight my hands-on experience with React, Spring Boot, SQL databases. They represent my ability to apply technical concepts to real-world applications and build systems that are functional, scalable, and user-friendly.These projects demonstrate my learning journey and practical understanding of full-stack development, automation testing, and system administration. Through them, I’ve gained strong problem-solving skills, improved my coding practices, and learned how to build complete, working applications.</p>
            </Col>
          </Row>


          <Row className=' pt-4 w-[60%]'>
          <h1 className="text-black font-black ml-[150px]">My Other Projects</h1>
          <p className="  ml-[150px] text-[25px] text-[rgb(96,93,93)]">Here are some of the major projects I’ve developed, reflecting my technical skills and ability to build real-world applications from scratch.</p>
        </Row>  


        
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 w-[90%] mx-auto mb-10 mt-10">

         
        <div className="relative group w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={Employee1}
            alt="project"
            className="absolute inset-0 object-cover w-full h-full object-cover 
                      opacity-30 group-hover:opacity-100 
                      transition-all duration-500"
          />

          {/* Overlay Content */}
          <div
            className="absolute inset-0 bg-grey-900/50 flex flex-col items-center justify-center text-white
                      group-hover:bg-black/10 transition-all duration-500"
          >
            <h2 className="text-xl font-semibold tracking-wide">
              Employee Management System
            </h2>
            <p className="mt-2 text-sm opacity-90">
              React • Spring Boot • MySQL
            </p>
          </div>

        </div>


        <div className="relative group w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          {/* 🔹 Your screenshot (hidden until hover) */}
          <img
            src={Employee1}
            alt="project"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />

          {/* 🔹 Opaque overlay content */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white
                          group-hover:bg-black/10 transition-all duration-500">
            <h2 className="text-xl font-semibold tracking-wide">
              Employee Management System
            </h2>
            <p className="mt-2 text-sm opacity-90">
              React • Spring Boot • MySQL
            </p>
          </div>
        </div>

        <div className="relative group w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          {/* 🔹 Your screenshot (hidden until hover) */}
          <img
            src={Employee1}
            alt="project"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />

          {/* 🔹 Opaque overlay content */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white
                          group-hover:bg-black/10 transition-all duration-500">
            <h2 className="text-xl font-semibold tracking-wide">
              Employee Management System
            </h2>
            <p className="mt-2 text-sm opacity-90">
              React • Spring Boot • MySQL
            </p>
          </div>
        </div>

        <div className="relative group w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          {/* 🔹 Your screenshot (hidden until hover) */}
          <img
            src={Employee1}
            alt="project"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />

          {/* 🔹 Opaque overlay content */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white
                          group-hover:bg-black/10 transition-all duration-500">
            <h2 className="text-xl font-semibold tracking-wide">
              Employee Management System
            </h2>
            <p className="mt-2 text-sm opacity-90">
              React • Spring Boot • MySQL
            </p>
          </div>
        </div>

        </div>

        </div>

    );
};

export default Projects;
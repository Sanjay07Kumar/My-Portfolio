
import AboutSectionPic1 from './Assets/about-section-picc.jpg';
import AboutSectionPic2 from './Assets/about-section-pi.jpg';
import AboutSectionPic3 from './Assets/about-section-pic.jpg';


import MainPic from './Assets/about-section.jpg';

import Ocean1 from './Assets/ocean1.jpg';
import Ocean2 from './Assets/ocean2.jpg';
import Ocean3 from './Assets/ocean3.jpg';

import Estate from './Assets/meinestate.jpg';
import { Container, Row, Col } from "react-bootstrap";
import { Brain, Server, Medal, Trophy, Award, Smartphone } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";
import Footer from './Footer';

const About = () => {
  const [activeSkill, setActiveSkill] = useState("web");
  return (

    <>
      <Container style={{ maxWidth: '100%' }} className="about-container">

        <div className='page-section'>

          <Row className='h-screen flex flex-col bg-[#E0E0DF] sm:bg-white md:bg-[#E0E0DF] items-center justify-center'>


            <Col
              xs={{ order: 1 }} md={{ span: 6, order: 2 }}
              className='flex items-center justify-center p-0'>
              <div className="relative w-full md:w-full flex justify-center">

                <img
                  className="w-full h-screen max-h-[60vh] md:h-screen md:max-h-none object-cover grayscale hover:grayscale-0 transition duration-400"
                  src={Ocean3}
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
              <h1 className="hidden md:block lg:text-[100px] md:text-[70px] text-black font-[800] whitespace-nowrap offset-underline">
                About Me
              </h1>

              <p className=' ml-10 lg:ml-0 text-[18px] md:text-[20px] text-left max-w-[85%] md:max-w-none whitespace'>
                A brief introduction about me and my interest as a software developer.
              </p>

              <button
                className='bg-[rgb(34,59,79)] ml-10 md:ml-0 lg:ml-0 border-2 border-[#E0E0DF] rounded-[15px] text-[rgb(218,218,218)] px-6 py-2  text-md md:text-lg hover:text-[rgb(34,59,79)] hover:bg-[#E0E0DF] hover:border-[rgb(34,59,79)] transition duration-300'
                onClick={() => window.scrollBy({
                  top: window.innerHeight,
                  left: 0,
                  behavior: 'smooth'
                })}>
                Scroll Down
              </button>
            </Col>

          </Row>
        </div>




        <div className=" md:mt-0 mx-auto flex items-center py-10">
          <Row className="w-full mx-auto min-h-screen items-stretch flex">


            <h1 className='ml-10 sm:ml-0 md:ml-20 lg:ml-20 font-bold  text-black text-[20px]  md:text-[30px] lg:text-[30px] offset-underline mt-0'>
              Who Am I?
            </h1>
            <Col
              xs={{ order: 1 }}
              md={{ span: 6, order: 1 }}
              className="
              flex
              w-full
              md:w-1/2
              h-fit
              md:h-screen
              items-center
              justify-center
            "
            >
              <div
                className="
              relative
              w-[80%]      /* Adjust width as needed */
              max-w-[500px] /* Maximum width */
              h-[400px]  /* Adjust height as needed */
              md:h-[500px]
              flex
              items-center
              justify-center
              mx-auto
            ">
                <img
                  className="
                  absolute
                  w-[45%]
                  h-[45%]
                  sm:h-[45%]
                  lg:h-[45%]
                  md:h-[45%]
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all
                  duration-300
                "
                  style={{
                    top: '15%',
                    left: '5%',
                  }}
                  src={MainPic}
                  alt="EducationPic"
                />

                <img
                  className="
                  absolute
                  w-[30%]
                  h-[30%]
                  lg:h-[30%]
                  md:h-[30%]
                  lg:h-[30%]
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all
                  duration-300
                "
                  style={{
                    top: '5%',
                    right: '25%',
                  }}
                  src={AboutSectionPic2}
                  alt="EducationPic"
                />

                <img
                  className="
                  absolute
                  w-[35%]
                  h-[30%]
                  lg:h-[35%]
                  md:h-[35%]
                  lg:h-[35%]
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all
                  duration-300
                "
                  style={{
                    bottom: '20%',
                    right: '23%',
                  }}
                  src={AboutSectionPic1}
                  alt="EducationPic"
                />
              </div>
            </Col>


            <Col
              xs={{ order: 2 }}
              md={{ span: 6, order: 2 }}
              className="
              w-full
              md:w-1/2
              md:h-screen
              h-fit
              flex
              items-center
              justify-center
              text-center
            "
            >

              <div className="w-[95%] max-w-[800px] flex flex-col items-center">
                <h2 className='text-black font-bold text-[14px] md:text-[25px] lg:text-[25px] w-full text-start'>
                  S A N J A Y&nbsp; &nbsp;K U M A R
                </h2>
                <div className="w-full">
                  <p className='text-[rgb(96,93,93)] text-[12px] md:text-[18px] lg:text-[18px] leading-relaxed text-justify'>
                    I am a <span className='text-black font-medium'>dedicated Web Developer</span> with a strong foundation in modern web technologies, currently advancing my expertise through a <span className='text-black font-medium'>Computer Science</span> degree at <span className='text-black font-medium'>Sri Krishna College of Engineering and Technology</span> in Coimbatore, Tamil Nadu. My professional approach centers on <span className='text-black font-medium'>architecting responsive, scalable web applications</span> that prioritize user experience while maintaining robust backend functionality.
                  </p>

                  <p className='text-[rgb(96,93,93)] text-[12px] md:text-[18px] lg:text-[18px] leading-relaxed text-justify'>
                    Beyond development execution, I maintain a disciplined focus on <span className='text-black font-medium'>continuous skill enhancement</span> through systematic problem-solving practice and staying current with emerging industry trends. My professional interests extend to the intersection of <span className='text-black font-medium'>web technologies</span> and <span className='text-black font-medium'>intelligent systems</span>, where I explore innovative approaches to complex challenges. I am actively seeking professional engagements that challenge my skills while contributing to innovative solutions at the forefront of digital transformation and technical excellence.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className='space-y-10'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center font-jost font-bold text-[20px] md:text-[40px] lg:text-[40px] text-black pt-5'>
              Skills & Expertise
            </h1>
            <p className='text-center text-[rgb(96,93,93)] font-jost text-grey md:w-1/2 text-[12px] md:text-[20px]'>
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



            <button
              className={`
              ${activeSkill === "web" ? "border-black active" : ""}
              bg-[rgb(227,227,227)]
              ///////////////////////////////////////////////////////////onclick la bg-[rgba(233,232,232,1)]
              border-2 rounded-[16px]
              p-1 sm:p-3 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
              onClick={() => setActiveSkill("web")}
            >
              <FaLaptopCode className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-black my-4" />
              <h3 className="text-base sm:text-lg md:text-xl text-black font-medium">
                Web Development
              </h3>
              <p className=" text-[12px] md:text-[20px]">
                Building modern, responsive web applications.
              </p>
            </button>

            <button
              className={`
              ${activeSkill === "api" ? "border-black active" : ""}
              bg-[rgb(227,227,227)]
              ///////////////////////////////////////////////////////////onclick la bg-[rgba(233,232,232,1)]
              border-2 rounded-[16px]
              p-1 sm:p-3 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
              onClick={() => setActiveSkill("api")}
            >
              <Server className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-black my-4" />
              <h3 className="text-base sm:text-lg md:text-xl text-black font-medium">
                Backend & API
              </h3>
              <p className=" text-xs sm:text-sm md:text-lg">
                Creating robust and scalable backend services.
              </p>
            </button>

            <button
              className={`
              ${activeSkill === "problem" ? "border-black active" : ""}
              bg-[rgb(227,227,227)]
              ///////////////////////////////////////////////////////////onclick la bg-[rgba(233,232,232,1)]
              border-2 rounded-[16px]
              p-1 sm:p-3 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
              onClick={() => setActiveSkill("problem")}
            >
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-black my-4" />
              <h3 className="text-base sm:text-lg md:text-xl text-black font-medium">
                Problem Solving
              </h3>
              <p className="text-xs sm:text-sm md:text-lg">
                Solving complex problems, critical thinking.
              </p>
            </button>

            <button
              className={`
              ${activeSkill === "mobile" ? "border-black active" : ""}
              bg-[rgb(227,227,227)]
              ///////////////////////////////////////////////////////////onclick la bg-[rgba(233,232,232,1)]
              border-2 rounded-[16px]
              p-1 sm:p-3 md:p-5
              flex flex-col items-center text-center
              transition hover:scale-[1.03]
            `}
              onClick={() => setActiveSkill("mobile")}
            >
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-black my-4" />
              <h3 className="text-base sm:text-lg md:text-xl text-black font-medium">
                Mobile Development
              </h3>
              <p className="text-xs sm:text-sm md:text-lg">
                Developing suitable mobile applications.
              </p>
            </button>
          </div>


          <div className='flex flex-col justify-self-center bg-[#e6e6e6] rounded-[30px] w-[95%] h-auto gap-10 py-4'>
            <h1 className='text-center font-jost font-medium text-[20px] md:text-[30px] lg:text-[30px] text-black'>Languages & Frameworks</h1>
            <div className="flex justify-center items-center w-full ">

              {activeSkill === "web" && (
                <ul
                  className="
                  flex flex-wrap justify-center
                  gap-2 sm:gap-3 md:gap-4
                  max-w-full
                "
                >
                  {[
                    "HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Bootstrap",].map((skill) => (
                      <li key={skill}>
                        <button className="pill-button">{skill}</button>
                      </li>
                    ))}
                </ul>
              )}

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

          <div className='flex flex-col justify-self-center bg-[#e6e6e6] rounded-[30px] w-[95%] h-auto py-4 gap-10'>
            <h1 className='text-center font-jost font-medium text-[20px] md:text-[30px] lg:text-[30px] text-black'>Tools & Technologies</h1>
            <div className="flex justify-center items-center w-full ">
              {activeSkill === "web" && (

                <ul className='flex flex-wrap justify-center
                gap-2 sm:gap:3 md:gap-4
                max-w-full'
                >
                  {["Visual Studio Code", "Git", "Github", "Vite", "Postman"].map((tool) => (
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
                  {["Postman", "Visual Studio Code", "MySQL", "Git", "Github"].map((tool) => (
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
                  {["LeetCode", "Visual Studio Code", "Geeks for Geeks"].map((tool) => (
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
            <h1 className='text-center font-jost font-medium text-[22px] md:text-[35px] lg:text-[35px] text-black pt-4'>Education</h1>
            <p className='text-center font-jost text-grey md:w-1/2 text-[12px] md:text-[20px]'>Get to know of my education and my achievements.</p>
          </div>
          <Row className='flex flex-col md:flex-row'>


            <Col className='md:education-left lg:education-left  flex flex-col gap-10'>
              <div className='ml-[50px]'>
                <h2 className='font-normal text-[12px] md:text-[20px]'>2025</h2>
                <h1 className='text-[12px] md:text-[20px]'>Sri Krishna College of Engineering and Technology</h1>
                <h2 className='font-normal text-[12px] md:text-[20px]'>3rd | Computer Science and Engineering</h2>
              </div>

              <div
                className="relative
                mt-0
                  md:mt-5
                  w-full
                  md:w-[600px]
                  h-[200px]
                  md:h-[450px]

                  /* positioning */
                  ml-0 md:ml-[100px]
                  mt-0
                  /* scaling */
                  scale-[0.4]
                  sm:scale-[0.7]
                  md:scale-[0.7]

                  /* center on mobile */
                  origin-top
                  mx-auto md:mx-0" >

                <img className="absolute top-[90px] left-0 w-[300px] h-[320px] grayscale hover:grayscale-0 object-cover" src={Ocean1} alt="EducationPic" ></img>

                <img className="absolute  top-5 left-[260px] w-[220px] h-[220px] grayscale hover:grayscale-0 object-cover" src={Ocean2} alt="EducationPic" ></img>

                <img className="absolute top-[315px] left-[240px]  w-[260px] h-[260px] grayscale hover:grayscale-0 object-cover" src={Ocean3} alt="EducationPic" ></img>

              </div>
              <div className="w-[80%] justify-center flex mx-auto my-auto items-center">
                <h1 className="italic text-[12px] md:text-[20px] ml-10">
                  “Code is more than logic—
                  <br />
                  <br />
                  <span className="italic block ml-14 md:ml-24">it’s imagination brought to life.”</span>
                </h1>
              </div>

            </Col>

            <Col className="flex flex-col">

              <div className="flex flex-col gap-2 ml-6 mt-10 md:mt-0">
                <h1 className='text-[12px] md:text-[20px]'>
                  Achievements
                </h1>
                <h2 className="text-[12px] md:text-[20px] font-normal text-gray-600">
                  Here are some of my achievements
                </h2>
              </div>

              <div className="flex flex-col py-4 gap-4 mt-6">

                <div className="
                  flex w-[90%] mx-auto
                  md:w-[70%] md:mx-auto
                  bg-[rgba(221,220,220,1)]
                  rounded-xl shadow-md
                  p-2 sm:p-3
                  group
                ">
                  <div className="w-[20%] flex items-center justify-center">
                    <div className="
                      h-8 w-8 md:h-12 md:w-12
                      flex items-center justify-center
                      rounded-full bg-[rgba(228,223,223,1)]
                      shadow

                      group-hover:bg-gradient-to-r
                      group-hover:from-gray-300
                      group-hover:to-orange-500
                      group-hover:via-yellow-300
                    ">
                      <Medal className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <div className="w-[80%]">
                    <h1 className="text-[12px] md:text-[15px] font-bold">
                      Problem Solving
                    </h1>
                    <p className="text-[12px] md:text-[14px]">
                      Solved 220+ problems in Leetcode, improving problem solving.
                    </p>
                    <span className="text-[8px] md:text-[12px] text-gray-500">
                      Present
                    </span>
                  </div>
                </div>

                <div className="
                  flex w-[90%] mx-auto
                  md:w-[70%] md:mx-auto
                  bg-[rgba(221,220,220,1)]
                  rounded-xl shadow-md
                  p-2 sm:p-3 md:p-6
                  group
                ">
                  <div className="w-[20%] flex items-center justify-center">
                    <div className="
                      h-8 w-8 md:h-12 md:w-12
                      flex items-center justify-center
                      rounded-full bg-[rgba(228,223,223,1)]
                      shadow

                      group-hover:bg-gradient-to-r
                      group-hover:from-gray-300
                      group-hover:to-red-500
                      group-hover:via-pink-400
                    ">
                      <Award className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <div className="w-[80%]">
                    <h1 className="text-[12px] md:text-[15px] font-bold">
                      Projects
                    </h1>
                    <p className="text-[12px] md:text-[14px]">
                      Developed full-stack applications following clean architecture.
                    </p>
                    <span className="text-[8px] md:text-[12px] text-gray-500">
                      Present
                    </span>
                  </div>
                </div>

                <div className="
                  flex w-[90%] mx-auto
                  md:w-[70%] md:mx-auto
                  bg-[rgba(221,220,220,1)]
                  rounded-xl shadow-md
                  p-2 sm:p-3 md:p6
                  group
                ">
                  <div className="w-[20%] flex items-center justify-center">
                    <div className="
                      h-8 w-8 md:h-12 md:w-12
                      flex items-center justify-center
                      rounded-full bg-[rgba(228,223,223,1)]
                      shadow
                      group-hover:bg-gradient-to-r
                      group-hover:from-gray-300
                      group-hover:to-green-600
                      group-hover:via-green-300
                    ">
                      <Trophy className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <div className="w-[80%]">
                    <h1 className="text-[12px] md:text-[15px] font-bold">
                      Testing
                    </h1>
                    <p className="text-[12px] md:text-[14px]">
                      Hands-on experience in Selenium Automation and UI testing.
                    </p>
                    <span className="text-[8px] md:text-[12px] text-gray-500">
                      Present
                    </span>
                  </div>
                </div>

              </div>

              <div className="w-[90%] py-4 mx-auto mt-10 flex flex-col text-justify">
                <p className='text-[rgb(96,93,93)] text-[12px] md:text-[18px] lg:text-[18px] leading-relaxed'>
                  I believe technology is not just about writing code, but about solving
                  problems, creating meaningful experiences, and shaping the future. It's the bridge between human intention and digital reality—a tool that amplifies our capabilities and extends our reach beyond physical limitations.
                </p>

                <p className='text-[rgb(96,93,93)] text-[12px] md:text-[18px] lg:text-[18px] leading-relaxed'>
                  Technology to me is more than a skillset—it's a mindset. My goal is to
                  build scalable, reliable, and impactful solutions.This means architecting systems that grow with demand, engineering with empathy for the end-user, and delivering value that resonates long after deployment.
                </p>
              </div>

            </Col>


          </Row>


        </div>

        <Footer />


      </Container>
    </>
  );
};
export default About;
import 'aos/dist/aos.css';
import Iot1 from './ScreenShots/iot1.jpg';
import Iot2 from './ScreenShots/iot2.jpg';
import Iot3 from './ScreenShots/iot3.jpg';

import Exsell1 from './ScreenShots/Exsell1.png';
import Exsell2 from './ScreenShots/Exsell2.png';
import Exsell3 from './ScreenShots/Exsell3.png';


import Finance1 from './ScreenShots/aifinance1.png';
import Finance2 from './ScreenShots/aifinance2.png';
import Finance3 from './ScreenShots/aifinance3.png';
import Finance4 from './ScreenShots/aifinance4.png';

import Employee1 from './ScreenShots/Employee-1.png';
import Employee2 from './ScreenShots/Employee-2.png';
import Employee3 from './ScreenShots/Employee-3.png';



import ProjectPic from './Assets/project-pic.jpg';
import { Container, Row, Col } from "react-bootstrap";

import AutoSlideShow from "./AutoSlideShow";

import Footer from "./Footer";
const excellImages = [Exsell1, Exsell2, Exsell3];
const employeeImages = [Employee1, Employee2, Employee3];
const aiFinance = [Finance1, Finance2, Finance3, Finance4];
const iotImages = [Iot1, Iot2, Iot3];
const Projects = () => {

  return (

    <>
      <Container style={{ maxWidth: '100%' }} className="about-container">
        <div className="page-section">
          <Row className='h-screen flex flex-col items-center justify-center'>

            <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }}
              className='flex items-center justify-center'>
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

            <Col
              xs={{ order: 2 }}
              md={{ span: 5, order: 1 }}
              className='lg:ml-[150px] md:ml-0 flex flex-col items-start space-y-7 '
            >
              <h1 className="hidden md:block lg:text-[100px] md:text-[70px] text-black font-[800] whitespace-nowrap offset-underline">
                My Projects
              </h1>

              <p className=' ml-10 lg:ml-0 text-[18px] md:text-[20px] text-left max-w-[85%] md:max-w-none whitespace'>
                Get a look at my projects and works.
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


        <div className="mx-auto flex items-center">
          <Row className="w-full mx-auto items-stretch flex py-10">

            <Col
              xs={{ order: 2 }}
              md={{ span: 6, order: 1 }}
              className="
                flex
                flex-col
                w-full
                md:w-1/2
                justify-center
              ">
              <h1 className='hidden sm:inline md:block ml-10 md:ml-20 lg:ml-20 font-bold text-black text-[30px] md:text-[30px] lg:text-[30px] offset-underline'>
                Highlight
              </h1>
              <div
                className="relative
                  w-[80%]      /* Adjust width as needed */
                  max-w-[500px] /* Maximum width */
                  h-fit    /* Adjust height as needed */
                  md:h-[500px]
                  flex
                  items-center
                  justify-center
                  mx-auto">
                <AutoSlideShow images={excellImages} />
              </div>
            </Col>

            <Col
              xs={{ order: 1 }}
              md={{ span: 6, order: 2 }}
              className="
                  w-full
                  md:w-1/2
                  flex
                  flex-col
             ">
              <h1
                className='sm:block md:hidden ml-0 md:ml-20 lg:ml-20 font-bold text-black text-[30px] md:text-[30px] lg:text-[30px] offset-underline text-start mb-10'>
                Highlight
              </h1>
              <div className="w-full md:w-[90%] max-w-[800px] flex flex-col items-center md:py-10 lg:py-20">

                <h2 className='text-black font-bold text-[20px] md:text-[25px] lg:text-[25px] w-full text-start'>
                  E x S e l l
                </h2>
                <div className="w-full">
                  <p className='text-[rgb(96,93,93)] text-[15px] md:text-[18px] lg:text-[18px] leading-relaxed text-justify'>
                    Developed a comprehensive <span className='text-black font-semibold'>full-stack e-commerce platform</span> that revolutionizes online trading by integrating traditional buying/selling with advanced social commerce features. The application enables users to not only purchase products but also engage in <span className='text-black font-semibold'>direct item exchange</span> and <span className='text-black font-semibold'>real-time price negotiation</span> through an embedded chat system. Built with <span className='text-black font-semibold'>React</span> for a dynamic frontend and <span className='text-black font-semibold'>Spring Boot</span> for robust backend services.The <span className='text-black font-semibold'>real-time negotiation chat</span> allows buyers and sellers to discuss prices, arrange exchanges, and finalize deals directly within the platform, eliminating third-party communication barriers.This project demonstrates end-to-end application development capabilities, from conceptualizing user workflows to implementing complex features like <span className='text-black font-semibold'>real-time messaging</span>, and <span className='text-black font-semibold'>responsive design</span> that works seamlessly across all devices.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className='flex flex-col gap-10'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center font-jost font-bold text-[20px] md:text-[40px] lg:text-[40px] text-black'>
              My Other Projects
            </h1>
            <p className='text-center text-[rgb(96,93,93)] font-jost text-grey md:w-1/2 text-[15px] md:text-[20px]'>
              Here are some of the major projects I’ve developed, reflecting my technical skills and ability to build real-world applications from scratch.
            </p>
          </div>



          <div className=" md:mt-0 mx-auto flex items-center">

            <Row className="w-full mx-auto items-stretch flex">
              <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }}
                className="w-full
                  md:w-1/2
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
            ">
                <div
                  className="
                  relative
                  w-[80%]      /* Adjust width as needed */
                  max-w-[500px] /* Maximum width */
                  h-fit    /* Adjust height as needed */
                  md:h-[500px]
                  lg:h-[500px]
                  flex
                  items-center
                  justify-center
                  mx-auto
                ">
                  <AutoSlideShow images={aiFinance} />
                </div>
              </Col>

              <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }}
                className="
                  w-full
                  md:w-1/2
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                ">
                <div className="w-full md:w-[90%] max-w-[800px] flex flex-col items-center">
                  <h2 className='text-black font-bold text-[20px] md:text-[25px] lg:text-[25px] w-full text-start'>
                    F i n a n c e &nbsp;M a n a g e r
                  </h2>
                  <div className="text-justify">
                    <p className='text-[rgb(96,93,93)] text-[15px] md:text-[18px] lg:text-[18px] leading-relaxed text-justify'>
                      Engineered a comprehensive <span className='text-black font-semibold'>Employee Management System</span> designed to optimize workforce administration through complete automation of <span className='text-black font-semibold'>CRUD operations</span>. The application delivers an intuitive user experience via a responsive <span className='text-black font-semibold'>React.js frontend</span> while maintaining enterprise-grade reliability through a robust <span className='text-black font-semibold'>Spring Boot backend</span>. Implementing a clean, scalable <span className='text-black font-semibold'>layered architecture</span> ensures proper separation of concerns between presentation, business logic, and data access layers. This full-stack solution centralizes all employee data management—from recruitment to role assignment and performance tracking—while providing secure API endpoints and efficient database interactions. The system demonstrates proficiency in building maintainable, production-ready applications that address complex organizational needs with optimized performance and future scalability in mind.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>


          <div className=" md:mt-0 mx-auto flex items-center">

            <Row className="w-full mx-auto items-stretch flex">
              <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }}
                className="w-full
                  md:w-1/2
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
            ">
                <div
                  className="
                  relative
                  w-[80%]      /* Adjust width as needed */
                  max-w-[500px] /* Maximum width */
                  h-fit    /* Adjust height as needed */
                  md:h-[500px]
                  lg:h-[500px]
                  flex
                  items-center
                  justify-center
                  mx-auto
                ">
                  <AutoSlideShow images={employeeImages} />
                </div>
              </Col>

              <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }}
                className="
                  w-full
                  md:w-1/2
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                ">
                <div className="w-full md:w-[90%] max-w-[800px] flex flex-col items-center">
                  <h2 className='text-black font-bold text-[20px] md:text-[25px] lg:text-[25px] w-full text-start'>
                    M a n a g e &nbsp;E m p l o y e e
                  </h2>
                  <div className="text-justify">
                    <p className='text-[rgb(96,93,93)] text-[15px] md:text-[18px] lg:text-[18px] leading-relaxed text-justify'>
                      Engineered a comprehensive <span className='text-black font-semibold'>Employee Management System</span> designed to optimize workforce administration through complete automation of <span className='text-black font-semibold'>CRUD operations</span>. The application delivers an intuitive user experience via a responsive <span className='text-black font-semibold'>React.js frontend</span> while maintaining enterprise-grade reliability through a robust <span className='text-black font-semibold'>Spring Boot backend</span>. Implementing a clean, scalable <span className='text-black font-semibold'>layered architecture</span> ensures proper separation of concerns between presentation, business logic, and data access layers. This full-stack solution centralizes all employee data management—from recruitment to role assignment and performance tracking—while providing secure API endpoints and efficient database interactions. The system demonstrates proficiency in building maintainable, production-ready applications that address complex organizational needs with optimized performance and future scalability in mind.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>



          <div className="mx-auto flex items-center">
            <Row className="w-full mx-auto items-stretch flex">
              <Col
                xs={{ order: 1 }}
                md={{ span: 6, order: 1 }}
                className="
                  w-full
                  md:w-1/2
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div className="w-full md:w-[90%] max-w-[800px] flex flex-col items-center gap-4">
                  <h2 className='text-black font-bold text-[20px] md:text-[25px] lg:text-[25px] w-full text-start'>
                    F i r e , S m o k e &nbsp; D e t e c t o r
                  </h2>
                  <div className="w-full">
                    <p className='text-[rgb(96,93,93)] text-[15px] md:text-[18px] lg:text-[18px] leading-relaxed text-justify'>
                      Engineered a real-time <span className='text-black font-semibold'>Smoke and Fire Detection System</span> utilizing <span className='text-black font-semibold'>Arduino Uno microcontroller</span> to provide early hazard detection and enhance safety protocols in residential and commercial environments. The system integrates an <span className='text-black font-semibold'>MQ-2 gas sensor</span> for precise smoke and combustible gas detection, coupled with a specialized <span className='text-black font-semibold'>infrared flame sensor</span> that identifies fire presence through spectral analysis. Upon detecting hazardous conditions exceeding threshold levels, the system immediately triggers both <span className='text-black font-semibold'>audible alarms</span> via buzzer and <span className='text-black font-semibold'>visual indicators</span> through LED notifications for comprehensive alert systems. This embedded IoT solution demonstrates practical implementation of <span className='text-black font-semibold'>environmental monitoring automation</span>, showcasing expertise in microcontroller programming with C/C++, real-time sensor data processing, hardware-software integration, and system reliability testing.
                    </p>
                  </div>
                </div>
              </Col>

              <Col
                xs={{ order: 2 }}
                md={{ span: 6, order: 2 }}
                className="
                  flex
                  w-full
                  md:w-1/2
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    relative
                    w-[40%]      /* Adjust width as needed */
                    max-w-[500px] /* Maximum width */
                    h-3/4    /* Adjust height as needed */
                    md:h-[500px]
                    flex
                    items-center
                    justify-center
                    mx-auto
                  ">
                  <AutoSlideShow images={iotImages} />
                </div>
              </Col>
            </Row>


          </div>



        </div>

        <Footer />

      </Container>
    </>



  );
};

export default Projects;
import React from 'react';
import { ArrowBigRightDash } from "lucide-react";

export default function footer () {
    return (    
      <div>
        <div className="flex items-center px-[6%] justify-center min-h-screen md:min-h-screen lg:min-h-screen">
          <h1 className="text-[18px] md:text-[30px] text-center text-black italic font-normal w-[60%] mx-auto">
            “Problems exist so solutions can be created, not avoided.”
          </h1>
        </div>
        <footer className="flex flex-col items-center justify-center pt-10 ">
          <h1 className='text-[12px] md:text-[18px] text-[rgb(96,93,93)] leading-relaxed' >W a n t &nbsp; S o m e t h i n g &nbsp; l i k e &nbsp; t h i s &nbsp;?</h1>
          <div className="flex items-center">
            <a 
              href="/#contact" 
              className="text-black font-bold flex items-center gap-2 md:gap-3 text-2xl lg:text-7xl pb-10 no-underline hover:underline"
            >
              Get in Touch
              <ArrowBigRightDash className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </a>
          </div>

          <hr className="h-px text-black bg-[rgb(0,0,0)] border-0  md:my-3 w-[70%]" />

          <p className="text-[rgb(96,93,93)] text-[12px] md:text-lg">
            &copy; {new Date().getFullYear()} Sanjay Kumar.
          </p>
        </footer>
      </div>
    );
}   
import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          "Welcome to [Job Portal Name], where we're dedicated to revolutionizing the job search experience. Our mission is simple but powerful: to connect job seekers with the right opportunities and help employers discover the best talent effortlessly. We understand that the job search journey can be challenging, so we've created a platform that makes it as straightforward as possible. We offer an extensive database of job listings covering a wide range of industries and positions, ensuring that you can find the job that suits your skills and aspirations. Our user-friendly interface streamlines the application process, making it easy for you to take the next step in your career. Whether you're a recent graduate seeking your first job or an experienced professional looking for new challenges, [Job Portal Name] is here to support you. Our commitment is to provide a platform that's transparent, reliable, and efficient, with a dedicated team ready to assist you at every turn. Join us today, and let's embark on your journey to success together."
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        "Welcome to [Job Portal Name], where we're dedicated to revolutionizing the job search experience. Our mission is simple but powerful: to connect job seekers with the right opportunities and help employers discover the best talent effortlessly. We understand that the job search journey can be challenging, so we've created a platform that makes it as straightforward as possible. We offer an extensive database of job listings covering a wide range of industries and positions, ensuring that you can find the job that suits your skills and aspirations. Our user-friendly interface streamlines the application process, making it easy for you to take the next step in your career. Whether you're a recent graduate seeking your first job or an experienced professional looking for new challenges, [Job Portal Name] is here to support you. Our commitment is to provide a platform that's transparent, reliable, and efficient, with a dedicated team ready to assist you at every turn. Join us today, and let's embark on your journey to success together."
        </p>
      </div>
    </div>
  );
};

export default About;

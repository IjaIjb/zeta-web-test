import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import CoreValues from "./CoreValues";
import FutureProof from "../home/FutureProof";
import PicturesAlone from "../home/PicturesAlone";
import LatestNews from "../home/LatestNews";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace("#", ""); // Remove the # from the hash
      scroller.scrollTo(target, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn about Zetakree Biotech's mission to revolutionize health with AI-powered insights, telomere research, and cutting-edge biotechnology innovations."
        />
        <meta
          name="keywords"
          content="About Zetakree, biotech innovation, longevity mission, health technology, AI health insights, Japheth Jonathan"
        />
        <meta name="author" content="Japheth Jonathan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>About Us - Zetakree Biotech</title> */}
      </Helmet>
      <div className="bg-[#262626] h-full  relative">
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover "
            style={{
              backgroundImage:
                "url('https://cdn.multiversx.com/webflow/Hero%20section%20background.webp')",
              // transform: "rotate(-100deg)", // Rotate the image slightly left
              transformOrigin: "center",
              top: "-20%",
              // backgroundSize: "80%", // Reduce or increase the size of the background image
              left: "-10%", // Push the image to the right side
              position: "absolute", // Ensure it's positioned correctly
            }}
          ></div>

          <div className="lg:p-3 p-2 flex w-full  justify-center ">
            <div className="max-w-[2000px] overflow-hidden z-10 bg-black rounded-[50px]  w-full">
              <div className="bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20% w-full rounded-[15px]  pt-[6px]">
                <div className="flex justify-center">
                  <div className="max-w-[2000px]  lg:px-14 px-3 w-full">
                    <div className=" flex justify-center">
                      <Navbar />
                    </div>
                    <div className="">
                      <div className="flex justify-center mt-[170px]">
                        {/* <div className="bg-[#0A201D] flex gap-2 hover:gap-4 cursor-pointer items-center p-2 rounded-full">
                  <div className="bg-[#23F7DD] text-[8px] px-1 rounded-full">New</div>
               <h5 className="text-[#F5F5F5] text-[12px]">Spica 1.8 Live on Mainnet</h5>
                </div> */}
                      </div>
                      <div id="whoweare" className="flex justify-center ">
                        <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px]  z-10 text-[40px] lg:text-[4rem] ">
                          Who We Are
                        </h3>
                      </div>
                      <div className="flex justify-center">
                        <h3 className="text-[#737373] z-10 text-center max-w-[900px] text-[19px] md:text-[25px] ">
                          Zetakree Biotech is a leader in AI-powered
                          biotechnology and longevity solutions. Our mission is
                          to harness data, technology, and science to combat
                          aging and improve health outcomes. With a focus on
                          telomere research, predictive analytics, and health
                          optimization, we are reshaping the future of medicine
                        </h3>
                      </div>

                      <div className="flex mt-5 mb-10 justify-center">
                        <div className="lg:flex z-10 gap-4">
                          <Link
                            to={"/research"}
                            className="flex z-10 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]"
                          >
                            Explore Our Innovations
                            <svg
                              width="31"
                              height="30"
                              viewBox="0 0 31 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 25.3594L11 22.7812V4.6875L20 7.26562V25.3594ZM21.5 25.2656V7.17188L27.4531 4.78125C28.1562 4.5 29 5.01562 29 5.8125V21.5156C29 21.9844 28.7188 22.4062 28.25 22.5469L21.5 25.2656ZM2.70312 7.5L9.5 4.78125V22.875L3.5 25.2656C2.79688 25.5469 2 25.0312 2 24.2344V8.53125C2 8.0625 2.28125 7.64062 2.70312 7.5Z"
                                fill="#F5F5F5"
                              ></path>
                            </svg>
                          </Link>

                          <Link
                            to={"/contact-us"}
                            className="flex z-10 mt-3 lg:mt-0 gap-2 py-2 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>

                      <div className="relative ">
                        <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                          <div
                            style={{
                              transform: "rotate(40deg)", // Rotate the image slightly left
                              transformOrigin: "center",
                              top: "-180%",
                              left: "-20%", // Push the image to the right side
                              position: "absolute", // Ensure it's positioned correctly
                              zIndex: 1, // Ensure the image is behind the gradient
                            }}
                            className="absolute w-[400px] h-[400px]"
                          >
                            <img
                              src="https://cdn.multiversx.com/webflow/Glass%20shield%404-1080x1080%202.webp"
                              alt=""
                              loading="eager"
                              className="absolute w-full h-full object-cover"
                            />
                          </div>
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20%"
                            style={{
                              left: "-10%",
                              top: "-70%",
                              zIndex: 2, // Ensure the gradient is above the image
                            }}
                          ></div>
                        </div>
                        <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                          <div
                            style={{
                              transform: "rotate(-70deg)", // Rotate the image slightly left
                              transformOrigin: "center",
                              top: "-180%",
                              right: "-25%", // Push the image to the right side
                              position: "absolute", // Ensure it's positioned correctly
                              zIndex: 1, // Ensure the image is behind the gradient
                            }}
                            className="absolute w-[550px] h-[550px]"
                          >
                            <img
                              src="https://cdn.multiversx.com/webflow/Glass%20shield%404-1080x1080%201.webp"
                              alt=""
                              loading="eager"
                              className="absolute w-full h-full object-cover"
                            />
                          </div>
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20%"
                            style={{
                              right: "-10%",
                              top: "-70%",
                              zIndex: 2, // Ensure the gradient is above the image
                            }}
                          ></div>
                        </div>
                        <div className="z-20 flex justify-center">
                          <div className="max-w-[1100px] w-full">
                            <div className="grid md:grid-cols-2 gap-5 w-full">
                              {/* Mission */}
                              <div
                                id="mission"
                                className="bg-[#262626] w-full z-10 rounded-[1rem] py-7 px-5 flex flex-col justify-between"
                              >
                                <h6 className="text-[#EFEFEF] md:text-[18px] text-[15px]">
                                  Our mission is to empower individuals to live
                                  longer, healthier lives using cutting-edge AI
                                  and biotechnology.
                                </h6>
                                <h6 className="text-[#23F7DD] self-end text-end text-[35px]">
                                  Our Mission
                                </h6>
                              </div>

                              {/* Vision */}
                              <div
                                id="vision"
                                className="bg-[#262626] w-full z-10 rounded-[1rem] py-7 px-5 flex flex-col justify-between"
                              >
                                <h6 className="text-[#EFEFEF] md:text-[18px] text-[15px]">
                                  We envision a world where aging-related
                                  diseases are eradicated, and personalized
                                  health solutions are accessible to everyone.
                                </h6>
                                <h6 className="text-[#23F7DD] self-end text-end text-[35px]">
                                  Our Vision
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-10">
          <div className="max-w-[2000px] md:px-20 px-4 w-full">
            <div className="flex justify-center text-center">
              <h4 className="text-[40px] text-white py-4">Meet the Team</h4>
            </div>

            <div className="grid mlg:grid-cols-3 md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="border border-black shadow-2xl rounded-[10px]">
                  <div className="flex border-b pt-4 border-black justify-center">
                    <img
                      src="/images/teamCEO1.jpg"
                      className=" h-[300px]"
                      alt="/"
                    />
                  </div>
                  <div className="px-9 py-3 text-white">
                    <div className="flex justify-between">
                      {/* Tooltip Container */}
                      <div className="relative">
                        <h5 className="text-[20px] font-[600] cursor-pointer">
                          Jonathan Reekurt
                        </h5>
                        {/* Tooltip */}
                        {/* <div className="absolute bottom-full left-[110px] transform -translate-x-1/2 mb-2 w-[300px] bg-black text-white text-sm rounded-md shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Zeta Jonathan is the CEO with over 10 years of experience in leadership and innovation.
          </div> */}
                      </div>
                      {/* <svg
          width="8%"
          height="8%"
          viewBox="0 0 30 30"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
            fill="white"
          ></path>
        </svg> */}
                      <div className="flex space-x-4 ">
                        <a
                          href="mailto:jonathan.reekurt@zetakree.com"
                          className="text-gray-300 hover:text-blue-400"
                          title="Email"
                        >
                          <IoMail className="w-7 h-7" />
                        </a>
                        <a
                          href={
                            "https://www.linkedin.com/in/jonathan-reekurt-31454833b/"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400"
                          title="LinkedIn"
                        >
                          <FaLinkedin className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-gray-300">
                      Founder & CEO | Software Engineer
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="border border-black shadow-2xl rounded-[10px]">
                  <div className="flex border-b pt-4 border-black justify-center">
                    <img
                      src="/images/rteam3.jpg"
                      className="w-[300px] h-[300px]"
                      alt="/"
                    />
                  </div>
                  <div className="px-9 py-3 text-white">
                    <div className="flex justify-between">
                      {/* Tooltip Container */}
                      <div className="relative">
                        <h5 className="text-[20px] font-[600] cursor-pointer">
                          Chaitanya Vankireddy
                        </h5>

                        {/* Tooltip */}
                        {/* <div className="absolute bottom-full left-[110px] transform -translate-x-1/2 mb-2 w-[300px] bg-black text-white text-sm rounded-md shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Zeta Jonathan is the CEO with over 10 years of experience in leadership and innovation.
          </div> */}
                      </div>
                      {/* <svg
          width="8%"
          height="8%"
          viewBox="0 0 30 30"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
            fill="white"
          ></path>
        </svg> */}
                      <div className="flex space-x-4 ">
                        <a
                          href={`mailto:`}
                          className="text-gray-300 hover:text-blue-400"
                          title="Email"
                        >
                          <IoMail className="w-7 h-7" />
                        </a>
                        <a
                          href={
                            "https://www.linkedin.com/in/chaitanya-vankireddy-75656a129"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400"
                          title="LinkedIn"
                        >
                          <FaLinkedin className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-gray-300">Head of Research</h4>
                  </div>
                </div>
              </div>

            
              <div className="relative group">
                <div className="border border-black shadow-2xl rounded-[10px]">
                  <div className="flex border-b pt-4 border-black justify-center">
                    <img
                      src="/images/rteam4.jpg"
                      className="w-[300px] h-[300px]"
                      alt="/"
                    />
                  </div>
                  <div className="px-9 py-3 text-white">
                    <div className="flex justify-between">
                      {/* Tooltip Container */}
                      <div className="relative">
                        <h5 className="text-[20px] font-[600] cursor-pointer">
                          Omeiza Alabi
                        </h5>
                        {/* Tooltip */}
                        {/* <div className="absolute bottom-full left-[110px] transform -translate-x-1/2 mb-2 w-[300px] bg-black text-white text-sm rounded-md shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Zeta Jonathan is the CEO with over 10 years of experience in leadership and innovation.
          </div> */}
                      </div>
                      {/* <svg
          width="8%"
          height="8%"
          viewBox="0 0 30 30"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
            fill="white"
          ></path>
        </svg> */}
                      <div className="flex space-x-4 ">
                        <a
                          href="mailto:omeiza@zetakree.com"
                          className="text-gray-300 hover:text-blue-400"
                          title="Email"
                        >
                          <IoMail className="w-7 h-7" />
                        </a>
                        <a
                          href={
                            "https://www.linkedin.com/in/omeiza-alabi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400"
                          title="LinkedIn"
                        >
                          <FaLinkedin className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-gray-300">Chief Technology Officer</h4>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="border border-black shadow-2xl rounded-[10px]">
                  <div className="flex border-b pt-4 border-black justify-center">
                    <img
                      src="/images/rteam5.jpg"
                      className="w-[300px] h-[300px]"
                      alt="/"
                    />
                  </div>
                  <div className="px-9 py-3 text-white">
                    <div className="flex justify-between">
                      {/* Tooltip Container */}
                      <div className="relative">
                        <h5 className="text-[20px] font-[600] cursor-pointer">
                          Stephanie Osayameh
                        </h5>
                        {/* Tooltip */}
                        {/* <div className="absolute bottom-full left-[110px] transform -translate-x-1/2 mb-2 w-[300px] bg-black text-white text-sm rounded-md shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Zeta Jonathan is the CEO with over 10 years of experience in leadership and innovation.
          </div> */}
                      </div>
                      {/* <svg
          width="8%"
          height="8%"
          viewBox="0 0 30 30"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
            fill="white"
          ></path>
        </svg> */}
                      <div className="flex space-x-4 ">
                        <a
                          href={`mailto:`}
                          className="text-gray-300 hover:text-blue-400"
                          title="Email"
                        >
                          <IoMail className="w-7 h-7" />
                        </a>
                        <a
                          href={
                            "https://www.linkedin.com/in/stephanieosayameh/"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400"
                          title="LinkedIn"
                        >
                          <FaLinkedin className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-gray-300">Chief Operation Officer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="coreValues">
        <CoreValues />
      </div> */}
        <FutureProof />
        {/* <PicturesAlone /> */}

        {/* <LatestNews /> */}

        <Footer />
      </div>
    </>
  );
};

export default About;

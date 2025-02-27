import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import FocusArea from "./FocusArea";
import Footer from "../../component/Footer";
import PicturesAlone from "../home/PicturesAlone";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import ResearchServices from "./ResearchServices";
import { Link } from "react-router-dom";

const Research = () => {
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
    <div className="bg-[#262626] h-full  relative">
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
              <div className="bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20% w-full rounded-[15px] pb-[150px] pt-[6px]">
                <div className="flex justify-center">
                  <div className="max-w-[2000px]  lg:px-14 px-3 w-full">
                    <div className=" flex justify-center">
                      <Navbar />
                    </div>
                    <div className="relative">
                      <div className="flex justify-center mt-[200px]">
                        {/* <div className="bg-[#0A201D] flex gap-2 hover:gap-4 cursor-pointer items-center p-2 rounded-full">
                  <div className="bg-[#23F7DD] text-[8px] px-1 rounded-full">New</div>
               <h5 className="text-[#F5F5F5] text-[12px]">Spica 1.8 Live on Mainnet</h5>
                </div> */}
                      </div>
                      <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                        <div
                          style={{
                            transform: "rotate(-10deg)", // Rotate the image slightly left
                            transformOrigin: "center",
                            top: "-60%",
                            left: "-16%", // Push the image to the right side
                            position: "absolute", // Ensure it's positioned correctly
                            zIndex: 1, // Ensure the image is behind the gradient
                          }}
                          className="absolute w-[700px] opacity-50 h-[700px]"
                        >
                          <img
                            src="https://cdn.multiversx.com/webflow/Astronaut-Floating.webp"
                            alt=""
                            loading="eager"
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-1 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-16% from-10%"
                          style={{
                            left: "-10%",
                            top: "70%",
                            zIndex: 2, // Ensure the gradient is above the image
                          }}
                        ></div>
                      </div>
                      <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                        <div
                          style={{
                            transform: "rotate(-70deg)", // Rotate the image slightly left
                            transformOrigin: "center",
                            top: "-100%",
                            right: "-15%", // Push the image to the right side
                            position: "absolute", // Ensure it's positioned correctly
                            zIndex: 1, // Ensure the image is behind the gradient
                          }}
                          className="absolute w-[550px] opacity-40 h-[550px]"
                        >
                          <img
                            src="https://cdn.multiversx.com/webflow/ecosystem_visual-1.webp"
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
                            top: "70%",
                            zIndex: 2, // Ensure the gradient is above the image
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-center ">
                        <h3 className="text-[#f5f5f5] text-center max-w-[700px] leading-[45px] lg:leading-[80px]  z-10 text-[40px] lg:text-[4rem] ">
                        Longevity is a Code. We’ve Cracked It.
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FocusArea />

        <ResearchServices />

        {/* <PicturesAlone /> */}

        <Footer />
      </div>
    </div>
  );
};

export default Research;

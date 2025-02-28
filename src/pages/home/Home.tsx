import React from "react";
// import { RiArrowRightUpLine } from "react-icons/ri";
import LetsMake from "./LetsMake";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Secure from "./Secure";
import FutureProof from "./FutureProof";
import ExploreEco from "./ExploreEco";
import PicturesAlone from "./PicturesAlone";
// import LatestNews from "./LatestNews";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Welcome to Zetakree Biotech – where AI and biotechnology redefine longevity. Discover innovative health solutions to combat aging and enhance life quality."
        />
        <meta
          name="keywords"
          content="Zetakree Biotech, longevity, AI health insights, anti-aging, biotechnology, health solutions, personalized wellness"
        />
        <meta name="author" content="Japheth Jonathan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>Home - Zetakree Biotech</title> */}
      </Helmet>

      <div className="bg-[#262626] h-full">
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
            <div className=" overflow-hidden z-10 bg-black  rounded-[50px]  w-full">
              {/* <div className="bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20% w-full rounded-[15px]  pt-[6px]"> */}
              <div className="flex justify-center">
                <div className="max-w-[2000px] mx-auto z-50 lg:px-14 px-3 w-full">
                  <div className=" flex justify-center">
                    <Navbar />
                  </div>
                  <div className="">
                    <div className="flex justify-center mt-[200px]">
                      {/* <div className="bg-[#0A201D] flex gap-2 hover:gap-4 cursor-pointer items-center p-2 rounded-full">
                      <div className="bg-[#23F7DD] text-[8px] px-1 rounded-full">
                        New
                      </div>
                      <h5 className="text-[#F5F5F5] text-[12px]">
                        Spica 1.8 Live on Mainnet
                      </h5>
                    </div> */}
                    </div>
                    <div className="flex justify-center ">
                      <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px]  z-10 text-[40px] lg:text-[4rem] ">
                      {/* Aging is a disease. We are the cure. */}
                      Welcome to Zetakree Biotech
                     
                      </h3>
                    </div>
                    {/* New Tagline */}
<div className="flex justify-center mt-2">
  <h3 className="text-[#4ADE80] font-semibold text-center text-[24px] lg:text-[30px]">
    Aging is a disease. We are the cure.
  </h3>
</div>
{/* New Subtext */}
{/* <div className="flex justify-center mt-2">
  <h3 className="text-[#737373] z-10 max-w-[900px] text-center text-[19px] md:text-[22px]">
    For centuries, humanity accepted aging as inevitable. But today, we stand
    at the edge of immortality. The first humans to live beyond 150 are among us. Will
    you be one of them?
  </h3>
</div> */}
                    <div className="flex justify-center mt-2">
                      <h3 className="text-[#737373] z-10 max-w-[800px] text-center text-[19px] md:text-[25px] ">
                        {/* Welcome to Zetakree Biotech, where science, AI, and
                        innovation converge to redefine longevity and improve
                        lives. */}
                      For centuries, humanity accepted aging as inevitable. But today, we stand
at the edge of immortality. The first humans to live beyond 150 are among us. Will
you be one of them?
                      </h3>
                    </div>

                    <div className="flex mt-5 mb-10 justify-center">
                      <div className="lg:flex z-10 gap-4">
                        <Link
                          to={"/research"}
                          className="flex z-10 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]"
                        >
                          Join the ZetaKree Movement
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
                          to={"/research"}
                          className="flex lg:mt-0 mt-3 z-10 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]"
                        >
                         Invest in the Future
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
                          to={"/research"}
                          className="flex z-10 lg:mt-0 mt-3 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]"
                        >
                        Explore the Science
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
                         {/* <Link
                                    to={"/contact-us"}
                                     className="flex z-10 mt-3 lg:mt-0 gap-2 py-2 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]">
                          Contact Us
                        </Link> */}
                      </div>
                    </div>

                    <div className="relative ">
                      <div className="absolute lg:block hidden w-full h-full inset-0 bg-cover">
                        <div
                          style={{
                            transform: "rotate(-40deg)", // Rotate the image slightly left
                            transformOrigin: "center",
                            top: "-70%",
                            left: "-10%", // Push the image to the right side
                            position: "absolute", // Ensure it's positioned correctly
                            zIndex: 1, // Ensure the image is behind the gradient
                          }}
                          className="absolute w-[400px] h-[400px]"
                        >
                          <img
                            src="https://cdn.multiversx.com/webflow/Home-Hero-Bg-03.webp"
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
                            right: "-45%", // Push the image to the right side
                            position: "absolute", // Ensure it's positioned correctly
                            zIndex: 1, // Ensure the image is behind the gradient
                          }}
                          className="absolute w-[750px] h-[750px]"
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
                        <div className="max-w-[1100px]">
                          <div className="grid grid-cols-12 gap-5 w-full">
                            <div className="lg:col-span-5 md:col-span-6 col-span-12 flex flex-col gap-3 w-full">
                              <div className="bg-[#262626] h-full lg:h-fit z-10 rounded-[1rem] py-7 px-5">
                                <div className="flex items-center justify-between">
                                  <h6 className="text-[#737373] text-[15px]">
                                    Current Research Projects
                                  </h6>
                                  <h6 className="text-[#23F7DD] text-[35px]">
                                    10<span className="opacity-60">+</span>
                                  </h6>
                                </div>
                              </div>
                              <div className="bg-[#262626] lg:block hidden z-10 rounded-[1rem] py-7 px-5">
                                <div className="flex flex-col ">
                                  <h6 className="text-[#737373] text-[15px]">
                                    Active Collaboration Partners
                                  </h6>
                                  <h6 className="text-[#23F7DD] text-end text-[35px]">
                                    4+
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[#262626]  md:col-span-6 col-span-12 lg:hidden block z-10 rounded-[1rem] py-7 px-5">
                              <div className="flex flex-col ">
                                <h6 className="text-[#737373] text-[15px]">
                                  Active Collaboration Partners
                                </h6>
                                <h6 className="text-[#23F7DD] text-end text-[35px]">
                                  4+
                                </h6>
                              </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-6  col-span-12 lg:place-self-end w-full">
                              <div className="z-20 relative ">
                                <div
                                  className="bg-[#262626] w-full relative z-20 rounded-[1rem] pb-7 pt-[100px] px-5 bg-cover bg-center"
                                  style={{
                                    backgroundImage:
                                      "url('https://cdn.multiversx.com/webflow/validator-map.webp')",
                                    zIndex: 100,
                                  }}
                                >
                                  <h6 className="text-[#737373] text-[15px]">
                                    Lives Improved Globally
                                  </h6>
                                  <h6 className="text-[#23F7DD] text-end text-[35px]">
                                    100+
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="lg:col-span-3 md:col-span-6 col-span-12">
                              <div className="relative z-10 bg-[#262626] rounded-[1rem] py-7 h-full px-5 overflow-hidden flex flex-col">
                                <div
                                  className="absolute inset-0 bg-cover "
                                  style={{
                                    backgroundImage:
                                      "url('https://cdn.multiversx.com/webflow/carbon-free_planet.avif')",
                                    transform: "rotate(-100deg)", // Rotate the image slightly left
                                    transformOrigin: "center",
                                    backgroundSize: "80%", // Reduce or increase the size of the background image
                                    right: "-60%", // Push the image to the right side
                                    position: "absolute", // Ensure it's positioned correctly
                                  }}
                                ></div>
                                <div className="relative z-10">
                                  <h6 className="text-[#737373] text-[15px]">
                                    AI-Driven Models/Biotech Solutions Deployed
                                  </h6>
                                </div>

                                <div className="mt-auto relative z-10">
                                  <h3 className="text-[#4ADE80] max-w-[200px] leading-[40px] text-[35px]">
                                    10+
                                  </h3>
                                  {/* <div className="bg-[#4ADE80] w-fit flex items-center gap-1 px-2 py-2 rounded-[8px]">
                                  Sustainability
                                  <RiArrowRightUpLine />
                                </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <h4 className="text-center text-[#F5F5F5] text-[14px] opacity-40 py-10">
                        Integrations and tools from leading companies around the
                        globe
                      </h4>
                    </div>

                    <div className="flex justify-center pb-10">
                      <div className="max-w-[2000px] md:px-14 px-4 w-full">
                        <div className="lg:flex hidden justify-between gap-5">
                          <img
                            src="https://cdn.multiversx.com/webflow/google-cloud-logo.svg"
                            alt="Google Cloud"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/Telekom.svg"
                            alt="Telekom"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/tencent-cloud.svg"
                            alt="Tencent Cloud"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/logo-aws.svg"
                            alt="AWS"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/AXELAR.svg"
                            alt="AXELAR"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/Ledger.svg"
                            alt="Ledger"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/Opera.svg"
                            alt="Opera"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                        </div>

                        <div className="grid grid-cols-3 justify-center lg:hidden gap-5">
                          <img
                            src="https://cdn.multiversx.com/webflow/google-cloud-logo.svg"
                            alt="Google Cloud"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/Telekom.svg"
                            alt="Telekom"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/tencent-cloud.svg"
                            alt="Tencent Cloud"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/logo-aws.svg"
                            alt="AWS"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/AXELAR.svg"
                            alt="AXELAR"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/Ledger.svg"
                            alt="Ledger"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                          <img
                            src="https://cdn.multiversx.com/webflow/Opera.svg"
                            alt="Opera"
                            loading="lazy"
                            className="home-partner_logo"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <LetsMake />
        {/* <FeaturedPartners /> */}
        <Secure />
        <FutureProof />
        <ExploreEco />
        <PicturesAlone />
        {/* <LatestNews /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;

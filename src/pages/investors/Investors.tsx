import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

const Investors = () => {
  return (
    <div>

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
            <div className="max-w-[2000px] overflow-hidden z-10 pb-7 bg-black rounded-[50px]  w-full">
              <div className="bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20% w-full rounded-[15px]  pt-[6px]">
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
                        {/* <div
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
                        </div> */}
                        {/* Gradient overlay */}
                        {/* <div
                          className="absolute inset-1 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-16% from-10%"
                          style={{
                            left: "-10%",
                            top: "70%",
                            zIndex: 2, // Ensure the gradient is above the image
                          }}
                        ></div> */}
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
                        {/* <div
                          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20%"
                          style={{
                            right: "-10%",
                            top: "70%",
                            zIndex: 2, // Ensure the gradient is above the image
                          }}
                        ></div> */}
                      </div>
                      <div className=" text-white  px-5 lg:px-20 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent opacity-40"></div> */}
      
      {/* Headline */}
      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-[#f5f5f5] max-w-4xl leading-tight">
        Invest in the Dawn of a New Age.
      </h2>
      
      {/* FOMO Message */}
      <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-8">
        The trillion-dollar longevity industry is here. The question is—are you an early investor, or will you regret missing out?
      </p>

      {/* Investor Levels */}
      <div className="grid lg:grid-cols-3 gap-8 w-full ">
        <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#23F7DD]">Schrift A - The Almighty</h3>
          <p className="text-gray-400 mt-2">Highest tier, limited to 5 investors.</p>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#F5A623]">Schrift B - The Visionaries</h3>
          <p className="text-gray-400 mt-2">$1M+ investors, shaping ZetaKree’s direction.</p>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-semibold text-[#F5F5F5]">Schrift C - The Pioneers</h3>
          <p className="text-gray-400 mt-2">Early believers in the mission.</p>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="my-10">
        <Link to="/partnership" className="px-8 py-3 text-lg font-medium bg-[#23F7DD] text-black rounded-xl shadow-md hover:bg-[#1dd8c6] transition duration-300">
          Claim Your Schrift. Become a Founding Investor.
        </Link>
      </div>
    </div>
                    </div>
                    
                  </div>
                </div>
              </div>





              <div className="flex justify-center w-full">
                  <div className="max-w-[2000px]  lg:px-14 px-3 w-full">
                    {/* <div className=" flex justify-center"> */}
   {/* Inner Circle Section */}
   <section className="mt-20 w-full bg-gradient-to-r from-[#1e1e1e] to-[#2a2a2a] p-12 rounded-2xl text-center shadow-md border border-gray-700">
        <h3 className="text-4xl font-bold text-[#f5f5f5]">Unlock the Secrets of Life Extension</h3>
        <p className="text-gray-400 mt-4">To enter the Inner Circle, apply now. Seats are limited.</p>
      </section>
      
      {/* Final CTA */}
      <section className="mt-20 w-full p-10 bg-[#1c1c1c] rounded-2xl text-center shadow-md border border-gray-700">
        <h3 className="text-4xl font-bold text-[#f5f5f5]">The Future is Here. Are You In?</h3>
        <p className="text-lg text-gray-400 mt-4">Humanity has been waiting for this moment for centuries. The question is—will you act before it’s too late?</p>
        <div className="flex flex-col lg:flex-row gap-6 mt-6 justify-center">
          <Link to="/partnership" className="px-6 py-3 bg-[#23F7DD] text-black rounded-xl shadow-md hover:bg-[#1dd8c6] transition">Join the Movement</Link>
          <Link to="/partnership" className="px-6 py-3 bg-[#F5A623] text-black rounded-xl shadow-md hover:bg-[#d48b1e] transition">Request a Private Investor Meeting</Link>
          <Link to="/partnership" className="px-6 py-3 bg-[#F5F5F5] text-black rounded-xl shadow-md hover:bg-[#d4d4d4] transition">Apply for Research Partnerships</Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      {/* <section className="mt-20 w-full p-12 bg-[#282828] rounded-2xl shadow-lg border border-gray-700 text-center">
        <h3 className="text-4xl font-bold text-[#f5f5f5]">Voices of the Transcended</h3>
        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          <div className="p-6 bg-[#1e1e1e] rounded-2xl border border-gray-700 shadow-md">
            <h4 className="text-2xl font-semibold text-[#23F7DD]">Member Stories</h4>
            <p className="text-gray-400 mt-2">"How joining ZetaKree transformed my destiny."</p>
          </div>
          <div className="p-6 bg-[#2d2727] rounded-2xl border border-gray-700 shadow-md">
            <h4 className="text-2xl font-semibold text-[#F5A623]">Investor Experiences</h4>
            <p className="text-gray-400 mt-2">"Investing in eternity: A decision like no other."</p>
          </div>
          <div className="p-6 bg-[#252c39] rounded-2xl border border-gray-700 shadow-md">
            <h4 className="text-2xl font-semibold text-[#F5F5F5]">Scientific Endorsements</h4>
            <p className="text-gray-400 mt-2">"Leading experts on ZetaKree's groundbreaking work."</p>
          </div>
        </div>
      </section> */}
{/* </div> */}
</div>
</div>



            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>








    </div>
  )
}

export default Investors
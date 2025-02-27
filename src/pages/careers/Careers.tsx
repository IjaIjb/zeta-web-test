import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import CareerChoice from "./CareerChoice";
import PicturesAlone from "../home/PicturesAlone";
import LatestNews from "../home/LatestNews";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Careers = () => {
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
    <div>
      <div className="bg-black h-full  relative">
        <div className="bg-black h-full  relative">
          <div className="relative">
            {/* <div
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
            ></div> */}

            <div className="lg:p-2 p-2 flex w-full  justify-center ">
              <div className="relative max-w-[2000px]  overflow-hidden z-10 bg-[#0e0e0e] rounded-[20px] w-full ">
              {/* <div className="relative max-w-[2000px] h-screen overflow-hidden z-10 bg-[#0e0e0e] rounded-[20px] w-full bg-[url('https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1).webp')] bg-cover bg-center bg-no-repeat"> */}
                <div className="">
                  <div className="flex justify-center">
                    <div className="max-w-[2000px] lg:px-14 px-3 w-full">
                      <div className=" flex justify-center">
                        <Navbar />
                      </div>
                      <div id="join">
                        {/* <div className="flex justify-center mt-[60px]"></div> */}
                        <div className="flex justify-center mt-[180px]">
                          <div className="bg-[#0A201D] w-fit border border-[#6EFBF2] flex gap-2 hover:gap-4 cursor-pointer items-center px-1 rounded-full">
                            {/* <div className="bg-[#23F7DD] text-[8px] px-1 rounded-full">New</div> */}
                            <h5 className="text-[#6EFBF2] text-[12px]">
                              Careers
                            </h5>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px] z-10 text-[40px] lg:text-[45px]">
                            Contribute and make an impact
                          </h3>
                        </div>
                        <div className="flex justify-center">
                          <h3 className="text-[#737373] z-10 text-center text-[19px] md:text-[22px]">
                            Join one of the most resourceful technology teams in
                            the world.
                          </h3>
                        </div>
                        <div className="flex mt-5 mb-10 justify-center ">
                          <div className="lg:flex z-10 gap-4">
                            <div className="flex z-10 gap-2 justify-center py-1 text-white bg-[#262626] items-center text-[16px] px-3 rounded-[12px]">
                              See Open Roles
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 17 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.60156 17.3984L1.35156 11.1484C0.84375 10.6797 0.84375 9.85938 1.35156 9.39062C1.82031 8.88281 2.64062 8.88281 3.10938 9.39062L7.25 13.4922V1.5C7.25 0.835938 7.79688 0.25 8.5 0.25C9.16406 0.25 9.75 0.835938 9.75 1.5V13.4922L13.8516 9.39062C14.3203 8.88281 15.1406 8.88281 15.6094 9.39062C16.1172 9.85938 16.1172 10.6797 15.6094 11.1484L9.35938 17.3984C8.89062 17.9062 8.07031 17.9062 7.60156 17.3984Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <img src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1).webp" loading="eager" sizes="(max-width: 2528px) 100vw, 2528px" srcset="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1)-p-2000.webp 2000w, https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65ba103c2f207388cf1017e1_multiversx-team%20(1).webp 2528w" alt="Group photo of the MultiversX team on stage at xDays 2023" className="img_careers"></img> */}
            </div>
          </div>
          <div id="positions">
            <CareerChoice />
          </div>
          {/* <div id="internship">
            <PicturesAlone />
          </div> */}
          {/* <LatestNews /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Careers;

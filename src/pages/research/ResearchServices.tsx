import React from "react";
import { Link } from "react-router-dom";

const ResearchServices = () => {
  return (
    <div>
      <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
        <div className="flex justify-center mt-20">
          <div>
            <div className="flex justify-center mt-8">
              <h4 className="text-white text-[45px] leading-[60px] md:text-[70px] font-semibold text-center max-w-[800px]">
                Our Services
              </h4>
            </div>
            <div className="grid lg:grid-cols-12 gap-4 items-center ">
              <div className="col-span-6">
                <img
                  src="https://cdn.multiversx.com/webflow/egld-30mil.webp"
                  alt="Logos of Ecosystem projects"
                  loading="lazy"
                  className="featured_img"
                ></img>
              </div>

              <div className="col-span-6 px-6">
                <div className="flex flex-col gap-4">
                  <h4 className="text-white text-[29px] lg:max-w-[400px] font-semibold">
                    Longevity Prediction and Consultation
                  </h4>
                  <h4 className="text-[#737373] text-[19px] lg:max-w-[415px]">
                    Our AI software analyzes key biomarkers to predict your life
                    expectancy, enabling early interventions for a longer,
                    healthier life.
                  </h4>
                  <Link
                    to={"/research"}
                    className="flex whitespace-nowrap gap-4 z-[1] mt-3 w-fit lg:mt-0 py-3 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]"
                  >
                    Explore Our Innovations
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 25 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6719 8.79688L17.2969 15.1719C16.8281 15.6406 16.125 15.6406 15.7031 15.1719C15.2344 14.75 15.2344 14.0469 15.7031 13.5781L20.1562 9.125H1.125C0.46875 9.125 0 8.65625 0 8C0 7.39062 0.46875 6.875 1.125 6.875H20.1562L15.7031 2.42188C15.2344 2 15.2344 1.29688 15.7031 0.828125C16.125 0.40625 16.8281 0.40625 17.2969 0.828125L23.6719 7.25C24.0938 7.67188 24.0938 8.375 23.6719 8.79688Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4 items-center ">
              <div className="col-span-6 px-6">
                <div className="flex flex-col gap-4">
                  <h4 className="text-white text-[29px] lg:max-w-[400px] font-semibold">
                    Personalized Health Optimization Plans
                  </h4>
                  <h4 className="text-[#737373] text-[19px] lg:max-w-[415px]">
                    Tailored lifestyle and wellness plans designed to enhance
                    longevity, based on AI-driven insights and biomarker
                    analysis.
                  </h4>
                  <Link
                    to={"/research"}
                    className="flex whitespace-nowrap gap-4 z-[1] mt-3 w-fit lg:mt-0 py-3 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]"
                  >
                    Explore Our Innovations
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 25 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6719 8.79688L17.2969 15.1719C16.8281 15.6406 16.125 15.6406 15.7031 15.1719C15.2344 14.75 15.2344 14.0469 15.7031 13.5781L20.1562 9.125H1.125C0.46875 9.125 0 8.65625 0 8C0 7.39062 0.46875 6.875 1.125 6.875H20.1562L15.7031 2.42188C15.2344 2 15.2344 1.29688 15.7031 0.828125C16.125 0.40625 16.8281 0.40625 17.2969 0.828125L23.6719 7.25C24.0938 7.67188 24.0938 8.375 23.6719 8.79688Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="col-span-6">
                <img
                  src="https://cdn.multiversx.com/webflow/egld-limit.webp"
                  alt="Logos of Ecosystem projects"
                  loading="lazy"
                  className="featured_img"
                ></img>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4 items-center ">
              <div className="col-span-6">
                <img
                  src="https://cdn.multiversx.com/webflow/egld-stake.webp"
                  alt="Logos of Ecosystem projects"
                  loading="lazy"
                  className="featured_img"
                ></img>
              </div>

              <div className="col-span-6 px-6">
                <div className="flex flex-col gap-4">
                  <h4 className="text-white text-[29px] lg:max-w-[400px] font-semibold">
                    Health Data Integration and Analysis
                  </h4>
                  <h4 className="text-[#737373] text-[19px] lg:max-w-[415px]">
                    Seamlessly integrate wearable data, digital health records,
                    and lab results for actionable insights and predictive
                    diagnostics.
                  </h4>
                  <Link
                    to={"/research"}
                    className="flex whitespace-nowrap gap-4 z-[1] mt-3 w-fit lg:mt-0 py-3 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]"
                  >
                    Explore Our Innovations
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 25 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6719 8.79688L17.2969 15.1719C16.8281 15.6406 16.125 15.6406 15.7031 15.1719C15.2344 14.75 15.2344 14.0469 15.7031 13.5781L20.1562 9.125H1.125C0.46875 9.125 0 8.65625 0 8C0 7.39062 0.46875 6.875 1.125 6.875H20.1562L15.7031 2.42188C15.2344 2 15.2344 1.29688 15.7031 0.828125C16.125 0.40625 16.8281 0.40625 17.2969 0.828125L23.6719 7.25C24.0938 7.67188 24.0938 8.375 23.6719 8.79688Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchServices;

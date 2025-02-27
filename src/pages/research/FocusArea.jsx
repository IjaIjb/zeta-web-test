import React from "react";

const FocusArea = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}

            <div className="flex justify-center mt-8">
              <h4 className="text-white text-[45px] leading-[60px] md:text-[70px] font-semibold text-center max-w-[800px]">
              AI-Powered Health Platform
              </h4>
            </div>

            {/* <div className="flex justify-center mt-2">
              <h4 className="text-[#737373] text-[18px]   text-center max-w-[600px]">
                Discover the places where the community gathers and the live
                community sessions happening.
              </h4>
            </div> */}
            <div className="flex justify-between items-center mb-5">
              <div className="">
                <h4 className="text-[25px] text-white font">Key Focus Areas</h4>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-1 md:grid-cols-2">
              <div className="bg-[#0F1A18] rounded-[13px]  items-center pl-5 pr-3 pt-6 pb-16">
                <h5 className="text-[#23F7DD] text-[20px]">Longevity Research</h5>
                <h6 className="text-[#E5E5E5] pt-2">Extending lifespan through studies in telomeres, biomarkers, and cellular health.</h6>
              </div>

              <div className="bg-[#111814] rounded-[13px]  items-center  pl-5 pr-3 pt-6 pb-16">
                <h5 className="text-[#4ADE80] text-[20px]">AI-Powered Health Insights</h5>
                <h6 className="text-[#E5E5E5] pt-2">Using advanced algorithms to predict health outcomes and recommend longevity-enhancing interventions.</h6>
              </div>
              <div className="bg-[#1A170E] rounded-[13px]  items-center  pl-5 pr-3 pt-6 pb-16">
                <h5 className="text-[#FACC15] text-[20px]">Telomere Research</h5>
                <h6 className="text-[#E5E5E5] pt-2">Preserving and restoring telomeres to combat cellular aging at its core.</h6>
              </div>
      
              <div className="bg-[#17141A] rounded-[13px]  items-center  pl-5 pr-3 pt-6 pb-16">
                <h5 className="text-[#C084FC] text-[20px]">Software Development</h5>
                <h6 className="text-[#E5E5E5] pt-2">Creating intuitive platforms that integrate health data, diagnostics, and wellness tools.</h6>
              </div>
      
            </div>

            <div className="flex justify-between items-center mt-8 mb-5">
              <div className="">
                <h4 className="text-[25px] text-white font">Projects</h4>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
              <div className="bg-[#171717] rounded-[13px] flex flex-col justify-center text-center items-center px-5 py-10">
              <div className="bg-gradient-to-r from-[rgba(0,186,86,0.6)] via-[rgba(0,150,171,0.6)] to-[rgba(201,88,169,0.6)] p-[2px] rounded-full">
                          <div className="bg-[#171717] text-white text-[12px] rounded-full px-4 py-0">
                          Ongoing
                          </div>
                        </div>
               <h6 className="text-[#E5E5E5] pt-2">Development of our AI health platform for real-time vitals and wellness tracking.
               </h6>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex flex-col text-center justify-center items-center px-5 py-10">
              <div className="bg-gradient-to-r from-[rgba(0,186,86,0.6)] via-[rgba(0,150,171,0.6)] to-[rgba(201,88,169,0.6)] p-[2px] rounded-full">
                          <div className="bg-[#171717] text-white text-[12px] rounded-full px-4 py-0">
                          Ongoing
                          </div>
                        </div>
                <h6 className="text-[#E5E5E5] pt-2">Advanced telomere therapies to slow cellular aging.
                </h6>
              </div>
              <div className="bg-[#171717] rounded-[13px] flex flex-col text-center justify-center items-center px-5 py-10">
              <div className="bg-gradient-to-r from-[rgba(0,186,86,0.6)] via-[rgba(0,150,171,0.6)] to-[rgba(201,88,169,0.6)] p-[2px] rounded-full">
                          <div className="bg-[#171717] text-white text-[12px] rounded-full px-4 py-0">
                     Live
                          </div>
                        </div>
                <h6 className="text-[#E5E5E5] pt-2">AI-based models for predicting life expectancy and identifying disease risks.
                </h6>
              </div>
      
           
      
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default FocusArea;

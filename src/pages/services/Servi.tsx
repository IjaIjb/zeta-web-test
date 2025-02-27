import React from "react";

const Servi = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}
            <div className="flex justify-between items-center mb-5">
              <div className="">
                <h4 className="text-[25px] text-white font">Services</h4>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">Contract Research</h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">Clinical Trials</h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">
                  Data Analysis Services
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-[20px]">
                  Custom Biomedical Solutions
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servi;

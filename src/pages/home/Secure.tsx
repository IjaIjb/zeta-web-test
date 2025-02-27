import React from "react";

const Secure = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="flex justify-center">
            <div className="bg-[#0A201D] border border-[#6EFBF2] flex gap-2 hover:gap-4 cursor-pointer items-center p-2 rounded-full">
              {/* <div className="bg-[#23F7DD] text-[8px] px-1 rounded-full">New</div> */}
              <h5 className="text-[#6EFBF2] text-[12px]">The EGLD Token</h5>
            </div>
          </div>

          <div className="flex justify-center">
            <h4 className="text-center text-white text-[40px] md:text-[55px] ">
            Discover Our Upcoming Health App

            </h4>
          </div>
          <div className="flex justify-center">
            <h4 className="text-[#737373] text-center text-[18px] max-w-[750px]">
            Empowering health and longevity through real-time tracking, AI-driven insights, and personalized wellness solutions. From predicting longevity to monitoring chronic conditions, our app is designed to guide you towards a healthier, longer life.
            </h4>
          </div>

          <div className="flex mt-5 mb-10 text-center justify-center">
            <div className="lg:flex justify-center gap-4">
              <div className="flex whitespace-nowrap gap-4 mt-3 w-fit lg:mt-0 py-3 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]">
                Stake EGLD
                <svg
                  className="w-5 h-5 z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1.5C24 6.84375 20.0156 11.25 14.8594 11.9062C14.5312 9.42188 13.4531 7.17188 11.8125 5.39062C13.5938 2.20312 17.0625 0 21 0H22.5C23.2969 0 24 0.703125 24 1.5ZM0 4.5C0 3.70312 0.65625 3 1.5 3H3C8.76562 3 13.5 7.73438 13.5 13.5V15V22.5C13.5 23.3438 12.7969 24 12 24C11.1562 24 10.5 23.3438 10.5 22.5V15C4.6875 15 0 10.3125 0 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex md:mt-0 mt-5 whitespace-nowrap  gap-4 justify-center py-3 text-white bg-[#171717] items-center text-[16px] px-3  rounded-[12px]">
                What is EGLD?
                <svg
                  className="w-5 h-5 z-10"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6719 8.79688L17.2969 15.1719C16.8281 15.6406 16.125 15.6406 15.7031 15.1719C15.2344 14.75 15.2344 14.0469 15.7031 13.5781L20.1562 9.125H1.125C0.46875 9.125 0 8.65625 0 8C0 7.39062 0.46875 6.875 1.125 6.875H20.1562L15.7031 2.42188C15.2344 2 15.2344 1.29688 15.7031 0.828125C16.125 0.40625 16.8281 0.40625 17.2969 0.828125L23.6719 7.25C24.0938 7.67188 24.0938 8.375 23.6719 8.79688Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secure;

import React from "react";
import { Link } from "react-router-dom";

const ExploreEco = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-4 items-center lg:-mt-20">
        <div className="col-span-7">
          <img
            src="https://cdn.multiversx.com/webflow/ecosystem-visual.webp"
            alt="Logos of Ecosystem projects"
            loading="lazy"
            className="featured_img"
          ></img>
        </div>

        <div className="col-span-5 px-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[29px] lg:max-w-[200px] font-semibold">
              Explore Our Innovations
            </h4>
            <h4 className="text-[#737373] text-[19px] lg:max-w-[315px]">
              Learn more about how our technologies and research are
              transforming the future of health and longevity
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
  );
};

export default ExploreEco;

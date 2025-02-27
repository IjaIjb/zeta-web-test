import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedPartners = () => {
  const carouselRefTwo = useRef(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // optional, default to 1.
    },
  };
  // Function to manually trigger left navigation
  const handlePrevClickOne = () => {
    carouselRefTwo.current.previous();
  };

  // Function to manually trigger right navigation
  const handleNextClickOne = () => {
    carouselRefTwo.current.next();
  };
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}
            <div className="flex justify-between items-center mb-5">
              <div className="">
                <h4 className="md:text-[25px] text-white font">
                  Feature Partners
                </h4>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                  <button
                    className="border-[#404040] border text-white p-2 rounded-full"
                    onClick={handlePrevClickOne}
                  >
                    <IoIosArrowBack />
                  </button>

                  <button
                    className="border-[#404040] border  text-white p-2 rounded-full"
                    onClick={handleNextClickOne}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>

                <div className="bg-[#171717] py-4 px-8 rounded-[12px] text-white text-[9px]">
                  View all
                </div>
              </div>
            </div>

            <div className="">
              <Carousel
                ref={carouselRefTwo}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // render carousel on server-side.
                infinite={true}
                rtl={false}
                autoPlay={true} // Disable autoplay to prevent conflict with manual navigation
                autoPlaySpeed={7000} // Optional: You can remove this if autoplay is disabled
                // keyBoardControl={true}
                transitionDuration={500} // Set transition to 500ms for smoother experience
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="rounded-[7px] space-x-4"
                arrows={false} // Hide default arrows
              >
                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652ce80c184325a05b50d_logo_1.svg"
                      className="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Entangle</h4>
                    <h4 className="text-[#737373] text-[13px]">Messaging...</h4>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Chainlink"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cffe1ff665b895c94e_5f760a499b56c47b8fa74fbb_chainlink_logo.svg"
                      class="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Chainlink</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Inspect"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c53061e1aff334cc55_logo_inspect.svg"
                      class="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Inspect</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Flipside Crypto"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b78958a78fff262112b140_flipside-crypto-logo-vector%201.svg"
                      className=" w-[150px] h-[150px] partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">
                      Flipside Crypto
                    </h4>
                    <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="BNB Chain"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c73122289ac2fba741_bnb_chain_full_binance_smart_chain_logo.svg"
                      class="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">BNB Chain</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      A community driven...
                    </h4>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="INDODAX"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652d213bba4915a0d8b41_INDODAX.svg"
                      class="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">INDODAX</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Crypto Exchange...
                    </h4>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Chainlink"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cffe1ff665b895c94e_5f760a499b56c47b8fa74fbb_chainlink_logo.svg"
                      class="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">MoonPay</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Your Gateway to Web3
                    </h4>
                  </div>
                </div>

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 mx-2 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="HTX"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652d1a46d9d913c27d6a0_HTX___Leading_Bitcoin_Exchange.svg"
                      className="w-[120px] h-[120px] partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">HTX</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Leading crypto...
                    </h4>
                  </div>
                </div>

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-2 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Unfinished"
                      src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cca2664d1645d9c36e_image_2_.svg"
                      class="partner_logo"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Unfinished</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      We are vibrant...
                    </h4>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPartners;

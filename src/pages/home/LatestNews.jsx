import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const LatestNews = () => {
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
                <h4 className="text-[25px] text-white font">Latest News</h4>
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
                <div className="border mx-2 border-[#404040] md:h-[250px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e4dfd61a1d0efd63c0e1_67486c3405980e7d0a067a87_xMoney%2520FINAL.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Ex-SUI Foundation Managing Director Greg Siourounis
                        Named xMoney Global Co-Founder and CEO to Drive
                        MiCA-Compliant Stablecoin and Payments Program
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] md:h-[250px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/672e0034f70151874b667ac5_From%2520Community%2520Members%2520to%2520On-Chain%2520Stakeholders-2.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Empowering Organizations Through On-Chain Community
                        Governance: PeerMe Builders Spotlight 🛠️
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] md:h-[250px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e5bcd61a1d0efd6475b7_67486c7c7956c5c5367acd7a_RWA%2520Highlights.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        RWA Highlights from xDay Munich
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] md:h-[250px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/6752e5ce2e48a80e6b425f0b_67486cc9f0bffbb45d80f9cd_Beni%2520-%2520Townhall%2520infographics.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Wars mode = Focus Mode
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border mx-2 border-[#404040] md:h-[250px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
                  <div className="flex justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Entangle"
                      src="https://cdn.multiversx.com/webflow/blog/66e2f51b945fe536e36c5fe8_Twitter%2520post%2520-%25201080%2520x%25201378.webp"
                      className="partner_logo"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <div className="flex gap-3">
                      <h4 className="text-[#97E0FF] text-[12px] font-semibold">
                        ECOSYSTEM
                      </h4>
                      <h4 className="text-[#525252] text-[10px] ">
                        Nov 28, 2024
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] mt-3 max-w-[400px] line-clamp-3">
                        Truly Open FInance: xExchange V3 is Here
                      </h4>
                    </div>
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

export default LatestNews;

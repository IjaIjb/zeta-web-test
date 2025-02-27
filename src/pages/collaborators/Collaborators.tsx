import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
const Collaborators = () => {
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
      <div className="bg-[#262626] relative overflow-hidden h-full">
        <div className="flex relative overflow-hidden bg-black h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <Navbar />

            <div className="flex items-center overflow-hidden mt-[180px] pb-[150px]">
              <div className="flex flex-col">
                <h4 className="md:text-[55px] text-[37px] text-white leading-[85px] max-w-[700px]">
                The Role of AI in Longevity Prediction and Health Optimization
                </h4>
                <h5 className="text-[#A3A3A3] text-[24px] max-w-[650px]">
                Understanding Telomeres and Their Impact on Aging
                </h5>
                <h5 className="text-[#A3A3A3] text-[24px] max-w-[650px]">
                How Wearables and AI Are Redefining Wellness Management
                </h5>
              </div>
              
              <div
                style={{
                  //   transform: "rotate(-70deg)", // Rotate the image slightly left
                  transformOrigin: "center",
                  //   top: "-180%",
                  right: "-10%", // Push the image to the right side
                  position: "absolute", // Ensure it's positioned correctly
                  zIndex: 1, // Ensure the image is behind the gradient
                }}
                className="absolute w-[750px] h-[750px]"
              >
                <div className="relative overflow-hidden lg:w-[800px] lg:h-[800px] w-[250px] h-[250px] md:w-[600px] md:h-[600px] flex items-center justify-center">
                  {/* Inner Orbit */}
                  <div className="absolute w-full h-full animate-spin-slow">
                    <img
                      src="https://cdn.multiversx.com/webflow/Inner-Orbit.svg"
                      alt="Inner Orbit"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Outer Orbit */}
                  <div className="absolute w-full h-full animate-spin-reverse">
                    <img
                      src="https://cdn.multiversx.com/webflow/Outline-Orbit.svg"
                      alt="Outer Orbit"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Planet */}
                  <img
                    src="https://cdn.multiversx.com/webflow/Planet.webp"
                    alt="Planet"
                    className="lg:w-[600px] md:w-[400px] w-[150px] h-[150px] md:h-[400px] lg:h-[600px] z-10 opacity-80 animate-spin-slow"
                  />

                  {/* Gradient Layers */}
                  <div className="absolute lg:w-[800px] md:w-[600px] md:h-[600px] w-[250px] h-[250px] lg:h-[800px] rounded-full bg-gradient-to-r from-[#4ADE80] to-[#4ADE80] opacity-50 blur-xl"></div>
                  <div className="absolute lg:w-[800px] md:w-[600px] md:h-[600px] w-[250px] h-[250px] lg:h-[800px] rounded-full bg-gradient-to-r from-[#4ADE80] to-[#4ADE80] opacity-30 blur-2xl"></div>
                </div>
              </div>
              {/* Gradient overlay */}
            </div>
          </div>
        </div>


        {/* partner */}
        <div className="flex  h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className="">
                <h4 className="md:text-[38px] mb-7 mt-20 text-white font">
                  Our Partners
                </h4>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                <a href="https://www.tempus.com/" target="_blank" >
                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="tempus"
                      src="/images/tempus_white.svg"
                      className="partner_logo w-[150px] h-[150px]"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Tempus</h4>
                    {/* <h4 className="text-[#737373] text-[13px]">Messaging...</h4> */}
                  </div>
                </div>
                </a>

<a href="https://www.moonpay.com/" target="_blank">
                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                <svg className="w-[150px] h-[150px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 20" width="200px" height="20px"><g clip-path="url(#a)"><path fill="#000" d="m93.099 16.79-3.704-8.509h2.48l2.53 6.101 2.922-6.1h2.439L94.004 20H91.52zm-9.023-1.764a2.53 2.53 0 0 0 1.157-.607q.241-.22.412-.5.175-.293.267-.622.105-.361.103-.736a2.7 2.7 0 0 0-.103-.746 2.6 2.6 0 0 0-.272-.622 2.37 2.37 0 0 0-.937-.875q-.3-.15-.627-.226a3 3 0 0 0-.7-.077 3 3 0 0 0-.694.077q-.323.075-.618.226a2.3 2.3 0 0 0-.947.875 2.5 2.5 0 0 0-.267.622 2.8 2.8 0 0 0-.092.746q-.004.375.092.736.09.327.268.617.168.283.411.505.243.218.53.375.293.157.617.231a3 3 0 0 0 1.4 0m-2.506 1.903a4.5 4.5 0 0 1-1.085-.432 4.15 4.15 0 0 1-1.59-1.595 4.5 4.5 0 0 1-.437-1.096 5.24 5.24 0 0 1 0-2.505c.097-.381.244-.748.437-1.09a4.2 4.2 0 0 1 1.59-1.59 4.5 4.5 0 0 1 1.085-.432 5 5 0 0 1 1.245-.155q.34 0 .68.041a4.1 4.1 0 0 1 1.157.32q.249.105.478.246.22.135.407.309.172.168.319.36V8.281h2.356v8.555h-2.356v-1.029a3.1 3.1 0 0 1-1.199.926 4 4 0 0 1-.849.258q-.492.093-.993.092c-.42.002-.838-.05-1.245-.154m-8.555-6.482c.338.007.676-.031 1.004-.113a1.8 1.8 0 0 0 .7-.35 1.4 1.4 0 0 0 .41-.576c.092-.256.135-.526.13-.797.004-.27-.041-.54-.135-.793a1.36 1.36 0 0 0-.411-.57 1.85 1.85 0 0 0-.694-.345 3.8 3.8 0 0 0-1.004-.119H70.7v3.663zm-4.753-5.68h4.985q1.172 0 2.037.289.864.288 1.42.792c.37.337.656.756.833 1.224a4.3 4.3 0 0 1 .273 1.544 4.2 4.2 0 0 1-.273 1.543 3.2 3.2 0 0 1-.833 1.214q-.56.514-1.42.803-.864.288-2.037.288H70.7v4.372h-2.438zm-10.474 3.51h2.34v1.028q.219-.301.51-.53.307-.244.664-.406a3.6 3.6 0 0 1 .818-.257q.47-.087.946-.083c.496-.007.99.077 1.456.247a3 3 0 0 1 1.101.71c.311.327.547.719.69 1.147.164.493.244 1.01.236 1.528v5.17h-2.33v-4.563a3.2 3.2 0 0 0-.14-.988 2 2 0 0 0-.395-.715 1.6 1.6 0 0 0-.638-.427c-.277-.1-.57-.149-.865-.144a2.5 2.5 0 0 0-.864.144 1.6 1.6 0 0 0-.643.427c-.181.21-.316.455-.396.72a3.2 3.2 0 0 0-.139.978v4.568h-2.35zm-5.761 6.728a3 3 0 0 0 .643-.242q.293-.151.53-.38.234-.229.4-.51.17-.29.248-.617.083-.35.082-.71.002-.362-.082-.715a2.3 2.3 0 0 0-.649-1.122 2.4 2.4 0 0 0-.53-.385 2.6 2.6 0 0 0-.642-.242 3.2 3.2 0 0 0-.741-.083 3.2 3.2 0 0 0-.736.083q-.337.076-.643.242a2.5 2.5 0 0 0-.525.385q-.234.226-.39.51-.16.291-.248.612-.09.351-.087.715-.002.361.087.71.086.323.247.617.159.286.391.515.241.226.535.37a2.86 2.86 0 0 0 1.379.324q.376.004.74-.082m-2.124 1.924a5.5 5.5 0 0 1-1.219-.437 4.5 4.5 0 0 1-1.003-.69 4.2 4.2 0 0 1-1.235-2.006 4.74 4.74 0 0 1 0-2.505 4.23 4.23 0 0 1 1.235-2.002c.3-.276.638-.51 1.003-.694q.584-.29 1.22-.437a6.25 6.25 0 0 1 2.777 0c.42.096.829.243 1.214.437.363.187.7.42 1.003.694.298.265.558.57.772.906.213.34.376.709.484 1.096.224.82.224 1.685 0 2.505a4.24 4.24 0 0 1-1.256 2.006c-.303.272-.64.503-1.003.69a5.4 5.4 0 0 1-1.209.437 6.3 6.3 0 0 1-2.778 0M40.781 15q.336-.084.643-.242.294-.151.53-.38.234-.229.401-.51.17-.29.247-.617.084-.35.082-.71a3 3 0 0 0-.082-.715 2.3 2.3 0 0 0-.648-1.122 2.4 2.4 0 0 0-.53-.386 2.6 2.6 0 0 0-.643-.241 3.2 3.2 0 0 0-.74-.083 3.2 3.2 0 0 0-.736.083q-.339.076-.643.241a2.5 2.5 0 0 0-.525.386q-.234.226-.391.51-.16.291-.247.612-.091.351-.088.715-.002.361.088.71.085.324.247.617.158.286.39.514.235.226.526.376a2.86 2.86 0 0 0 1.378.324q.376.004.741-.082m-2.13 1.929a5.5 5.5 0 0 1-1.219-.437 4.5 4.5 0 0 1-1.003-.69 4.2 4.2 0 0 1-.756-.905 4.3 4.3 0 0 1-.479-1.101 4.74 4.74 0 0 1 0-2.505 4.2 4.2 0 0 1 .479-1.096c.21-.335.464-.64.756-.905.3-.277.638-.51 1.003-.695q.584-.29 1.22-.437a6.25 6.25 0 0 1 2.777 0q.631.147 1.21.437c.364.186.703.42 1.007.695.298.264.558.569.772.905.211.34.373.71.479 1.096.224.82.224 1.685 0 2.505a4.16 4.16 0 0 1-1.251 2.006 4.8 4.8 0 0 1-1.008.69q-.575.29-1.204.437a6.3 6.3 0 0 1-2.778 0M20.173 4.768h2.47l4.207 6.435 4.24-6.435h2.468v12.068h-2.443V8.56l-3.498 5.34h-1.492l-3.498-5.34v8.282h-2.444z"></path><path fill="#7D00FF" d="M14.555 6.928a2.464 2.464 0 1 0 0-4.928 2.464 2.464 0 0 0 0 4.928M6.998 18.025a6.004 6.004 0 1 1 .01-12.008 6.004 6.004 0 0 1-.01 12.008"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v20H0z"></path></clipPath></defs></svg>
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">MoonPay</h4>
                  
                  </div>
                </div>
                </a>

                
                <a href="https://verily.com/" target="_blank">

                <div className="border border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt="Inspect"
                      src="/images/verilyLogo.svg"
                      className="partner_logo w-[150px] h-[150px]"
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Verily</h4>
                    {/* <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4> */}
                  </div>
                </div>

</a>

<a href="https://ouraring.com/" target="_blank">
                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                  <svg aria-hidden="true" viewBox="0 0 993 311" xmlns="http://www.w3.org/2000/svg"><path d="M63.443 27.388H190.38V0H63.443zM643.464 174.105H554.68V83.082h88.783c31.634 0 52.89 18.292 52.89 45.513 0 27.221-21.256 45.51-52.89 45.51m29.409 21.29c30.456-8.686 50.136-34.907 50.136-66.8 0-41.397-31.967-69.212-79.547-69.212H528.035v244.66h26.646V198.174h90.3l57.501 105.867h28.83l-59.946-108.218zM389.668 308.653c65.348 0 110.987-45.903 110.987-111.63V59.384h-27.387v135.793c0 50.688-34.377 86.09-83.6 86.09-40.798 0-84.709-26.94-84.709-86.09V59.384h-27.382v137.64c0 65.726 46.093 111.628 112.093 111.628m478.192-217.35 57.757 126.333H809.735zm-12.848-31.916L743.16 304.044h28.606l27.662-62.713h136.493l27.67 62.713h28.603L880.342 59.383zm-728.077-4.611C56.944 54.775 0 111.719 0 181.712c0 69.996 56.944 126.94 126.937 126.94 69.996 0 126.94-56.944 126.94-126.94 0-69.993-56.944-126.937-126.94-126.937m0 226.49c-54.893 0-99.553-44.66-99.553-99.553 0-54.892 44.661-99.55 99.554-99.55 54.894 0 99.556 44.658 99.556 99.55 0 54.893-44.662 99.553-99.556 99.553" fill="currentColor"></path></svg>
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">
                    Oura
                    </h4>
                    {/* <h4 className="text-[#737373] text-[13px]">
                      The Industr-Standard...
                    </h4> */}
                  </div>
                </div>
</a>


<a href="https://lapetussolutions.com/" target="_blank">
                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      loading="lazy"
                      alt=""
                      src="/images/logo-7.webp"
                      className="partner_logo "
                    />
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">Lapetus</h4>
                    {/* <h4 className="text-[#737373] text-[13px]">
                      A community driven...
                    </h4> */}
                  </div>
                </div>
                </a>


                <a href="https://ada.com/" target="_blank">
                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                  <svg  className="w-[150px] h-[150px] sc-4c1c482f-0 rotcg" height="90" viewBox="0 0 80 120" width="60"><g className="sc-70639cd0-1 faIEZi"><path d="M9.865 62.869a3.01 3.01 0 003.037 2.982 3.047 3.047 0 001.787-.574c2.949-2.104 5.631-2.1 8.581.004a2.982 2.982 0 100-4.824c-2.95 2.104-5.632 2.108-8.581.004a3.05 3.05 0 00-1.787-.573 3.01 3.01 0 00-3.037 2.981"></path><path d="M54.678 12.18a2.982 2.982 0 110 5.963h-4.266a2.982 2.982 0 110-5.963z"></path><path d="M28.923 3.235A2.982 2.982 0 1125.941.253a2.982 2.982 0 012.982 2.982M29.972 47.96a2.983 2.983 0 100 5.964h20.284a2.983 2.983 0 100-5.963z"></path><path d="M17.965 30.07a2.982 2.982 0 110-5.963h8.515a2.982 2.982 0 110 5.963z"></path><path d="M9.001 27.089a2.982 2.982 0 11-2.981-2.982A2.982 2.982 0 019 27.089M57.012 74.796a2.982 2.982 0 11-2.981-2.982 2.982 2.982 0 012.981 2.982"></path><path d="M49.805 95.894a.6.6 0 00-.417-.208h-2.712a.713.713 0 00-.696.695v5.355a9.473 9.473 0 00-2.781-1.496A9.853 9.853 0 0040 99.72a10.014 10.014 0 103.72 19.298 9.967 9.967 0 003.095-1.982l2.573 2.503a.396.396 0 00.417.14q.21-.07.21-.418V96.38a.667.667 0 00-.21-.486zm-3.825 13.839a6 6 0 01-10.222 4.242 5.987 5.987 0 1110.222-4.381zm-22.853-7.096a9.656 9.656 0 00-7.093-2.92 9.692 9.692 0 00-7.059 2.92 9.99 9.99 0 000 14.186 9.692 9.692 0 007.059 2.921 9.602 9.602 0 003.755-.73 11.868 11.868 0 003.06-1.982l2.642 2.504q.209.208.383.139.174-.07.174-.417v-9.528a9.657 9.657 0 00-2.921-7.093zm-2.816 11.335a5.887 5.887 0 01-4.277 1.739 5.805 5.805 0 01-4.207-1.739 5.96 5.96 0 010-8.484 5.805 5.805 0 014.207-1.739 5.887 5.887 0 014.277 1.74 5.96 5.96 0 010 8.483zm50.749-11.335a10.025 10.025 0 10-3.338 16.377 11.868 11.868 0 003.06-1.982l2.642 2.504q.208.208.382.139.174-.07.174-.417v-9.528a9.657 9.657 0 00-2.92-7.093zm-2.817 11.335a5.887 5.887 0 01-4.277 1.739 5.805 5.805 0 01-4.207-1.739 5.96 5.96 0 010-8.484 5.805 5.805 0 014.207-1.739 5.887 5.887 0 014.277 1.74 5.96 5.96 0 010 8.483z"></path></g><g className="sc-70639cd0-0 sc-70639cd0-2 ixhcYX htnoSA"><rect x="34.057" y="59.887" width="35.556" height="5.963" rx="2.982"></rect><path d="M38.425 30.07a2.976 2.976 0 002.407-4.733c-2.103-2.895-2.1-5.528.004-8.423a2.942 2.942 0 00.57-1.753 2.982 2.982 0 00-5.963 0 2.942 2.942 0 00.57 1.753c2.104 2.895 2.108 5.528.004 8.423a2.977 2.977 0 002.408 4.733"></path><path d="M37.914 6.217a3.005 3.005 0 01-3.027-2.983 3.005 3.005 0 013.027-2.98h16.111a3.005 3.005 0 013.028 2.98 3.004 3.004 0 01-3.028 2.983z"></path><path d="M42.058 71.814a2.982 2.982 0 110 5.964H25.947a2.982 2.982 0 110-5.964z"></path><path d="M62.124 41.997a2.986 2.986 0 010-5.963h15.048a2.986 2.986 0 010 5.963z"></path><rect y="36.034" width="41.406" height="5.963" rx="2.982"></rect></g><g className="sc-70639cd0-0 sc-70639cd0-4 ixhcYX jJQJAi"><path d="M20.928 50.942a2.982 2.982 0 11-2.981-2.981 2.982 2.982 0 012.981 2.981"></path><path d="M26.44 18.143a2.982 2.982 0 100-5.963H12.826a2.982 2.982 0 100 5.963z"></path><path d="M59.184 50.942a2.973 2.973 0 002.962 2.982 2.922 2.922 0 001.742-.574c2.877-2.104 5.493-2.1 8.37.004a2.913 2.913 0 001.741.57 2.982 2.982 0 000-5.963 2.912 2.912 0 00-1.741.57c-2.877 2.103-5.493 2.107-8.37.004a2.925 2.925 0 00-1.742-.574 2.973 2.973 0 00-2.962 2.981"></path><path d="M76.962 27.088l-.001-.025a2.969 2.969 0 00-2.957-2.956H50.4a2.982 2.982 0 100 5.963h23.603a2.97 2.97 0 002.958-2.982z"></path></g><g className="sc-70639cd0-0 sc-70639cd0-3 ixhcYX epJdtb"><path d="M69.648 15.162a2.982 2.982 0 11-2.981-2.982 2.982 2.982 0 012.981 2.982"></path><path d="M9.001 50.942a2.982 2.982 0 11-2.981-2.981A2.982 2.982 0 019 50.942"></path><path d="M53.333 39.015a2.982 2.982 0 11-2.981-2.981 2.982 2.982 0 012.981 2.981"></path></g></svg>
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">ada</h4>
                    {/* <h4 className="text-[#737373] text-[13px]">
                      Crypto Exchange...
                    </h4> */}
                  </div>
                </div>
</a>

{/* <a href="https://www.junshipharma.com/en/" target="_blank">
                <div className="border  border-[#404040] rounded-[12px] h-[250px] p-1 flex flex-col justify-between">
                  <div className="flex flex-1 justify-center items-center">
                 <a class="logo" href="https://www.junshipharma.com/en/" style="background: url(https://www.junshipharma.com/wp-content/themes/sytech/assets/img/logo-grey.svg) no-repeat center;">君实生物</a>
                  </div>
                  <div className="rounded-[12px] p-2 bg-[#171717]">
                    <h4 className="text-[#F5F5F5] text-[14px]">MoonPay</h4>
                    <h4 className="text-[#737373] text-[13px]">
                      Your Gateway to Web3
                    </h4>
                  </div>
                </div>
</a> */}
             
              </div>
            </div>
          </div>
        </div>

        {/* resource*/}
        {/* <div className="flex  h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className="">
                <h4 className="md:text-[38px] mb-7 mt-20 text-white font">
                  Resources
                </h4>
              </div>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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
              </div>
            </div>
          </div>
        </div> */}

        {/* blog*/}
        {/* <div className="flex  h-full justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className="">
                <h4 className="md:text-[38px] mb-7 mt-20 text-white font">
                  Blogs
                </h4>
              </div>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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

                <div className="border  border-[#404040] md:h-h-[350px] h-full flex flex-col justify-between shadow-md rounded-[12px] p-1 ">
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
              </div>
            </div>
          </div>
        </div> */}

        {/* white papers */}
<div className="flex justify-center mt-10">
        <div className="max-w-[2000px] h-full md:px-14 px-4 w-full ">
          <div className="relative">
            {/* Custom Arrow Buttons Positioned in Front of the Heading */}
            <div className="flex justify-between items-center mb-5">
              <div className="">
              <h4 className="md:text-[38px]  text-white font">
                  White Papers
                  </h4>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#171717] rounded-[13px] flex justify-center text-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Targeting Aging Pathways: Developing therapies to target specific pathways involved in aging, such as inflammation and metabolic dysfunction.
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Clinical Trials: Conducting clinical trials to test the efficacy and safety of their drug candidates.
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Aging Clocks: Development of various "aging clocks" based on different data types (e.g., blood, psychology).
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Psychological Aging: Research on the role of psychological factors in aging and longevity.
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Lifestyle and Aging: Studies on the impact of lifestyle choices (e.g., diet, exercise) on the aging process.
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">AI for Biomarker Discovery: Using AI to identify novel biomarkers of aging and track the effectiveness of interventions.
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Predictive Modeling: Developing AI models to predict future health outcomes and lifespan.
                </h5>
              </div>

              <div className="bg-[#171717] rounded-[13px] flex justify-center items-center h-[100px] p-1">
                <h5 className="text-white text-center max-w-[460px] text-[16px]">Personalized Aging Assessments: Creating tools for personalized aging assessments based on individual data.
                </h5>
              </div>

         

         
            </div>
          </div>
        </div>
      </div>


        <Footer />
      </div>
    </div>
  );
};

export default Collaborators;

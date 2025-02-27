import React from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

const MarketPlace = () => {
  return (
    <div>
         <div className="bg-black h-full  relative">
      <div className="bg-black">
        <div
          className="about-transition_main-img bg-cover bg-center h-full"
        //   style={{
        //     backgroundImage:
        //       "url('https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b7eb0c290e7bf3aaab98f0_tranisiton-bg.webp')",
        //   }}
        >
          <div className="flex justify-center">
            <div className="max-w-[2000px] lg:px-14 px-3 w-full">
              <div className="flex justify-center">
                <Navbar />
              </div>
              <div className="flex justify-center mt-[200px] mb-[200px]">
                <h3 className="text-white text-center text-[40px] md:text-[60px] font-[500] max-w-[700px]">
                 Coming Soon...
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div> 
    </div>
  )
}

export default MarketPlace
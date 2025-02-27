import React from "react";
import PropTypes from "prop-types";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";

export default function Navbar({ title }) {


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-12 pb-2">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center  p-4 lg:shadow-lg">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <a
              className="text-[#1DB459] text-[20px]  hidden lg:inline-block font-semibold"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              {title}
            </a>


            {/* Form */}
            {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <div class="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#9da4aa" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z" /></svg>
                </div>
                <input type="text" id="simple-search" class=" border border-gray-300 text-gray-500 text-sm rounded-full block w-full pl-4 p-2  " required />

              </div>
            </form> */}
            {/* User */}
            {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex md:space-x-4">
              <div>
                <img src="/images/Dashboard/icon-notify.svg" alt="hero" />
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f48120" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" /></svg>
              </div>
            </ul> */}
          </div>
          <div className="md:pr-14 md:block hidden">
          <Link to="/">
          <img src="/logo.svg" className="w-full h-[50px]"  alt="hero" />
          </Link>
          </div>
          <div className="md:pr-14 absolute right-10 -top-10 md:hidden block ">
          <Link to="/">
          <img src="/logo.svg" className="w-full h-[50px]" alt="hero" />
          </Link>
          </div>
        </nav>
        
      </div>
      {/* End Navbar */}
    </>
  );
}

Navbar.defaultProps = {
  title: " ",
};

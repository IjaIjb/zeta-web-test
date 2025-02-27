import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./UI/LoadingSpinner";
import { UserApis } from "./api/userApis";

const Footer = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: ""
  });

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
  
    // Map the form data to the keys expected by the backend
    const payload = {
      email: formData.email
    };
  
    try {
      const response = await UserApis.registerWaitlist(payload);
      console.log("Contact created", response.data);
      if (response?.data) {
        toast.success("Form submitted successfully!");
        setFormData({
          email: ""
        });
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error creating contact", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="mt-10">
      <div className="bg-[#080808] relative overflow-hidden">
        <div className="relative">
          <img
            src="https://cdn.multiversx.com/webflow/Home-Hero-Bg-02.webp"
            alt=""
            className="absolute top-[-80px] left-[-360px] w-[550px] h-[550px]"
          />
        </div>
        <div
          style={{
            transform: "rotate(55deg)", // Rotate the image slightly
            transformOrigin: "center",
          }}
          className="absolute top-[-130px] right-[-380px] z-0"
        >
          <img
            src="https://cdn.multiversx.com/webflow/Home-Hero-Bg-02.webp"
            alt=""
            className="w-[550px] h-[550px]"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center relative z-[1]">
            <div className="max-w-[2000px] h-full md:px-14 px-4 pt-[100px] md:pb-[150px] pb-14 w-full">
              <div className="flex justify-center pb-5">
                <div className="text-[2.5rem] text-center font-[500] text-white">
                  Join Our Waitlist
                </div>
              </div>
              <div className="md:flex justify-center gap-2 items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-[12px] px-5 md:w-[350px] w-full text-[#f5f5f5] text-[1.13rem] bg-[#262626] border border-[#262626]"
                  placeholder="Enter a valid email address"
                />
                <button
                  type="submit"
                  className="h-12 mt-5 md:mt-0 text-[#080808] rounded-[12px] flex justify-center text-center items-center bg-[#00D3BA] px-7"
                >
                  {loader ? <LoadingSpinner /> : "Submit"}
                </button>
              </div>
              <div className="flex justify-center pt-5">
                <h5 className="text-[#737373] text-[13px] text-center max-w-[380px]">
                  Be among the first to experience cutting-edge biotech
                  innovations. Join our waitlist to get early access to
                  exclusive features and updates!
                </h5>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-center relative z-[1]">
          <div className="max-w-[2000px] h-full md:px-14 px-4 pt-[100px] pb-[150px] w-full">
            <div className="grid grid-cols-2">
              <div className=" text-white block  lg:hidden gap-5">
                <img src="/logo.svg" className="w-fit h-[70px]" alt="/" />

                <div className="flex gap-4 mt-4">
                  <div>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2344 5.25H24.5156L17.2969 13.5469L25.8281 24.75H19.1719L13.9219 17.9531L7.96875 24.75H4.64062L12.375 15.9375L4.21875 5.25H11.0625L15.75 11.4844L21.2344 5.25ZM20.0625 22.7812H21.8906L10.0781 7.125H8.10938L20.0625 22.7812Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 3.375C21.375 3.375 26.625 8.625 26.625 15C26.625 21.4219 21.375 26.625 15 26.625C8.57812 26.625 3.375 21.4219 3.375 15C3.375 8.625 8.57812 3.375 15 3.375ZM20.3438 11.2969C20.3906 11.1562 20.3906 11.0156 20.3438 10.8281C20.3438 10.7344 20.25 10.5938 20.2031 10.5469C20.0625 10.4062 19.8281 10.4062 19.7344 10.4062C19.3125 10.4062 18.6094 10.6406 15.375 12C14.25 12.4688 12 13.4062 8.625 14.9062C8.0625 15.1406 7.78125 15.3281 7.73438 15.5625C7.6875 15.9375 8.29688 16.0781 9 16.3125C9.60938 16.5 10.4062 16.7344 10.8281 16.7344C11.2031 16.7344 11.625 16.5938 12.0938 16.2656C15.2344 14.1094 16.875 13.0312 16.9688 13.0312C17.0625 13.0312 17.1562 12.9844 17.2031 13.0312C17.2969 13.125 17.2969 13.2188 17.25 13.2656C17.2031 13.5 14.25 16.2188 14.0625 16.4062C13.4062 17.0625 12.6562 17.4844 13.8281 18.2344C14.8125 18.8906 15.375 19.3125 16.4062 19.9688C17.0625 20.3906 17.5781 20.9062 18.2344 20.8594C18.5625 20.8125 18.8906 20.5312 19.0312 19.6406C19.4531 17.625 20.2031 13.125 20.3438 11.2969Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5625 2.28125C27.6562 6.875 29.2031 12.0312 28.6406 17.9844C28.6406 17.9844 28.6406 18.0312 28.5938 18.0312C26.5312 19.5781 24.1875 20.75 21.7031 21.5C21.6562 21.5469 21.6562 21.5 21.6094 21.5C21.0938 20.75 20.625 20 20.2031 19.2031C20.2031 19.1562 20.2031 19.1562 20.2031 19.1094L20.25 19.0625C21 18.7812 21.7031 18.4531 22.4062 18.0312C22.4062 18.0312 22.4531 18.0312 22.4531 17.9844C22.4531 17.9375 22.4531 17.9375 22.4062 17.8906C22.2656 17.7969 22.125 17.7031 21.9844 17.5625C21.9375 17.5625 21.9375 17.5625 21.8906 17.5625C17.4375 19.625 12.5625 19.625 8.0625 17.5625C8.01562 17.5625 7.96875 17.5625 7.96875 17.5625C7.82812 17.7031 7.6875 17.7969 7.54688 17.8906C7.5 17.9375 7.5 17.9375 7.5 17.9844C7.5 18.0312 7.5 18.0312 7.54688 18.0312C8.20312 18.4531 8.95312 18.7812 9.70312 19.0625C9.70312 19.0625 9.70312 19.1094 9.75 19.1094C9.75 19.1562 9.75 19.1562 9.75 19.2031C9.32812 20 8.85938 20.75 8.34375 21.5C8.29688 21.5 8.25 21.5469 8.25 21.5C5.76562 20.75 3.42188 19.5781 1.35938 18.0312C1.3125 18.0312 1.3125 17.9844 1.3125 17.9844C0.84375 12.8281 1.82812 7.625 5.39062 2.28125C5.39062 2.28125 5.39062 2.28125 5.4375 2.28125C7.21875 1.4375 9.09375 0.875 11.0156 0.546875C11.0625 0.5 11.1094 0.546875 11.1094 0.546875C11.3906 1.01562 11.625 1.53125 11.8125 2C13.9219 1.67188 16.0312 1.67188 18.1406 2C18.3281 1.53125 18.5625 1.01562 18.8438 0.546875C18.8438 0.546875 18.8906 0.5 18.9375 0.546875C20.8594 0.875 22.7344 1.4375 24.5156 2.28125C24.5625 2.28125 24.5625 2.28125 24.5625 2.28125ZM10.4062 14.8438C11.7656 14.8438 12.8906 13.5781 12.8906 12.0781C12.8906 10.5312 11.8125 9.3125 10.4062 9.3125C9.04688 9.3125 7.92188 10.5312 7.92188 12.0781C7.92188 13.5781 9.04688 14.8438 10.4062 14.8438ZM19.5469 14.8438C20.9531 14.8438 22.0312 13.5781 22.0312 12.0781C22.0781 10.5312 20.9531 9.3125 19.5469 9.3125C18.1875 9.3125 17.1094 10.5312 17.1094 12.0781C17.1094 13.5781 18.1875 14.8438 19.5469 14.8438Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.625 15C26.625 20.8125 22.3594 25.6406 16.7812 26.4844V18.375H19.5L20.0156 15H16.7812V12.8438C16.7812 11.9062 17.25 11.0156 18.7031 11.0156H20.1562V8.15625C20.1562 8.15625 18.8438 7.92188 17.5312 7.92188C14.9062 7.92188 13.1719 9.5625 13.1719 12.4688V15H10.2188V18.375H13.1719V26.4844C7.59375 25.6406 3.375 20.8125 3.375 15C3.375 8.57812 8.57812 3.375 15 3.375C21.4219 3.375 26.625 8.57812 26.625 15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div className="lg:hidden block">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="hidden lg:block mt-2">
                  <svg
                    width="20%"
                    height="20%"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-2  gap-5 ">
              <div className=" text-white lg:block hidden gap-5">
                <Link to={"/"}>
                  <img src="/logo.svg" className="w-fit h-[70px]" alt="/" />
                </Link>
                <div className="flex text-[#737373]  ">
                  21 cape road, maitama Abuja Nigeria,
                </div>
                {/* <div className="flex text-[#737373]  ">
                  3401 N. Miami, Ave. Ste 230
                </div> */}
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://x.com/zetakree" rel="noreferrer" target="_blank">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2344 5.25H24.5156L17.2969 13.5469L25.8281 24.75H19.1719L13.9219 17.9531L7.96875 24.75H4.64062L12.375 15.9375L4.21875 5.25H11.0625L15.75 11.4844L21.2344 5.25ZM20.0625 22.7812H21.8906L10.0781 7.125H8.10938L20.0625 22.7812Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="block">
                    <a
                      href="https://www.tiktok.com/@zekakree?_t=ZM-8tKToMkzUow&_r=1"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 0C15.5523 0 16 0.447715 16 1V4.58984C17.9453 5.74479 19.9189 5.90234 21.75 5.90234C21.7803 5.90234 21.8107 5.90244 21.841 5.90244C22.3534 5.90244 22.78 6.32906 22.78 6.84147V10.5254C22.78 11.0379 22.3534 11.4645 21.841 11.4645C19.9633 11.4645 18.0229 10.9202 16.3887 9.86816V18.75C16.3887 23.0645 13.0645 26.3887 8.75 26.3887C4.43556 26.3887 1.11133 23.0645 1.11133 18.75C1.11133 14.4361 4.43556 11.1113 8.75 11.1113C9.03223 11.1113 9.3125 11.1343 9.58984 11.1797V14.1162C9.3125 14.072 9.03223 14.05 8.75 14.05C6.2207 14.05 4.16602 16.1047 4.16602 18.6348C4.16602 21.165 6.2207 23.2197 8.75 23.2197C11.2793 23.2197 13.334 21.165 13.334 18.6348V6.84147C13.334 6.32906 13.7606 5.90244 14.273 5.90244C14.5859 5.90244 14.8701 5.74249 15.041 5.46875V1C15.041 0.447715 15.4477 0 16 0H15Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* <div>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 3.375C21.375 3.375 26.625 8.625 26.625 15C26.625 21.4219 21.375 26.625 15 26.625C8.57812 26.625 3.375 21.4219 3.375 15C3.375 8.625 8.57812 3.375 15 3.375ZM20.3438 11.2969C20.3906 11.1562 20.3906 11.0156 20.3438 10.8281C20.3438 10.7344 20.25 10.5938 20.2031 10.5469C20.0625 10.4062 19.8281 10.4062 19.7344 10.4062C19.3125 10.4062 18.6094 10.6406 15.375 12C14.25 12.4688 12 13.4062 8.625 14.9062C8.0625 15.1406 7.78125 15.3281 7.73438 15.5625C7.6875 15.9375 8.29688 16.0781 9 16.3125C9.60938 16.5 10.4062 16.7344 10.8281 16.7344C11.2031 16.7344 11.625 16.5938 12.0938 16.2656C15.2344 14.1094 16.875 13.0312 16.9688 13.0312C17.0625 13.0312 17.1562 12.9844 17.2031 13.0312C17.2969 13.125 17.2969 13.2188 17.25 13.2656C17.2031 13.5 14.25 16.2188 14.0625 16.4062C13.4062 17.0625 12.6562 17.4844 13.8281 18.2344C14.8125 18.8906 15.375 19.3125 16.4062 19.9688C17.0625 20.3906 17.5781 20.9062 18.2344 20.8594C18.5625 20.8125 18.8906 20.5312 19.0312 19.6406C19.4531 17.625 20.2031 13.125 20.3438 11.2969Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div> */}
                  {/* <div>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5625 2.28125C27.6562 6.875 29.2031 12.0312 28.6406 17.9844C28.6406 17.9844 28.6406 18.0312 28.5938 18.0312C26.5312 19.5781 24.1875 20.75 21.7031 21.5C21.6562 21.5469 21.6562 21.5 21.6094 21.5C21.0938 20.75 20.625 20 20.2031 19.2031C20.2031 19.1562 20.2031 19.1562 20.2031 19.1094L20.25 19.0625C21 18.7812 21.7031 18.4531 22.4062 18.0312C22.4062 18.0312 22.4531 18.0312 22.4531 17.9844C22.4531 17.9375 22.4531 17.9375 22.4062 17.8906C22.2656 17.7969 22.125 17.7031 21.9844 17.5625C21.9375 17.5625 21.9375 17.5625 21.8906 17.5625C17.4375 19.625 12.5625 19.625 8.0625 17.5625C8.01562 17.5625 7.96875 17.5625 7.96875 17.5625C7.82812 17.7031 7.6875 17.7969 7.54688 17.8906C7.5 17.9375 7.5 17.9375 7.5 17.9844C7.5 18.0312 7.5 18.0312 7.54688 18.0312C8.20312 18.4531 8.95312 18.7812 9.70312 19.0625C9.70312 19.0625 9.70312 19.1094 9.75 19.1094C9.75 19.1562 9.75 19.1562 9.75 19.2031C9.32812 20 8.85938 20.75 8.34375 21.5C8.29688 21.5 8.25 21.5469 8.25 21.5C5.76562 20.75 3.42188 19.5781 1.35938 18.0312C1.3125 18.0312 1.3125 17.9844 1.3125 17.9844C0.84375 12.8281 1.82812 7.625 5.39062 2.28125C5.39062 2.28125 5.39062 2.28125 5.4375 2.28125C7.21875 1.4375 9.09375 0.875 11.0156 0.546875C11.0625 0.5 11.1094 0.546875 11.1094 0.546875C11.3906 1.01562 11.625 1.53125 11.8125 2C13.9219 1.67188 16.0312 1.67188 18.1406 2C18.3281 1.53125 18.5625 1.01562 18.8438 0.546875C18.8438 0.546875 18.8906 0.5 18.9375 0.546875C20.8594 0.875 22.7344 1.4375 24.5156 2.28125C24.5625 2.28125 24.5625 2.28125 24.5625 2.28125ZM10.4062 14.8438C11.7656 14.8438 12.8906 13.5781 12.8906 12.0781C12.8906 10.5312 11.8125 9.3125 10.4062 9.3125C9.04688 9.3125 7.92188 10.5312 7.92188 12.0781C7.92188 13.5781 9.04688 14.8438 10.4062 14.8438ZM19.5469 14.8438C20.9531 14.8438 22.0312 13.5781 22.0312 12.0781C22.0781 10.5312 20.9531 9.3125 19.5469 9.3125C18.1875 9.3125 17.1094 10.5312 17.1094 12.0781C17.1094 13.5781 18.1875 14.8438 19.5469 14.8438Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div> */}

                  <a href="https://web.facebook.com/zetakree" rel="noreferrer" target="_blank">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.625 15C26.625 20.8125 22.3594 25.6406 16.7812 26.4844V18.375H19.5L20.0156 15H16.7812V12.8438C16.7812 11.9062 17.25 11.0156 18.7031 11.0156H20.1562V8.15625C20.1562 8.15625 18.8438 7.92188 17.5312 7.92188C14.9062 7.92188 13.1719 9.5625 13.1719 12.4688V15H10.2188V18.375H13.1719V26.4844C7.59375 25.6406 3.375 20.8125 3.375 15C3.375 8.57812 8.57812 3.375 15 3.375C21.4219 3.375 26.625 8.57812 26.625 15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>

                  <div className="block">
                    <a
                      href="https://www.instagram.com/zetakree_?igsh=MTg0ZmtjZnRtb2JsdA%3D%3D&utm_source=qr"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 6C10.58 6 6.979 6.446 6.003 6.85C5.08 7.224 4.37 7.933 3.996 8.855C3.592 9.831 3.146 13.4 3.146 17.826C3.146 22.253 3.592 25.821 3.996 26.797C4.37 27.719 5.08 28.429 6.003 28.803C6.979 29.207 10.58 29.653 15 29.653C19.42 29.653 23.021 29.207 23.997 28.803C24.92 28.429 25.63 27.719 26.004 26.797C26.408 25.821 26.854 22.253 26.854 17.826C26.854 13.4 26.408 9.831 26.004 8.855C25.63 7.933 24.92 7.224 23.997 6.85C23.021 6.446 19.42 6 15 6ZM15 26C11.673 26 8.354 25.853 7.602 25.482C6.947 25.162 6.395 24.61 6.075 23.954C5.604 22.853 5.481 20.571 5.481 17.826C5.481 15.081 5.604 12.799 6.075 11.698C6.395 11.042 6.947 10.49 7.602 10.17C8.354 9.799 11.673 9.653 15 9.653C18.327 9.653 21.646 9.799 22.398 10.17C23.053 10.49 23.605 11.042 23.925 11.698C24.396 12.799 24.519 15.081 24.519 17.826C24.519 20.571 24.396 22.853 23.925 23.954C23.605 24.61 23.053 25.162 22.398 25.482C21.646 25.853 18.327 26 15 26ZM15 11.146C12.243 11.146 10.018 13.371 10.018 16.128C10.018 18.885 12.243 21.11 15 21.11C17.757 21.11 19.982 18.885 19.982 16.128C19.982 13.371 17.757 11.146 15 11.146ZM15 18.855C13.466 18.855 12.271 17.66 12.271 16.126C12.271 14.592 13.466 13.397 15 13.397C16.534 13.397 17.729 14.592 17.729 16.126C17.729 17.66 16.534 18.855 15 18.855ZM21.207 10.094C20.649 10.094 20.193 9.638 20.193 9.08C20.193 8.522 20.649 8.066 21.207 8.066C21.765 8.066 22.221 8.522 22.221 9.08C22.221 9.638 21.765 10.094 21.207 10.094Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>

                  <div className=" block">
                    <a
                    rel="noreferrer"
                      href="https://www.linkedin.com/company/zetakree"
                      target="_blank"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* <div className="hidden lg:block mt-2">
                  <a href="https://www.linkedin.com/company/zetakree" target="_blank">
                  <svg
                    width="20%"
                    height="20%"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  </a>
                </div> */}
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-white text-[13px]">About</h5>
                <h5 className="text-[#737373] text-[13px]">Mission</h5>
                <h5 className="text-[#737373] text-[13px]">Vision</h5>
                <h5 className="text-[#737373] text-[13px]">Core Values</h5>
                <h5 className="text-[#737373] text-[13px]">Meet the Team</h5>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-white text-[13px]">
                  Research & Innovation
                </h5>
                <h5 className="text-[#737373] text-[13px]">Key Focus Areas</h5>
                <h5 className="text-[#737373] text-[13px]">
                  Longetivity Research
                </h5>
                <h5 className="text-[#737373] text-[13px]">
                  Cell Rejuvenation Studies
                </h5>
                <h5 className="text-[#737373] text-[13px]">
                  Biomedical Device Development
                </h5>
                <h5 className="text-[#737373] text-[13px]">AI in Biotech</h5>
                <h5 className="text-[#737373] text-[13px]">
                  Published Research
                </h5>
                <h5 className="text-[#737373] text-[13px]">Ongoing Projects</h5>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-white text-[13px]">Services</h5>
                <h5 className="text-[#737373] text-[13px]">
                  Contract Research
                </h5>
                <h5 className="text-[#737373] text-[13px]">Clinical Trials</h5>
                <h5 className="text-[#737373] text-[13px]">
                  Data Analysis Services
                </h5>
                <h5 className="text-[#737373] text-[13px]">
                  Custom Biomedical Solutions
                </h5>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-white text-[13px]">Solutions</h5>
                <h5 className="text-[#737373] text-[13px]">
                  AI-Powered Healthcare Tools
                </h5>
                <h5 className="text-[#737373] text-[13px]">
                  Biomedical Devices for Regenerative Medicine
                </h5>

                <h5 className="text-[#737373] text-[13px]">
                  Microorganism Experimentation
                </h5>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-white text-[13px]">Collaborations</h5>
                <h5 className="text-[#737373] text-[13px]">Partner with Us</h5>
                <h5 className="text-[#737373] text-[13px]">
                  Research Grants and Funding Opportunities
                </h5>
                <h5 className="text-[#737373] text-[13px]">
                  Academic Collaborations
                </h5>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-white text-[13px]">Resources</h5>
                <h5 className="text-[#737373] text-[13px]">
                  Blog and Insights
                </h5>
                <h5 className="text-[#737373] text-[13px]">Case Studies</h5>
                <h5 className="text-[#737373] text-[13px]">White Papers</h5>
              </div>

              <div className="flex flex-col gap-3">
                <Link to={"/contact-us"} className="text-white text-[13px]">
                  Contact Us
                </Link>
                <h5 className="text-[#737373] text-[13px]">Get in Touch</h5>
                <h5 className="text-[#737373] text-[13px]">Our Locations</h5>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </div>
    </div>
  );
};

export default Footer;

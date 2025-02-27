import React, { useEffect, useState } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../component/UI/LoadingSpinner";
import { UserApis } from '../../component/api/userApis';

const Partner = () => {
  const [loader, setLoader] = useState(false);

   const [formData, setFormData] = useState({
    businessName: "",
      email: "",
      phoneNumber: "",
    link: "",
    reason: "",
    description: "",
    partnerType: ""
    });
  
    // Handle input changes
    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);
      
        const partnerType = "investor"; // Set partnerType here

        // Map the form data to the keys expected by the backend
        const payload = {
          businessName: formData.businessName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          link: formData.link,
          reason: formData.reason,
          description: formData.description,
        };
      
        // console.log(formData)
        // console.log(payload)
        // setLoader(false)

        try {
          const response = await UserApis.registerPartner(formData.partnerType, payload);
          // console.log("Contact created", response.data);
          if (response?.data) {
            toast.success("Form submitted successfully!");
            setFormData({
              businessName: "",
              email: "",
              phoneNumber: "",
              link: "",
              reason: "",
              description: "",
              partnerType: ""
            });
          } else {
            toast.error("Failed to submit form");
          }
        } catch (error:any) {
          // console.error("Error creating contact", error);
          toast.error(error.response.data.message || "An error occurred while submitting the form");
        } finally {
          setLoader(false);
        }
      };

  return (
    <div>
   <div className="bg-[#262626] h-full  relative">
      <div className="bg-black">
        <div
          className="about-transition_main-img bg-cover bg-center h-full"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b7eb0c290e7bf3aaab98f0_tranisiton-bg.webp')",
          }}
        >
          <div className="flex justify-center">
            <div className="max-w-[2000px] lg:px-14 px-3 w-full">
              <div className="flex justify-center">
                <Navbar />
              </div>
              {/* <div className="flex justify-center mt-[200px] mb-[200px]">
                <h3 className="text-white text-center text-[40px] md:text-[60px] font-[500] max-w-[700px]">
                  We are closer to you than you think, Get in Touch
                </h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[150px] mb-20">
        <div id="get-in-touch" className="flex justify-center ">
          <h3 className="text-[#f5f5f5] text-center leading-[45px] lg:leading-[60px]  z-10 text-[40px] lg:text-[4rem] ">
            Partners/Investors Form
          </h3>
        </div>
        {/* <div className="flex justify-center">
          <h3 className="text-[#737373] max-w-[600px] z-10 text-center text-[19px] md:text-[25px] ">
            Have questions or want to collaborate? Let’s build a healthier,
            longer future together.
          </h3>
        </div> */}

        {/* <div className="flex mt-5 mb-10 justify-center">
          <div className="lg:flex z-10 gap-4">
            <div className="flex z-10 gap-2 justify-center py-2 text-white bg-[#262626] items-center text-[16px] px-3  rounded-[12px]">
              Book Consultation
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 25.3594L11 22.7812V4.6875L20 7.26562V25.3594ZM21.5 25.2656V7.17188L27.4531 4.78125C28.1562 4.5 29 5.01562 29 5.8125V21.5156C29 21.9844 28.7188 22.4062 28.25 22.5469L21.5 25.2656ZM2.70312 7.5L9.5 4.78125V22.875L3.5 25.2656C2.79688 25.5469 2 25.0312 2 24.2344V8.53125C2 8.0625 2.28125 7.64062 2.70312 7.5Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>

            <div className="flex z-10 mt-3 lg:mt-0 gap-2 py-2 justify-center bg-[#23F7DD] text-[#080808] items-center text-[16px] px-7  rounded-[12px]">
              Contact Us
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 items-center"> */}
      <div className="flex justify-center">
      <div className="max-w-[2000px] lg:px-14 px-3 w-full">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 mb-4 gap-4">
            <div className="relative w-full ">
              <label
                htmlFor="businessName"
                className="block mb-2 text-[24px] font-semibold text-white"
              >
                Business Name
              </label>
              <input
                type="text"
                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                placeholder="Enter First Name"
                name="businessName"
                value={formData.businessName}
                    onChange={handleChange}
                required
              />
            </div>
            <div className="relative w-full ">
              <label
                htmlFor="email"
                className="block mb-2 text-[24px] font-semibold text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                placeholder="Enter email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {/* {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>} */}
            </div>
         
            </div>

            <div className="grid md:grid-cols-2 mb-4 gap-4">

            <div className="relative w-full  ">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-[24px] font-semibold text-white"
              >
                Phone Number
              </label>
              <input
                type="number"
                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                    onChange={handleChange}
                required
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="link"
                className="block mb-2 text-[24px] font-semibold text-white"
              >
              Website os Social Media Link
              </label>
              <input
                type="text"
                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                placeholder="Enter link"
                name="link"
                value={formData.link}
                    onChange={handleChange}
                required
              />
            </div>
           
            </div>
            <div className="relative w-full mb-4">
  <label htmlFor="partnerType" className="block mb-2 text-[24px] font-semibold text-white">
    Partner Type
  </label>
  <select
    name="partnerType"
    value={formData.partnerType}
    onChange={handleChange}
    className="border bg-[#262626] border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373] ease-linear transition-all duration-150"
    required
  >
    <option value="">select</option>
    <option value="investor">Investor</option>
    <option value="partner">Partner</option>
  </select>
</div>

            <div className="mb-4 ">
              <label
                htmlFor="description"
                className="block mb-2 text-[24px] font-semibold text-white"
              >
               Brief Description of Business/Services
              </label>
              <textarea
                id="description"
                rows={4}
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                placeholder="Enter your message here..."
              ></textarea>
            </div>

            <div className="mb-4 ">
              <label
                htmlFor="reason"
                className="block mb-2 text-[24px] font-semibold text-white"
              >
              Reason for Partnership
              </label>
              <textarea
                id="reason"
                rows={4}
                required
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <div className="lg:pl-4 mb-7">
              <button
                type="submit"
                className="py-4 px-9  text-lg font-medium  bg-[#23F7DD] rounded-lg "
              >
        {loader ? <LoadingSpinner /> : "Submit"}
              </button>
            </div>
          </form>
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
        {/* </div> */}
   

      <Footer />
    </div>
    </div>
  )
}

export default Partner
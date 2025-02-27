import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserApis } from '../../component/api/userApis';
import { AxiosResponse } from 'axios';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from '../../component/UI/LoadingSpinner';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

        const [formData, setFormData] = useState({
     
          email: "",
          password: ""
        });

        // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
      const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      setLoader(true)
        e.preventDefault();
    
        const payload = {
          email: formData.email,
          password: formData.password
        };
    
        UserApis.adminLogin(payload).then(
          (response: AxiosResponse<any>) => {
            // console.log(response)
            if (response?.data) {
            // console.log(response?.data?.data?.user?.token)

    const token = response?.data?.data?.user?.token;
        localStorage.setItem("auth_token", token);
                    
              
              toast.success("Login successfully!");
      setLoader(false)
       
                    navigate("/admin-dashboard");
            
            } else {
              toast.warn('Invalid Login Credentials');
      setLoader(false)
           
            }
    
            toast.success(response?.data?.message);
          }
        ).catch(function (error) {
          // handle error
          console.log(error.response.data);
          toast.error("Offline");
      setLoader(false)
    })
      }
  return (
<>
      {/* <Navbar/> */}
      <div className=" bg-[#262626] pt-16 pb-32 h-full">
        <div className='flex justify-center'>
        <NavLink to={'/'}>
              <img src="/logo.svg" className="w-fit h-20" alt="" />
            </NavLink>
        </div>
        <div className="container flex flex-col md:justify-center mx-auto items-center rounded-lg p-6 md:max-w-3xl">
          <div>
         
            <h1 className="mt-6 text-white lg:text-[32px] text-[28px] font-semibold">Welcome Back Admin!</h1>
            <p className='text-center text-white text-[14px] font-normal'>Enter the fields below to get started with the dashboard</p>
          </div>
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto mt-5">
                  <div className="relative flex flex-col min-w-0 break-words w-full">
                    <div className="flex-auto py-10 pt-0">
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12">
                          <div className="relative w-full mb-6">
                            <label className="block mb-2 text-sm font-semibold text-white">
                              Email Address*
                            </label>
                            <input
                              type="email"
                              className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                              placeholder="Enter Email"
                              name="email"
                              required
                              value={formData.email}
                    onChange={handleChange}
                     />
                          </div>
                        </div>

                        <div className="w-full lg:w-12/12">
                          <div className="relative w-full">
                            <label className="block mb-2 text-sm font-semibold text-white">
                              Password*
                            </label>
                            <div className="relative">
                              <input
                                type={show ? "text" : "password"}
                                className="border bg-transparent border-[#737373] text-white text-[18px] rounded-[10px] block w-full p-3 placeholder-[#737373]  ease-linear transition-all duration-150"
                                placeholder="Enter password"
                                value={formData.password}
                    onChange={handleChange}
                    name="password"
                                required
                              />
                              <span
                                className="absolute right-3 top-5 cursor-pointer text-white"
                                onClick={() => setShow(!show)}
                              >
                                {show ? <FaEyeSlash /> : <FaEye />}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=''>
                  {/* <div>
                    <h3 className="text-center text-[12px] cursor-pointer">
                      By continuing you agree to M-Mart +'s <br />
                      <Link to="/terms-and-condition" target='_blank'>
                        <span className="underline underline-offset-1 text-[#027DCB]"> Terms and Conditions</span>
                      </Link>
                    </h3>
                  </div> */}
                  <button
                    type="submit"
                    className="w-full bg-[#23F7DD] font-medium rounded-[5px] text-sm px-5 py-3 mr-2 mt-2 mb-2"
                  >
                    {loader ? <LoadingSpinner /> : "Login"}
             
                  </button>
                  {/* <NavLink to={"/forgot-password"} className="mt-1 text-right">
                    <p className="text-white text-sm font-semibold">Forgot Password?</p>
                  </NavLink> */}
                </div>

                {/* <p className="text-center text-[#0A0A0C] mt-2 text-[14px] font-semibold">
                  Don't have an account?{" "}
                  <NavLink to="/sign-up">
                    <span className="text-white cursor-pointer font-bold">Sign Up</span>
                  </NavLink>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Login
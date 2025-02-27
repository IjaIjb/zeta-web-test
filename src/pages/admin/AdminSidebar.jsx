import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
    <nav className="bg-[#000000] md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl  flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-[#000000] m-2 py-3 px-6")}
        >
          <b className="fas fa-bars"> ≡ </b>
        </button>
        {/* Brand */}
        {/* <Link
          className="md:mt-10 md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          to="/"
        >
          <img src="/images/Dashboard/logo.svg" alt="hero" />
        </Link> */}
        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            {/* <NotificationDropdown /> */}
          </li>
          <li className="inline-block relative">
            {/* <UserDropdown /> */}
          </li>
        </ul>
        {/* Collapse */}
        <div
          className={
            "bg-[#000000] md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className=" md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">

              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <b className="fas fa-times"> X </b>
                </button>
              </div>
            </div>
          </div>
          {/* Form */}



          <div className="flex space-x-2 pt-10">
            {/* <div>
              <img src="/images/Dashboard/Userpic1.svg" alt="hero" />
            </div> */}
            <div>
              <h1 className="text-white text-md">Welcome Admin !</h1>
              {/* <p className="text-white text-xs">ige@gmail.com</p> */}

            </div>
            {/* <div>
              <h3 className="text-white text-sm">{userLoginData?.name}</h3>
              <p className="text-white text-xs">{userLoginData?.email}</p>
              
            </div> */}
          </div>


          {/* Heading */}

          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mt-10 mt-10">
          <li className="items-center">
              <NavLink
              style={{
                backgroundColor: (window.location.href.indexOf("/admin/dashboard") !== -1
                  ? "rgba(255, 255, 255, 0.1)"
                  : "text-black hover:text-blueGray-500")
              }}
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/admin-dashboard") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin-dashboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
                Dashboard
              </NavLink>
            </li> 

            
            <li className="items-center mt-2">
              <NavLink
            onClick={() => setCollapseShow("hidden")}
            style={{
              backgroundColor: (window.location.href.indexOf("/admin/contact-list") !== -1
                ? "rgba(255, 255, 255, 0.1)"
                : "text-black hover:text-blueGray-500")
            }}
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/admin/contact-list") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin/contact-list"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
               Contact List
              </NavLink>
            </li> 
           
       
            <li className="items-center mt-2">
              <NavLink
            onClick={() => setCollapseShow("hidden")}
            style={{
              backgroundColor: (window.location.href.indexOf("/admin/wait-list") !== -1
                ? "rgba(255, 255, 255, 0.1)"
                : "text-black hover:text-blueGray-500")
            }}
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/admin/wait-list") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin/wait-list"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
              Wait List
              </NavLink>
            </li> 

            <li className="items-center mt-2">
              <NavLink
            onClick={() => setCollapseShow("hidden")}
            style={{
              backgroundColor: (window.location.href.indexOf("/admin/partners") !== -1
                ? "rgba(255, 255, 255, 0.1)"
                : "text-black hover:text-blueGray-500")
            }}
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/admin/partners") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin/partners"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
           Partners
              </NavLink>
            </li> 
            {/* <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/admin-dashboard") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin-dashboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
             Partnerships
              </NavLink>
            </li> 

            <li className="items-center">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/admin-dashboard") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/admin-dashboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
           Waitlist
              </NavLink>
            </li>  */}
            {/* <li className="items-center mt-2">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#1DB459', paddingLeft: "12px", borderRadius: "8px" } : { color: '#FFFFFF' }
                }
                className={
                  "text-sm  py-2 pl-3 font-light flex  " +
                  (window.location.href.indexOf("/users") !== -1
                    ? "text-white hover:text-lightBlue-600"
                    : "text-white hover:text-blueGray-500")
                }
                to="/users"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2" viewBox="0 0 24 24"><path fill="white" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"/></svg>

                Users
              </NavLink>
            </li>  */}


            {/* onClick={logOut} */}
            <li className="flex justify-start py-10" style={{ cursor: 'pointer' }} 
            // onClick={logOut}
            >

              <svg width="20" className="mr-2" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3337 11.3334V9.66675H5.83366V7.16675L1.66699 10.5001L5.83366 13.8334V11.3334H13.3337Z" fill="white" />
                <path d="M16.6667 3H9.16667C8.2475 3 7.5 3.7475 7.5 4.66667V8H9.16667V4.66667H16.6667V16.3333H9.16667V13H7.5V16.3333C7.5 17.2525 8.2475 18 9.16667 18H16.6667C17.5858 18 18.3333 17.2525 18.3333 16.3333V4.66667C18.3333 3.7475 17.5858 3 16.6667 3Z" fill="white" />
              </svg>

              <span className=" text-white">Logout</span>

            </li>
          </ul>











        </div>
      </div>
    </nav>
  </>
  )
}

export default AdminSidebar
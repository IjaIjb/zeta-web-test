import React, { useEffect, useState } from 'react'
import UserNavbar from "./UserNavbar";
import AdminSidebar from './AdminSidebar';
import { UserApis } from '../../component/api/userApis';
const AdminDashboard = () => {

      const [contact, setContact] = useState<any>([]);
      const [partners, setPartners] = useState<any>([]);
      const [waiters, setWaiters] = useState<any>([]);
      const [loader, setLoader] = useState(false);
    
      useEffect(() => {
        setLoader(true);
    
        UserApis.fetchContacts()
          .then((response) => {
            // console.log(response)
            if (response?.data) {
              // console.log(response?.data);
              setContact(response?.data);
        setLoader(false);
  
            }
          })
          .catch((error: any) => {
            console.error("Error fetching contacts:", error.response?.data);
        setLoader(false);
      })
          .finally(() => {
            setLoader(false);
          });
    
      }, []);

      useEffect(() => {
        setLoader(true);
    
        UserApis.fetchPartners()
          .then((response) => {
            // console.log(response)
            if (response?.data) {
              // console.log(response?.data);
              setPartners(response?.data);
        setLoader(false);
  
            }
          })
          .catch((error: any) => {
            console.error("Error fetching contacts:", error.response?.data);
        setLoader(false);
      })
          .finally(() => {
            setLoader(false);
          });
    
      }, []);
  
      useEffect(() => {
        setLoader(true);
    
        UserApis.fetchWaiters()
          .then((response) => {
            // console.log(response)
            if (response?.data) {
              // console.log(response?.data);
              setWaiters(response?.data);
        setLoader(false);
  
            }
          })
          .catch((error: any) => {
            console.error("Error fetching contacts:", error.response?.data);
        setLoader(false);
      })
          .finally(() => {
            setLoader(false);
          });
    
      }, []);
      
      // console.log(partners)
  return (
    <>
      <AdminSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
   <UserNavbar />
        <div className="space-y-2 lg:grid lg:grid-cols-3 sm:gap-5  lg:space-y-0 lg:py-16 lg:px-10 px-6 ">

          <div className="bg-[#ffffff] border border-[#D8D8D8] rounded-lg flex justify-between px-4 py-4">
            <div>
              <h3 className=" text-base text-black">Total Contacts</h3>
              <p className="text-3xl  text-black">
 {contact?.data?.length ?? 0}
              </p>
            </div>
           

          </div>
     
          <div className="bg-[#ffffff] border border-[#D8D8D8] rounded-lg flex justify-between px-4 py-4">
            <div>
              <h3 className=" text-base text-black">Total Partners</h3>
              <p className="text-3xl  text-black">
              {partners?.data?.length ?? 0}

              </p>
            </div>
          

          </div>
          <div className="bg-[#ffffff] border border-[#D8D8D8] rounded-lg flex justify-between px-4 py-4">
            <div>
              <h3 className=" text-base text-black">Waiters</h3>
              <p className="text-3xl  text-black">
              {waiters?.data?.length ?? 0}

              </p>
            </div>
        

          </div>

        </div>

      </div>
    </>
  )
}

export default AdminDashboard
import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import UserNavbar from './UserNavbar'
import { UserApis } from '../../component/api/userApis';
import axios from 'axios';

const ContactList = () => {



    const [data, setData] = useState<any>([]);
    const [loader, setLoader] = useState(false);
  
    useEffect(() => {
      setLoader(true);
  
      UserApis.fetchContacts()
        .then((response) => {
          // console.log(response)
          if (response?.data) {
            // console.log(response?.data);
            setData(response?.data);
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

    
    // console.log(data)
  return (
    <div>
             <AdminSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
   <UserNavbar />
   
   <div className="overflow-x-auto p-4 mt-10">
   <h1 className="text-xl font-bold mb-4">Contact list</h1>
   <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 rounded-[6px] px-3 bg-[#EFF1F3]">
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">First Name</th>
            <th className="py-2 px-4 text-left">Last Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone Number</th>
            <th className="py-2 px-4 text-left">Reason</th>
            <th className="py-2 px-4 text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((contact:any) => (
            <tr key={contact._id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{contact.firstName}</td>
              <td className="py-2 px-4">{contact.lastName}</td>
              <td className="py-2 px-4">{contact.email}</td>
              <td className="py-2 px-4">{contact.phoneNumber}</td>
              <td className="py-2 px-4">{contact.reason}</td>
              <td className="py-2 px-4">{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>
    </div>
  )
}

export default ContactList
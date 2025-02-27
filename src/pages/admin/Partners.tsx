import React, { useEffect, useState } from 'react'
import { UserApis } from '../../component/api/userApis';
import AdminSidebar from './AdminSidebar';
import UserNavbar from './UserNavbar';

const Partners = () => {

         const [data, setData] = useState<any>([]);
            const [loader, setLoader] = useState(false);
          
            useEffect(() => {
              setLoader(true);
          
              UserApis.fetchPartners()
                .then((response) => {
                //   console.log(response)
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

   <div className="overflow-x-auto p-6 mt-10">
   <h1 className="text-xl font-bold mb-4">Partners list</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 rounded-[6px] px-3 bg-[#EFF1F3]">
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border">Business Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Reason</th>
                <th className="p-2 border">Link</th>
                <th className="p-2 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((partner:any) => (
                <tr key={partner._id} className="border-t">
                  <td className="p-2 border">{partner.businessName}</td>
                  <td className="p-2 border">{partner.email}</td>
                  <td className="p-2 border">{partner.phoneNumber}</td>
                  <td className="p-2 border">{partner.description}</td>
                  <td className="p-2 border">{partner.reason}</td>
                  <td className="p-2 border">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {partner.link}
                    </a>
                  </td>
                  <td className="p-2 border">{new Date(partner.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

   </div>
    </div>
  )
}

export default Partners
import React, { useEffect, useState } from 'react'
import { UserApis } from '../../component/api/userApis';
import AdminSidebar from './AdminSidebar';
import UserNavbar from './UserNavbar';

const WaitList = () => {
    
        const [data, setData] = useState<any>([]);
        const [loader, setLoader] = useState(false);
      
        useEffect(() => {
          setLoader(true);
      
          UserApis.fetchWaiters()
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

   <div className="p-6 mt-10">
      <h1 className="text-xl font-bold mb-4">Wait list</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 rounded-[6px] px-3 bg-[#EFF1F3]">
          <tr className="bg-gray-100 border-b">
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((contact:any) => (
            <tr key={contact._id} className="border-t">
              <td className="border px-4 py-2">{contact.email}</td>
              <td className="border px-4 py-2">{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
    </div>
  )
}

export default WaitList
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { GiConfirmed } from "react-icons/gi";
import Swal from 'sweetalert2/src/sweetalert2.js';

const ManageBookings = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments/all");
      return res.data;
    },
  });

  console.log(orders);

  const handleConfirm = async (item) =>{
    console.log(item);
    await axiosSecure.patch('/payments/'+item._id)
    .then(res =>{
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Confirmed!",
        showConfirmButton: false,
        timer: 1500
      });
      refetch();
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Orders</h5>
        <h5>Total Orders: {orders.length}</h5>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Status</th>
                <th>Confirm Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>₹{item.price}</td>
                  <td>
                    {item.status}
                  </td>
                  <td className='text-center'>{item.status === "Confirmed" ? ( "Done" ) : 
                  ( <button onClick={()=> handleConfirm(item)} className="btn btn-xs bg-green text-white"><GiConfirmed /></button>)
                  }
                  </td>
                  <td>
                    <button  className="btn btn-xs bg-orange-500 text-white">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageBookings
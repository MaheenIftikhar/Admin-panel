import React, { useState } from "react";
import "../styles/ManageCustomer.css";
import { useNavigate, Link } from "react-router-dom";
const initialList = [
  {
    id: 1,
    name: "Ahmad",
    email: "AliAhmad@gmail.com",
    PhoneNumber: "0003455689",
    status: "Active",
  },
  {
             id: 2,
          name: "Noor Khan",
          email: "NoorKhan@gmail.com",
          PhoneNumber: "000389089",
          status: "Active",
  },
];
  const ManageCustomer=()=> {
  
    const [list, setList] = React.useState(initialList);
    function handleRemove(id) {
      const newList = list.filter((item) => item.id !== id);
  
      setList(newList);
    }

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title"> Customer Details</h2>

        
        <form>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>PhoneNumber</td>
                <td>Status</td>
                <td>Action</td>
                <td>Block</td>
              </tr>
            </thead>
            <tbody>
      {list.map((item,key) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.PhoneNumber}</td>
          <td>{item.status}</td>
          <td>
                      <Link to="/customerdetail" state={item}>
                        Click For Details
                      </Link>
                    
                    </td>
          <td>
          <button type="button" onClick={() => handleRemove(item.id)}>
            Block User
          </button></td>
        </tr>
      ))}
      </tbody>
    </table>
    </form>
      </div>
    </div>
  );
  
}

export default ManageCustomer;
  
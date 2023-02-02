import React, { useState } from "react";
import "../styles/ManageSeller.css";
import { useNavigate, Link } from "react-router-dom";

  const initialList = [
    {
      id: 1,
      name: "Ahmad",
      email: "AliAhmad@gmail.com",
      Orders: 9,
      status: "Active",
    },
    {
      id: 2,
      name: "Noor Khan",
      email: "NoorKhan@gmail.com",
      Orders: 17,
      status: "Active",
    },
    {
      id: 3,
      name: "Noor Khan",
      email: "NoorKhan@gmail.com",
      Orders: 17,
      status: "Active",
    },
    {
      id: 4,
      name: "Noor Khan",
      email: "NoorKhan@gmail.com",
      Orders: 17,
      status: "Active",
    },
    {
      id: 5,
      name: "Noor Khan",
      email: "NoorKhan@gmail.com",
      Orders: 17,
      status: "Active",
    },
    {
      id: 6,
      name: "Noor Khan",
      email: "NoorKhan@gmail.com",
      Orders: 17,
      status: "Active",
    },
  ];
  const ManageSeller=()=> {
  
    const [list, setList] = React.useState(initialList);
    function handleRemove(id) {
      const newList = list.filter((item) => item.id !== id);
  
      setList(newList);
    }
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title"> Seller Details</h2>

        
        <form >
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Orders</td>
                <td>Status</td>
                <td>Action</td>
                <td>Block</td>
              </tr>
            </thead>
            {/* jo list hum ne wahan use ki ha lists lain gy */}
            <tbody>
            {list.map((item,key) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.Orders}</td>
          <td>{item.status}</td>
          <td>
                      <Link to="/customerdetail" state={item}>
                        Click For Details
                      </Link>
                    
                    </td>
          <td>
          <button type="button" onClick={() => handleRemove(item.id)}>
            Block Seller
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

export default ManageSeller;
  
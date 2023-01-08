import React, { useState } from "react";
import "../styles/bookings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { useNavigate, Link } from "react-router-dom";
import Details from "./Details";
import DetailsInfo from "./DetailsInfo";
import { NavLink } from "react-router-dom";
function ManageProducts() {
  const list = [
    {
      id: 1,
      name: "HP",
      category: "car",
      bid_details: "10-12-21",
      status: "Active",
    },
    {
      id: 2,
      name: "Dell",
      category: "Book",
      bid_details: "11-12-21",
      status: "Not Active",
    },
  ];

  const navigate = useNavigate();
  const handleClick = (state) => {
    // console.log("from products=>", data);
    //<NavLink to={`/details/${id}`}></NavLink>
  };

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title"> In Active Bid</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Ongoing</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="books">Books</option>

              <option value="Sport Goods">Sport Goods</option>
              <option value="clothes">Clothes</option>
            </select>
          </div>
        </div>

        <form>
          <table>
            <thead className="heading">
              <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            {/* jo list hum ne wahan use ki ha lists lain gy */}
            <tbody className="details">
              {list.map((current) => {
                //             updateState === current.id ? (
                // <EditList current={current} lists={lists} setList={setList} />
                //             ) : (
                return (
                  <tr>
                    <td>{current.name}</td>
                    <td>{current.category}</td>
                    <td>{current.bid_details}</td>
                    <td>{current.status}</td>
                    <td>
                      <Link to="/details" state={current}>
                        Click For Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default ManageProducts;

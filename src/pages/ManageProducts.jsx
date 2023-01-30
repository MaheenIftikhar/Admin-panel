import React, { useState } from "react";
import "../styles/bookings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { useNavigate, Link } from "react-router-dom";
import Details from "./Details";

//import { NavLink } from "react-router-dom";
function ManageProducts() {
  const list = [
    {
      id: 1,
      name: "HP",
      category: "car",
      price:"Rs.300",
      bid_details: "10-12-21",
      status: "Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
      image:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2014/09/newgear2017-3.jpg"
    },
    {
      id: 2,
      name: "Dell",
      category: "Book",
      price:"Rs.500",
      bid_details: "11-12-21",
      status: "Not Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
    },
    {
      id: 3,
      name: "Dell",
      category: "Book",
      price:"Rs.500",
      bid_details: "11-12-21",
      status: "Not Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
    },
    {
      id: 4,
      name: "Dell",
      category: "Book",
      price:"Rs.500",
      bid_details: "11-12-21",
      status: "Not Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
    },
    {
      id: 5,
      name: "Dell",
      category: "Book",
      price:"Rs.500",
      bid_details: "11-12-21",
      status: "Not Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
    },
    {
      id: 6,
      name: "HP",
      category: "car",
      price:"Rs.300",
      bid_details: "10-12-21",
      status: "Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
      image:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2014/09/newgear2017-3.jpg"
    },
    {
      id: 7,
      name: "HP",
      category: "car",
      price:"Rs.300",
      bid_details: "10-12-21",
      status: "Active",
      discription:"The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one.It has a 200mp camera in the rear 100mp in front perfect for selfie lovers.",
      image:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2014/09/newgear2017-3.jpg"
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

       {/*} <div className="filter__widget-wrapper">
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
        </div> */}

        <form className="form_details">
          <table>
            <thead className="table">
              <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Bid Details</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            {/* jo list hum ne wahan use ki ha lists lain gy */}
            <tbody>
              {list.map((current,key) => {
                //             updateState === current.id ? (
                // <EditList current={current} lists={lists} setList={setList} />
                //             ) : (
                return (
                  <tr key={key}>
                    <td>{current.name}</td>
                    <td>{current.category}</td>
                    <td>{current.price}</td>
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

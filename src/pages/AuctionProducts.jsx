import React from "react";
import "../styles/AuctionProduct.css";

import AuctionItems from "../assets/dummy-data/AuctionItems.jsx";
import ProductItem from "../components/UI/ProductItem";

const AuctionProducts = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Active Bid</h2>

       {/* <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Ongoing</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="appliances">Appliances</option>
              <option value="Sport Goods">Sport Goods</option>
              <option value="clothes">Clothes</option>
            </select>
          </div>
        </div>*/}

        <div className="booking__car-list">
          {AuctionItems?.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionProducts;
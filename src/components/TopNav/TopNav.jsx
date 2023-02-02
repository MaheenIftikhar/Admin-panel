import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import Elements from "../../assets/dummy-data/Elements";
import "./top-nav.css";

const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
        {/*}  <input type="text" placeholder="search or type" />
          <span>
            <i className="ri-search-line"></i>
          </span> */}
        </div>

        <div className="top__nav-right">
      { /* <div className="registration__top">
        <button className="register__btn">Register Here
          <Link to ="./Registration"></Link></button>
        </div>
        <div className="login__top">
        <button className="login__btn">Login
          <Link to ="./Login"></Link></button>
         </div>*/}

        

          <span className="notification">
            <i className="ri-notification-3-line"></i>
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
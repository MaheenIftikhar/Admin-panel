import React, { useState } from 'react';
//import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

import Bid from "../../assets/images/Bid.png";



const Sidebar = () => {
  const { loginWithRedirect } = useAuth0();
  const[isloggedin,setisLoggedin]=useState("false");
 const Logout=()=> {{
  localStorage.clear('Logout');
  window.location.href = '/login';
  
  setisLoggedin(false);
 }};
  
  return (

    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
 {/*<i className="ri-taxi-line"></i>*/}
      <img src={Bid
      } alt="Bid"/>
           
          </span>{" "}
          BidBazaar
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClassName) =>
                    navClassName.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>
                  {item.display}
                </NavLink>

                

              </li>
              
            ))}
          </ul>
        </div>


       {/* <div className="sidebar__bottom">
          <span>
          <button onClick={() =>loginWithRedirect()}>Log In</button>;
          </span>
        </div>*/}



        <div className="sidebar__bottom">
          <span>
           <button btn-primary onClick={Logout}>Logout</button>
          </span>

          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
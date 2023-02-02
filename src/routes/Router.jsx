import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ManageProducts from "../pages/ManageProducts";

import SoldProduct from "../pages/SoldProduct";
import Settings from "../pages/Settings";
import AuctionProducts from "../pages/AuctionProducts";
//import Login from "../pages/Login";
import AddCategories from "../pages/AddCategories";
import ManageCustomer from "../pages/ManageCustomer";
import ManageSeller from "../pages/ManageSeller";
import Details from "../pages/Details";
import CustomerDetail from "../pages/CustomerDetail";
//import SellerDetail from "../pages/SellerDetail";
import Payment from "../pages/Payment";
import Orders from "../pages/Orders";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manageproducts" element={<ManageProducts />} />
      <Route path="/soldproducts" element={<SoldProduct />} />
      <Route path="/AuctionProducts" element={<AuctionProducts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/AddCategories" element={<AddCategories />} />

      <Route path="/details" element={<Details />} />
      <Route path="/managecustomer" element={<ManageCustomer />} />
      <Route path="/manageseller" element={<ManageSeller />} />
      <Route path="/customerdetail" element={<CustomerDetail />} />
      <Route path="/payment" element={<Payment />} />
      
      <Route path="/orders" element={<Orders/>}/>
      
      
    </Routes>
  );
};

export default Router;

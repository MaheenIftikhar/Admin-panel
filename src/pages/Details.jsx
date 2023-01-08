import React from "react";
import { useLocation } from "react-router-dom";
function Details() {
  const { state } = useLocation();
  // console.log(state);
  console.log("from details=>", state);
  return <div>Details</div>;
}

export default Details;

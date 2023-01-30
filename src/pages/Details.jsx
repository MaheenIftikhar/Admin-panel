import React from "react";
//import { WrapperField } from "react-admin";
import { useLocation } from "react-router-dom";
import '../styles/Details.css';
function Details() {
  const { state } = useLocation();
   //console.log(state);

return(
  
<div className="details">
      <div className="details__wrapper">
          <h2 className="details__title">Product Detail</h2>

                <center>
                <div class="card">
  <img class="card-img-top"  
      src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2014/09/newgear2017-3.jpg"
      alt="new"
      />
  <div class="card-body">
    <h3 class="card-title">Product Name:{state.name}</h3>
          <h4>{state.category}</h4>
   <p class="card-text">Description:{state.discription}
         </p>
      <h5>{state.price}</h5>
      <h5>{state.bid_detail}</h5>
      <h5>{state.status}</h5>
    
  </div>
</div>
        </center>
        </div>
        </div>
        


  //console.log("from details=>", state);
  
)
  
}

export default Details;

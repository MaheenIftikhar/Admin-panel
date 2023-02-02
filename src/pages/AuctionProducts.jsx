import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import "../styles/AuctionProduct.css";

//import AuctionItems from "../assets/dummy-data/AuctionItems.jsx";
//import ProductItem from "../components/UI/ProductItem";

const AuctionProducts = () => {
  const [users,setusers]=useState([]);
  const[singleuser,setsingleuser] = useState([]);
  useEffect(function(){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setusers(response.data))
      .then((error)=>console.log(error));
  },[]);
  const onhandleClick = (e) =>{
    axios.get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
          .then((response) => setsingleuser(response.data))
          .then((error)=>console.log(error));
  
  }


  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Auction Products</h2>

        <div>
    
    <ul className="List" onClick={onhandleClick}>
    {
        users.map((user) =>(
        <li key ={user.id}value={user.id}>{user.name}</li>
        ))
    }
    </ul>
    <br/>
    <br/>
    <Table>
      <thead>
      <tr>
        <td>Id</td>
        <td>username</td>
        <td>email</td>
        <td>address</td>
      </tr>
      </thead>
      <tbody>
      {
<tr>
  <td>{singleuser.id}</td>
  <td>{singleuser.name}</td>
  <td>{singleuser.username}</td>
  <td>{singleuser.email}</td>
</tr>
      }
      </tbody>
    </Table>
    </div>




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

       {/* <div className="booking__car-list">
          {AuctionItems?.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}*/}












          
        </div>
      </div>
    
  );
};

export default AuctionProducts;
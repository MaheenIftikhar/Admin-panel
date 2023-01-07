import React from "react";
import img1 from "../assets/images/img1.jpg";
import "../styles/sell-car.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const SellCar = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sold Product</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>Book</h2>
            <img src={img1} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Purchase Details</h2>

            <div className="filter__widget-01">
              <select>
                <option value="Toys">Toys</option>
                <option value="clothes">Clothes</option>
                <option value="appliances">Appliances</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Killian James</h3>
                <h6 className="avg__price">
                  Rs. 1200 <span>First average price</span>
                </h6>

                <h6 className="market__price">Bid price is Rs. 1100</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">Rs. 1100</h6>
                <p className="spend__title">Total Amount</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">Rs. 1100</h6>
                <p className="spend__title">Due Payment</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Jhon Doe</h3>
                <h6 className="avg__price">
                  $11,605 <span>First average price</span>
                </h6>

                <h6 className="market__price">Second Bid Price is Rs.1000 </h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">Rs.1000</h6>
                <p className="spend__title">Total Amount</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">Rs 1000</h6>
                <p className="spend__title">Due Payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Seller Information</h2>
            </div>


            <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Ahmad Ali</h3>
                <h6 className="avg__price">
                  ...... <span>.....</span>
                </h6>

                <h6 className="market__price">.......</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </div>
</div>
</div>


      </div>
    </div>
  );
};

export default SellCar;
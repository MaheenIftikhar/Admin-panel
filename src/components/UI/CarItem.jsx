import React from "react";

const CarItem = (props) => {
  const { Category, Time, Price, imgUrl, Name, Discription, Condition } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{Name}</h3>
           
        </div>
        <p>{Category}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" />
      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {Discription}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {Time}
          </p>
          
        </div>
</div>

<div className="car__item-bottom">
        <div className="car__bottom-left">
        <p className="car__rent">${Price} 
        </p>
      <p className="car__condition">{Condition}
      </p>
      </div>
    </div>
    </div>
  );
};

export default CarItem;
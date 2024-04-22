import React, { useContext } from "react";
import "./FoodItems.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItems = ({ id, name, description, price, image }) => {
  const {carditem, addToCard, removecarditem} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-container-image">
        <img src={image} alt="error" className="food-item-image" />
        {!carditem[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCard(id)}
            alt="error"
            className="add"
          />
        ) : (
          <div className="counter-wrapper">
            <>
              <img
                src={assets.remove_icon_red}
                onClick={() => removecarditem(id)}
                className="food-item-counter"
              />
              {/* Define itemCount here */}
              <p>{carditem[id]}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => addToCard(id)}
                alt="error"
              />
            </>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="error" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;

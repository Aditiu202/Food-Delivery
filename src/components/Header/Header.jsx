import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your Favourite food here</h2>
        <p>
          Provide users with information about the nutritional content of
          recipes, including calorie counts, macronutrient breakdowns, and key
          vitamins and minerals. This helps users make informed decisions about
          their food choices.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header
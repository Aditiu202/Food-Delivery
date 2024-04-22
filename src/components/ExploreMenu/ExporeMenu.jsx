import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExporeMenu = ({category, setCategory}) => {
  return (
    <div className="expolre-menu" id="expolre-menu">
      <h1>Explore Our Menu</h1>
      <p className="expolre-menu-text">
        Indulge in our delectable selection of culinary delights, showcasing a
        tantalizing array of dishes crafted with care and expertise. From savory
        classics to innovative creations, our menu offers something to satisfy
        every palate
      </p>
      <div className="explore-menu-list">
        {menu_list.map((items, index) => {
          return (
            <div onClick={()=>{setCategory(prev=>prev===items.menu_name?"ALL":items.menu_name)}}    key={index} className="explore-menu-list-items">
              <img className={category===items.menu_name?'active':" "} src={items.menu_image} alt="error" />
              <p>{items.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExporeMenu
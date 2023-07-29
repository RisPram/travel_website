import React from 'react'
import beach from "../../Assets/kovalamBeach.jpg";
const Popularplaces = ({name,address,distance}) => {
  return (
    <div className="popular-places-card">
       <img src={beach} alt="#" className="image-card"/>
       <div className={`name ${name.length>80?"name-ellipsis":""}`}>{name}</div>
       <div className="address">{address}</div>
       <div className="distance">{distance} metres</div>
    </div>
  )
}

export default Popularplaces

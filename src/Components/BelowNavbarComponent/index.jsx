import React from 'react'
import "./styles.scss"
import bgImage from "../../Assets/backimg.jpeg";
import googlemaps from "google-map-react";


export default function BelowNavbarComponent() {


    return <>

       
       <div className="col-12 col-sm-12 col-md-11 col-xl-12 col-lg-12 col-xxl-12 
    below-navbar-main">
        <div className="choose-location
        col-12 col-sm-12 col-md-10 col-xl-10 col-lg-10 col-xxl-10 ">
            <h2>Choose your travel location</h2>
            <div className="input-box-container">
            <input type="text" placeholder="Destination Name" />
            <input type="date" />
            <input type="number" placeholder="Distance in kms" />
            <input type="button" value="Search" className="btn"/> 
            </div>
        </div>
    </div>
    </>





}

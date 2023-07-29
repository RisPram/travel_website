
import React from 'react'
import "./App.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from './Components/Navbar/Navbar'
import BelowNavbarComponent from './Components/BelowNavbarComponent'
import PopularDestination from './Components/PopularDestinations'


export default function App() {
  return (
    <div className=" col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 d-flex 
    align-items-center flex-column 
    app-main">
      <Navbar/>
      <BelowNavbarComponent/>
      <PopularDestination/>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import "./styles.scss"
import Popularplaces from './Popularplaces'
import { getPLaces } from "../../Api/index"
function PopularDestination() {

  const [state, setState] = useState({
    allData: [],
    lat: "",
    long: "",
  }

  )

  useEffect(
    () => {
      //api to get the places
      handleApi()

    }
    , []
  )

  const handleApi = () => {
    //to get latitude and longitude of current place
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position>>>", position.coords.latitude, position.coords.longitude)


      getPLaces(position.coords.latitude, position.coords.longitude)
      .then(x => {
        console.log("my x>>", x)
        setState((prev) => {
          return {
            ...prev,
            lat: position.coords.latitude,
            long: position.coords.longitude,
            allData: x?.data?.results
          }

        })
      })
    })


    
  }

  console.log("alldata>>", state.allData)
  return (
    <div className="col-12 col-sm-12 col-md-11 col-xl-10 col-lg-10 col-xxl-10 
    popular-destination">
      <h3>Popular Destinations </h3>
      <p className="popular-destination-intro">Travelling gives you the opportunity to discover a new you..</p>
      <div className="popular-places-container">

        {state.allData?.map((d, i) => {
          return <Popularplaces key={d?.id}
            // images={d?.images}
            name={d?.name}
            address={d?.address}
            distance={d?.distance}

          />
        })}
      </div>

    </div>
  )
}

export default PopularDestination

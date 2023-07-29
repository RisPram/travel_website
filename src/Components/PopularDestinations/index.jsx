import React, { useEffect, useState } from 'react'
import "./styles.scss"
import Popularplaces from './Popularplaces'
import { getNearbyLocation } from "../../Api/index"
function PopularDestination() {

  const [state, setState] = useState({
   allData:[]
  }

  )

  useEffect(
    () => {
      //to get latitude and longitude of current place
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("position>>>", position.coords.latitude, position.coords.longitude)
      })

      //api to get the tourist spots
      handleApi()

    }
    , []
  )

  const handleApi = () => {
    getNearbyLocation().then(x => { 
console.log("meera x>>",x)
      setState((prev)=>{
        return{
          ...prev,
          allData: x?.data?.results
        }

      })
     })
  }


  return (
    <div className="col-12 col-sm-12 col-md-11 col-xl-10 col-lg-10 col-xxl-10 
    popular-destination">
      <h3>Popular Destinations </h3>
      <p className="popular-destination-intro">Travelling gives you the opportunity to discover a new you..</p>
      <div className="popular-places-container">

        {state.allData?.map((d, i) => { return <Popularplaces key={d?.id}
        images={d?.images}
         name={d?.name}
         address={d?.address}
         distance={d?.distance}
        
        /> })}
      </div>

    </div>
  )
}

export default PopularDestination

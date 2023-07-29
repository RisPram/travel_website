import axios from "axios";
import {places} from "./apiList";

// export const getTouristPlacesData= async()=>{

// const options = {
//   method: 'GET',
//   url: 'https://trueway-places.p.rapidapi.com/FindPlacesNearby',
//   params: {
//     location: '22.804565, 86.202873',
//     type: 'tourist_attraction',
//     // radius: '180',
//     language: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': '64f252b8f1msh2d768cb804437eep183342jsn66110a4139c3',
//     'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	// console.log(response.data);
//     return response;
// } catch (error) {
// 	console.error(error);
// }





// }

// export const getHotelsData= async()=>{


// const options = {
//   method: 'GET',
//   url: 'https://airbnb13.p.rapidapi.com/search-location',
//   params: {
//     location: 'Delhi',
//     checkin: '2023-09-16',
//     checkout: '2023-09-17',
//     adults: '1',
//     children: '0',
//     infants: '0',
//     pets: '0',
//     page: '1',
//     currency: 'INR'
//   },
//   headers: {
//     'X-RapidAPI-Key': '64f252b8f1msh2d768cb804437eep183342jsn66110a4139c3',
//     'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios(options);
// 	return response;
// } catch (error) {
// 	console.error(error);
// }}

// export const getNearbyLocation=async()=>{

// const options = {
//   method: 'GET',
//   url: 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=23.0391808,72.6269952,100',
//   params: {
//     lang: 'en',
//     show: 'webcams:image,location'
//   },
//   headers: {
//     'X-RapidAPI-Key': '64f252b8f1msh2d768cb804437eep183342jsn66110a4139c3',
//     'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios(options);
// 	return response;
// } catch (error) {
// 	console.error(error);
// }
// }

export const getPLaces=async(lat,long)=>{

const options = {
  method: 'GET',
  url: 'https://trueway-places.p.rapidapi.com/FindPlacesNearby',
  params: {
    location: `${lat}, ${long}`,
    type: 'cafe,food,taxi_stand,temple,tourist_attraction,zoo',
    radius: '10000',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '64f252b8f1msh2d768cb804437eep183342jsn66110a4139c3',
    'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
  }
};

try {
	const response = await axios(options);
	// console.log(response.data);
  return response;
} catch (error) {
	console.error("got error from api>>",error.message);
}
}
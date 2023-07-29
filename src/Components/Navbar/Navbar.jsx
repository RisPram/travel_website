import React, {useState,useEffect} from 'react'
import "./styles.scss"
import travellogo from "./../../Assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {

    const [height,setHeight]=useState(window.scrollY);
    useEffect(()=>{
        window.addEventListener("scroll",adjustHeight);

        return ()=>window.addEventListener("scroll",adjustHeight);
    },[])

    const adjustHeight=()=>{
        setHeight(window.scrollY)
    }

    return (

        <div className={`col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 
        d-flex justify-content-center
        navbar-outer
        ${height>500?"add-bgcolor":""}`}>
        <div className={`col-11 col-sm-11 col-md-10 col-xl-10 col-lg-10 col-xxl-10 navbar-main
        `}>
            <div className="logo-leftside ">
                <img src={travellogo} alt="#" /><span>TRAVELCARO</span>
            </div>
            <div className="menu-middle">
                <span><HomeIcon/>Home</span>
                <span><InfoIcon/>About Us</span>
                <span><TravelExploreSharpIcon/>Service</span>
                <span><PhoneIcon/>Contact</span></div>
            <div className="rightside">
            <LoginIcon/>
            <span> Login</span>
            </div>

        </div>
        </div>
    )
}

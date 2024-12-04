import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import TravelInsight from "./Pages/TravelInsight";
import Bookings from "./Pages/Booking";
import Layout from "./Pages/Layout";
import './index.css'
import NoPageFound from "./Pages/NoPage";
import UnderDevelopment from "./Pages/UnderDevelopment";
import Tourism from "./Pages/tourism";
import GorillaPermits from "./Pages/gorilla-permits";
import HotelReservation from "./Pages/hotel-reservation"; 
import CarRental from "./Pages/car-rental";
import Gallery from "./Pages/gallery"
import CountryContents from "./Pages/CountryContents";
const SafariLanding: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="tourism" element={<Tourism />} />
    <Route path="gorilla-permit" element={<GorillaPermits/>}/>
    <Route path="hotel-reservation" element={<HotelReservation/>}/>
    <Route path="gallery" element={<Gallery/>}/>
    <Route path="car-rental" element={<CarRental/>}/>
    <Route path="services" element={<Services />} />
    <Route path="contact" element={<Contact />} />
    <Route path="travelInsight" element={<TravelInsight />} />
    <Route path="bookings" element={<Bookings />} />
    <Route path="underDevelopment" element={<UnderDevelopment />} />
    <Route path="countryContents" element={<CountryContents />} />
    <Route path="*" element={<NoPageFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default SafariLanding;


import React from 'react';
import Home from '../Components/Home';
import Booking from '../Components/Booking';
import Plantrip from '../Components/PlanTrip';
import VechileModels from '../Components/VechileModels';
import WhyChooseUs from '../Components/WhyChooseUs';
import Footer from '../Components/Footer';
const HomePage = () => {
  return (
    <>
    <Home/>
    <Booking/>
      <Plantrip/>
      <VechileModels/>
      <WhyChooseUs/>
      <Footer/>
    </>
  );
}

export default HomePage;

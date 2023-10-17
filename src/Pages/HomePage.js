import React from 'react';
import Home from '../Components/Home';
import Booking from '../Components/Booking';
import Plantrip from '../Components/PlanTrip';
import VechileModels from '../Components/VechileModels';
import WhyChooseUs from '../Components/WhyChooseUs';
const HomePage = () => {
  return (
    <>
    <Home/>
    <Booking/>
      <Plantrip/>
      <VechileModels/>
      <WhyChooseUs/>
    </>
  );
}

export default HomePage;

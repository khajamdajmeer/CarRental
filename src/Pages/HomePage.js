import React from 'react';
import Home from '../Components/Home';
import Booking from '../Components/Booking';
import Plantrip from '../Components/PlanTrip';
import VechileModels from '../Components/VechileModels';
const HomePage = () => {
  return (
    <>
    <Home/>
    <Booking/>
      <Plantrip/>
      <VechileModels/>
    </>
  );
}

export default HomePage;

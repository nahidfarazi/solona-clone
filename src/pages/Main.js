import React from 'react';
import Adoption from '../components/Adoption';
import CommunitySection from '../components/CommunitySection';
import Hero from '../components/home/Hero';
import Power from '../components/Power';
const Home = () => {
  return (
    <div>
        

      <Hero />
      <Power/>
      <CommunitySection />
      <Adoption />


    </div>
  )
}

export default Home
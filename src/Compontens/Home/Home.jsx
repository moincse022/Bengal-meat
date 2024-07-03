import React from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import BestSeller from '../BestSeller/BestSeller';
import DealSection from '../BestDeals/DealSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HeroSection/>
            <BestSeller/>
            <DealSection/>
        </div>
    );
};

export default Home;
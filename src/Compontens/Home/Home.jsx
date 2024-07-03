import React from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import BestSeller from '../BestSeller/BestSeller';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HeroSection/>
            <BestSeller/>
        </div>
    );
};

export default Home;
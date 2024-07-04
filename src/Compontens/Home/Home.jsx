import React from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import BestSeller from '../BestSeller/BestSeller';
import DealSection from '../BestDeals/DealSection';
import PopularSection from '../PopularItem/PopularSection';
import CategorySection from '../../Category/CategorySection';
import Banner1 from '../Banner/Banner1';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HeroSection/>
            <BestSeller/>
            <DealSection/>
            <PopularSection/>
            <CategorySection/>
            <Banner1/>
        </div>
    );
};

export default Home;
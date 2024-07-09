import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import BestSeller from '../BestSeller/BestSeller';
import DealSection from '../BestDeals/DealSection';
import PopularSection from '../PopularItem/PopularSection';
import CategorySection from '../../Category/CategorySection';
import Banner1 from '../Banner/Banner1';
import About from '../About/About';
import Testimonial from '../Testimonial/Testimonial';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            setIsLoading(false);
        })
   

        
    },[])
 console.log(data)
 if(isLoading){
    return <h1>Loading...</h1>
 }
    return (
        <div>
            <Banner/>
            <HeroSection/>
            <BestSeller/>
            <DealSection data={data}/>
            <PopularSection data={data}/>
            <CategorySection/>
            <Banner1/>
            <About/>
            <Testimonial/>
            <Subscribe/>
        
        </div>
    );
};

export default Home;
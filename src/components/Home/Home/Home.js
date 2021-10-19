import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import WhyBest from '../WhyBest/WhyBest';
import './Home.css'
const Home = () => {
    return (
        <div className="box">
            <Banner></Banner>
            <Services></Services>
            <WhyBest></WhyBest>
            <Faq></Faq>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div className="box">
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;
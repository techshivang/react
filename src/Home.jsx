import React from 'react';
import Common from './Common';
import web from '../src/images/rocket.jpg'

const Home = () =>{
    return (
        <>
          <Common name='Grow Your Bussiness with' imgsrc={web} visit='/service' btnname="Get Started" />
        </>
    );
};

export default Home;
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About1 from './About1';
import Service from './Service';
import Contact1 from './Contact1';
import Navbar from './Navbar'; 
import Footer1 from './Footer1';
import { Switch, Route, Redirect } from 'react-router-dom';

const Final_Project = () =>{
    return (
        <>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About1}/>                  
                <Route exact path="/service" component={Service}/> 
                <Route exact path="/contact" component={Contact1}/> 
                <Redirect to="/" />
            </Switch>
            <Footer1/>
            
            
        </>
    );
};

export default Final_Project;
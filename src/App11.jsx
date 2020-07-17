import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Services from './Services';
import User from './User';
import Search from './Search';

const App11 = () =>{

    const Name=()=>{
        return <h1> Hello My Name. </h1>
    };

    return (
        <>
        <Menu/>

            <Switch>
                <Route exact path='/' component={ ()=><About name="About"/> } />
                <Route exact path='/services' render={ ()=><Services name="Service"/> }/>
                <Route exact path='/contact' component={Contact}/>
                
                <Route path='/contact/Name' component={Name}/>
                <Route path='/user/:fname/:lname' component={User}/>
                <Route path='/search' component={Search}/>
                {/* <Route component={Error} /> */}
                <Redirect to='/'/>
            </Switch>

            {/* <About/>
            <Contact/> */}

        </>
    );

};

export default App11;
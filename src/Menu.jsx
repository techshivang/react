import React from 'react';
import {NavLink} from 'react-router-dom';


const Menu =()=>{

    return (
        <>

            <div className="menu_style">
            <NavLink exact activeClassName='active_class' to='/' > 
                AboutUs 
            </NavLink>
            
            <NavLink exact activeClassName='active_class' to='/services' > Services </NavLink>

            <NavLink exact activeClassName='active_class' to='/user/Shivang/Saxena'>     User 
            </NavLink>

            <NavLink exact activeClassName='active_class' to='/search'>     Search 
            </NavLink>


            <NavLink exact activeClassName='active_class' to='/contact'>     ContactUs 
            </NavLink>
            </div>

            {/* <a href="/"> AboutUs </a>
            <a href="/contact"> ContactUs </a> */}

        </>
    );

};

export default Menu;
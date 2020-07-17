import React from 'react';
import { useState } from 'react';
import Sresult from './Sresult';


const Search =(props)=>{
    const [image,setImage]=useState("");
    const inputEvent = (event)=>{
        const data=event.target.value;
        console.log(data);
        setImage(data);
    }
    return (
        <>
            <div className='searchbar'>
                <input 
                type='text' 
                placeholder='serach anything'
                value={image} 
                onChange={inputEvent} 
                
                />
                
             { image==="" ? null: <Sresult name={image} /> }   
            </div>
        </>
    );

};

export default Search;
import React from 'react';
import Card from './Cards';
import sdata from './sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favourite_series='amazon';
const FavSeries=()=>{

if(favourite_series==='netflix'){
   return <Netflix/>;
}else{
    return <Amazon/>;

}
}

const App4 =() => (
    <>
    <h1 className='heading_style'>List of top 5 Netflix in 2020</h1>
    <FavSeries/>    
    </>
);

export default App4;
import React from 'react';
import sdata from './sdata';
import Card from './Cards';
const Netflix =() =>{


   return(
    <Card
    key={sdata[1].id} 
    imgsrc={sdata[1].imgscr}
    title={sdata[1].title}s
    sname={sdata[1].sname}
    link={sdata[1].links}
/>
    );
   }
export default Netflix;
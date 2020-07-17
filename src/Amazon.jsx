import React from 'react';
import sdata from './sdata';
import Card from './Cards';

const Amazon =() =>{

return(
    <Card
    key={sdata[3].id} 
    imgsrc={sdata[3].imgscr}
    title={sdata[3].title}s
    sname={sdata[3].sname}
    link={sdata[3].links}
/>
    );
}
export default Amazon;

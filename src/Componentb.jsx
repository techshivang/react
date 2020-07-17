import React, { useContext } from 'react';
import Componentc from './Componentc';
import { FisrtName,LastName } from "./App9";

const Componentb =()=>{

    const fname=useContext(FisrtName);
    const lname=useContext(LastName);



    return (
        <h1> My Name is {fname} {lname}  </h1>
    );
};

export default Componentb;
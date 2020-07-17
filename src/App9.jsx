// <----------Context API in React JS-------------->

import React, { createContext } from 'react';
import Componenta from './Componenta';

const FisrtName=createContext();
const LastName=createContext();

const App9 = () =>{

    return (
        <>
        <FisrtName.Provider value={'Shivang'}>
            <LastName.Provider value={"Saxena"}>

            
            <Componenta/>
            </LastName.Provider> 
        </FisrtName.Provider>

    </>);
}

export default App9;
export {FisrtName,LastName};
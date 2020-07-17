import React from 'react';
import { FisrtName,LastName } from "./App9";

const Componentc =()=>{
    return (
        <>

            <FisrtName.Consumer>
                {(fname)=>{
                    return (
                        <LastName.Consumer>
                            {(lname)=>{
                                return (
                                    <h1> My Name is {fname} {lname} </h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FisrtName.Consumer>

        </>
    );
}

export default Componentc;




// But it Takes to Much Complexity so to remove this we have to use UseContext.
// See it in Componentb.jsx
import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';


// const User =({match})=>{

//     return <h1> Hello {match.params.fname}  . </h1>

// };

const User =()=>{
    const {fname,lname} = useParams();
    const location = useLocation();
    const history=useHistory();
    // console.log(location);
    console.log(history);

    return (
        <>

            <h1> Hello {fname} {lname} This is Your Time..... </h1>
            <p> My Current Location is {location.pathname} </p>
            {location.pathname===`/user/Shivang/Saxena` ? (
                <button onClick={()=>history.push('/')}> You Got Me!!!!!! </button>) :null
            }

        </>
    );

};

export default User;
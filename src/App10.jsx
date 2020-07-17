import React, { useState, useEffect } from 'react';

// const App10 = () =>{

//     const [num,setNum] = useState(0);
//     const [nums,setNums]=useState(0);
//     useEffect(()=>{
//         alert("I'm Clicked");
//     },[num]);

//     return(
//         <>
//         <button 
//             onClick={()=>{
//                 setNum(num+1);
//                 }}
//         > 
//             Click Me {num}  
//         </button>
//         <br/>

//         <button 
//             onClick={()=>{
//                 setNums(nums+1);
//                 }}
//         > 
//             Click Me {nums}  
//         </button>

//         </>
//     );



// };


// Call Pokemon API in React Js
import axios from 'axios';
const App10 =()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [move,setMove]=useState();
    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(response.data.name);
            setName(response.data.name);
            setMove(response.data.moves.length)
        }
        getData();
    });
    return (
        <>

        <h1> You Choose <span style={{color:'red'}}> {num}  values </span>. </h1>
        <h1> My Name is <span style={{color:'red'}}> {name} </span> </h1>
        <h1> I Have <span style={{color:'red'}}> {move}  moves.</span> </h1>

            <select value={num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

        </>
    );
}

export default App10;
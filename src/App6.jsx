// import React, { useState } from 'react';

// // usestate are called hooks
// const App6=()=>{
//     const state=useState();
//     // console.log(state);

//     const [count,setCount]=useState(1);


//     const IncNum=() =>{
//         setCount(count + 1);        
//         // console.log('click ' + count++);
//     };




//     return(
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click Me</button>
//         </>
//     );
// };


// React Hooks challenge

// import React, { useState } from 'react';

// const App6=()=>{
//     let initialnewTime=new Date().toLocaleTimeString();

//     const [currentTime,setcurrentTime]=useState(initialnewTime);

//     const UpdateTime=()=>{
//         initialnewTime=new Date().toLocaleTimeString();
//         setcurrentTime(initialnewTime);        
//     }
//     return(
//         <>
//             <h1>{currentTime}</h1>
//             <button onClick={UpdateTime}>Get Time</button>
//         </>
//     );
// };

// React Js Digital Clock Challenge

// import React, { useState } from 'react';

// const App6=()=>{
//     let time=new Date().toLocaleTimeString();

//     const [currenttime,settime]=useState(time);

//     const UpdateTime=()=>{
//         time=new Date().toLocaleTimeString();
//         settime(time);
//     }

//     setInterval(UpdateTime,1000)

//     return(
//         <>
//         <h1>{currenttime}</h1>
//         {/* <button onClick={UpdateTime}>getTime</button> */}
//         </>
//     );
// };


// Events in Reactjs
// import React, { useState } from 'react';

// const App6=()=>{
//     const purple='#8e44ad';
//     const [bg,setBg]=useState(purple);
//     const [name,setName]=useState('Click Me');

//     const bgChange=()=>{
//         let newbg='#34495e';
//         setBg(newbg);
//         setName("Oouch☹️")        

//     };

//     const bgback=()=>{
//         setBg(purple);
//         setName("Wowww!!!😀😀");
//     };

//     return (
//         <>
//         <div style={{ backgroundColor:bg }}>
//             <button onClick={bgChange} onDoubleClick={bgback}>{name}</button>
//         </div>

//         </>
//     );
// };

// Forms in React

// import React, { useState } from 'react';

// const App6=()=>{
//     const [name,setName]=useState();
//     const [fullName,setFullName]=useState();
//     const [lastName,setLastName]=useState();
//     const [lastNameNew,setLastNameNew]=useState();

//     const inputEvent=(event)=>{
//         console.log(event.target.value)
//         setName(event.target.value)
//     };

//     const inputEvent2=(event)=>{
//         setLastName(event.target.value);
//     };

//     const onSubmit=(event)=>{
//         event.preventDefault();
//         setFullName(name);
//         setLastNameNew(lastName);
//     };


//     return(
//     <>

//     <div className='main_div'>
//     <form onSubmit={onSubmit}>
//     <div>
//     <h1> Hello {fullName} {lastNameNew} </h1>
//     <input type='text' placeholder='Enter Your Name' onChange={inputEvent} value={name}/>
//     <br/>
//     <input type='text' placeholder='Enter Your LastName' onChange={inputEvent2} value={lastName}/>
//     <button type='submit'>Click Me 👍</button>
//     </div>
//     </form>
//     </div>

//     </>
//     );
// };

// export default App6;

// Build a Todo list App

// import React, { useState } from 'react';
// import TodoList from './TodoList';

// const App6 = () => {

//     const [inputList, setInputList] = useState();
//     const [Items, setItems] = useState([]);

//     const itemEvent = (event) => {

//         setInputList(event.target.value);

//     };

//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList];
//         });
//         setInputList('');
//     };

//     const deleteItems=(id)=>{
//         console.log('deleted');
//         setItems((oldItems)=>{
//             return oldItems.filter((arrElem,index)=>{
//                 return index!==id;
//             });
//         });
//     };

//     return (

//         <>

//             <div className='main_div'>
//                 <div className='center_div'>
//                     <br />
//                     <h1> ToDo List </h1>
//                     <br />
//                     <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
//                     <button onClick={listOfItems}> + </button>

//                     <ol>
//                         {/* <li> {inputList} </li> */}

//                         {Items.map((itemval, index) => {
//                             return <TodoList
//                                 key={index}
//                                 id={index}
//                                 text={itemval}
//                                 onSelect={deleteItems}
//                             />;
//                         })}

//                     </ol>
//                 </div>
//             </div>

//         </>

//     );

// };

// export default App6;

// <-----React challenge icrement and decrement----->

// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';

// const App6 = () => {

//     const [num,setNum]=useState(0)
//     const incNum=()=>{
//         setNum(num+1);
//     }

//     const decNum=()=>{
//         if(num>0){
//         setNum(num-1);
//         }else{
//             alert("Sorry,Zero Limit Reach....");
//             setNum(0);
//         }
//     }

//     return (
//         <>
//             <div className='main_div'>
//                 <div className='center_div'>
//                     <h1> {num} </h1>
//                     <div className='btn_div'>
//                         <button onClick={incNum}> <AddIcon/> </button>
//                         <button onClick={decNum}> <DeleteIcon/> </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }

// export default App6;

// <----Material UI icons in React Js in Previous program--->
// <---------NPM(Node Package Manager) in Reactjs----->

// import React from 'react';
// import Clock from 'react-digital-clock';


// const App6=()=>{
//    return( 
//     <Clock/>
//    );
// };

// export default App6;

// <-----React Project of Todo List---->
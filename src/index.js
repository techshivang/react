//var React=require('react')

// import React from 'react';


//var ReactDOM=require('react-dom')
// import ReactDOM from 'react-dom';

// ReactDOM.render('Kya Dekhana Hai','Kaha Dikhana hai','Callback function');
//ReactDOM.render(<h1>Hello World from Shivang Saxena!!</h1>,document.getElementById('root'));
//code unnder render is called JSX expression thats why we import REACT Module.

//Babel convert the above code in Following format----
// ReactDOM.render(
//   React.createElement("h1",null,"Thapa technical"),
//   document.getElementById('root')
// );


// //with pure javascript

// var h1=document.createElement('h1');
// h1.innerHTML='Shivang Saxena';
// document.getElementById('root').appendChild(h1);

//Return Multiple render elemrnts

// const arr=['vinod','thapa','technical']

// ReactDOM.render(
//   [
//   <h1>thapa Trchnical</h1>,
//   <p>Plz like and share</p>,
//   <h2>Please Subscribe My channel...</h2>
//   ],
//   document.getElementById('root'));

//React.fragment method----it can not create extra div in html div 
//                        which is happen when we use div here.

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Thapa Technical</h1>
//     <p>Plz like and share to all</p>
//     <h2>Plz subscribe my channel</h2>
//   </React.Fragment>,
//   document.getElementById('root')
// );


//JSX challenge----
  //1.create a react app from scratch.
  //2.Add one h1 element in it.
  //3.Add one p element in it.
  //4.Add list of fav 5 Netflix Series in it using an order list.


// ReactDOM.render(
//   <>
//   <h1> Shivang Saxena Netflix Pick </h1>
//   <p> Here are the list My Favourite 5 Netflix Series </p>
//   <ol>
//     <li> DARK </li>
//     <li> Extra Curricular </li>
//     <li> My Holo Love </li>
//     <li> My First-2 Love </li>
//     <li> Mr Robot </li>    
//   </ol>
//   </>,
//   document.getElementById('root')
// );

//Challenge Complete------



//<--JSX Expression in React Js---We can Use It {} and only Expression are allowed->
//Not statement like  if else etc---

// const Name='Shivang Saxena'

// ReactDOM.render(
//   <>
//   <h1> My name is {Name} </h1>
//   <p>My Lucky Number is {2+3}</p>
//   <p>Generate any Number:{Math.random()}</p>
 
//   </>,
//   document.getElementById('root')

// );


//<-----Template Literals in React Js----->

// const firstname='Shivang';
// const lastname= 'Saxena';



// ReactDOM.render(
//   <>
//   <h1> My name is {firstname+" "+lastname} </h1>
//   {/* using templates literals */}
//   <h1> Name is {`${firstname} ${lastname}`} </h1>
//   <p>My Lucky Number is {2+3}</p>
//   <p>Generate any Number:{Math.random()}</p>
 
//   </>,
//   document.getElementById('root')

// );

// <---Challenge-2---->

// 1.Create app from Scratch.
// 2.Add one h1 element example Your name.
// 3.Add one p element in it with Current Date.
// 4.Add one p element in it with Curent time.

// const currentdate=new Date().toLocaleDateString();
// const currenttime=new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//   <h1>Hello Gyus My Name is Shivang Saxena</h1>
//   <p>Today Date is: {currentdate}</p>
//   <p>Today Curent Time is:{currenttime}</p>
//   </>,
//   document.getElementById('root')
// );

//Challenge Complete---

// <----JSX Attribute In React Js------>

// const name='Shivang'
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";
// const links="https://www.thapatechnical.com";
// ReactDOM.render(
//   <>
//   <h1 contentEditable='true'>My Name is {name}</h1>
//   <img src={img1} alt="randomImages" />
//   <img src={img2} alt="randomImages" />
//   <a href={links} target="_thapa">
//   <img src={img3} alt="randomImages" />
//   </a>
//   </>,
//   document.getElementById('root')
// );

// <-----Css Styling and Css Importing files in react js------->
// import './index.css';


// const name='Shivang'
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";
// const links="https://www.thapatechnical.com";
// ReactDOM.render(
//   <>
//   <h1 className="heading">My Name is {name}</h1>
//   <div className="img_div">
//   <img src={img1} alt="randomImages" />
//   <img src={img2} alt="randomImages" />
//   <a href={links} target="_thapa">
//   <img src={img3} alt="randomImages" />
//   </a>
//   </div>
//   </>,
//   document.getElementById('root')
// );

// <---Use Google Fonts in React Js------>

// <--Inline Css Styling In  react js---->

// const name='Shivang'
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";
// const links="https://www.thapatechnical.com";


// const heading={
//   color:'#fa9191',
//   textTransform:'capitalize',
//   textAlign:'center',
//   fontWeight:'bold',
//   textShadow: '0px 2px 4px #ffe9c',
//   margin: '50px 0' 
// }

// ReactDOM.render(
//   <>
//   <h1 style={heading}>My Name is {name} yoooo</h1>
//   <div className="img_div">
//   <img src={img1} alt="randomImages" />
//   <img src={img2} alt="randomImages" />
//   <a href={links} target="_thapa">
//   <img src={img3} alt="randomImages" />
//   </a>
//   </div>
//   </>,
//   document.getElementById('root')
// );

// <---Challenge - 3----->

// 1.Create a react app from scratch.
// 2.Show a Heading that says hello sir,good morning if time in between 1 to 11am
// 3.Good afternoon if 12p, to 7pm.
// 4.Good Night if 7pm Till Night.
// 5.Apply css in it then dynamically change the color of Gretting parts 
//  only using inline css part.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// let currentdate=new Date();
// currentdate=currentdate.getHours();
// let greeting='';
// const cssStyle={};

// if(currentdate>=1 && currentdate<12){
//   greeting='Good Morning.'
//   cssStyle.color='green';
// }else if(currentdate>=12 && currentdate<19){
//   greeting='Good AfterNoon.'
//   cssStyle.color='Orange';
// }else{
//   greeting='Good Night.'
//   cssStyle.color='Black';
// }

// ReactDOM.render(
//   <>
//   <div>
//   <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
//   </div>
//   </>,
//   document.getElementById('root')
// );


// <-----React Component-------->

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <>
//   <App/>
//   </>,
//   document.getElementById('root')
// );

//<--Challenge-4-->
// <--Rewrite Our Challenge-3 using Component----->

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App1 from './App1';
// import './index.css';

// ReactDOM.render(
//   <App1/>,
//   document.getElementById('root')

// );


// <---Import Export Module in React Js------>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import youtuber, { favprog,myname,mynames } from './App2';
// //we can write any thing to access
// import myfav from './App2';
// //we can also use all thing at once
// // import * as ques from './App2';--But it not recommend most--

// ReactDOM.render(
//   <>
//   <ol>
//     <li>Thapa</li>
//     <li>{youtuber}</li>
//     <li>{myfav}</li>
//     <li>{favprog}</li>
//     <li>{mynames()}</li>
//     <li>{myname()}</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// );

//<---Chalenge-5>
// <---Create Simple Calculator Using Import Export----->

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App3 from './App3';

// ReactDOM.render(
//   <>
//   <h1>Here is Simple Calculator Program is!!!!!</h1>
//   <App3/>
  
//   </>,
//   document.getElementById('root')
// );


// <---Props in React JS------->

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App4 from './App4';
// import Card from './Cards';
// import sdata from './sdata';



// console.log(sdata[0].sname);
// using map function tor reduce code---

// function ncard(value){
//   return (
//     <Card
//     key={value.id} 
//     imgsrc={value.imgscr}
//     title={value.title}
//     sname={value.sname}
//     link={value.links}
//   />

//   );
// }

// ReactDOM.render(
//   <>
//   <App4/>
  
  /* <h1 className='heading_style'>List of top 5 Netflix in 2020</h1> */
  /* <Card 
    imgsrc={sdata[0].imgscr}
    title={sdata[0].title}
    sname={sdata[0].sname}
    link={sdata[0].links}
  /> */

  /* {sdata.map(ncard)} */

  /* <Card imgsrc={sdata[1].imgscr}
    title={sdata[1].title}
    sname={sdata[1].sname}
    link={sdata[1].links}
  />

  <Card imgsrc={sdata[2].imgscr}
    title={sdata[2].title}
    sname={sdata[2].sname}
    link={sdata[2].links}
  />

  <Card imgsrc={sdata[3].imgscr}
    title={sdata[3].title}
    sname={sdata[3].sname}
    link={sdata[3].links}
  />

  <Card imgsrc={sdata[4].imgscr}
    title={sdata[4].title}
    sname={sdata[4].sname}
    link={sdata[4].links}
  /> */

  

  /* </>,
  
  document.getElementById('root')
); */


// <---------Machine Game in React Js----->

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App5 from './App5';

// ReactDOM.render(<App5/>,document.getElementById('root'));


// React Hooks

// 1.It does not work inside the classes.
// 2.Hooks should always be used at the top level of the react function

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App6 from "./App6";
// import TodoList2 from './TodoList2'
// import App8 from './App8';
// import App9 from './App9';
// import App10 from './App10';
// import {BrowserRouter} from "react-router-dom";
// import App11 from './App11'


// ReactDOM.render(
//   <BrowserRouter>
// <App11/>
// </BrowserRouter>,
// document.getElementById("root"))


//<------ React Hooks Challenge---->
// <----Create Digital Clock in React Js---->
// <--------Events in React js------>
// <--------React Forms---------->
// <--------Login form in React ----->
// <--------React Js Challenege Login form--->we will discuss it later
// <--------Spread Opeartor   in React Js------>

// const fullname=['Shivang','Saxena']
// const biodata=[1,...fullname,26,'Male']
// console.log(fullname);
// console.log(biodata);


// var shootgames=["Call of duty","far City","Resident Evil"]
// var [first,...remaining]=shootgames;
// console.log(first) //Call of duty
// console.log(remaining)


// const fullname={
//   fname:'Shivang',
//   lname:'Saxena'
// };

// const biodata={
//   id:1,
//   ...fullname,
//   age:26,
//   gender:'Male'
// };

// console.log(fullname);
// console.log(biodata);


// <--------simplify React Js Login Form----->
// <--------Todo list in React Js------>
// <---React challenge increment and decrement-->
// <----how to use material ui icons in react js-->
// <---------NPM(Node Package Manager) in Reactjs----->
// <------How to use Bootstrap4 in React Js------------->
// <---------Mini Project on Bootstrap in React Js-------->
// <--------Google keep App Clone with React Js------------>
// <-------Context Api in React Js--------------------->
// <--------Use Context in React Js------------------>
// <-------UseEffect Hooks in React Js-------------------->
// <-------Fetch Pokemon Api Using UseEffect in React JS--->
// <-------React Router in React JS----------------------->
// <-------React Route Render Method--------------------->
// <--------useParams Hooks in React Js----------------->
// <--------useLocation Hooks in React Js----------------->
// <--------useHistory Hooks in React JS------------------>
// <--------Live Serach Filter using Hooks and Router in React JS-------->
// <--------Add 404 Error Page in React Js-------------------->
// <--------Redirect in React JS-------------------------->
// <--------Use BootStrap-5 In React JS-------------------->
// <--------Complete Responsive website in React JS--------->

import React from 'react';
import ReactDOM from 'react-dom';
import Final_Project from './Final_Project';
import "./index.css";
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
  <>
<BrowserRouter>
  <Final_Project/>
</BrowserRouter>
</>,
document.getElementById("root"));

// <--------New Practise Session on React JS-------------->

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App12 from './App12';


// ReactDOM.render(<App12/>,document.getElementById("root"));
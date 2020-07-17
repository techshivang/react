import React from 'react';

function App1 (){
let currentdate=new Date();
currentdate=currentdate.getHours();
let greeting='';
const cssStyle={};

if(currentdate>=1 && currentdate<12){
  greeting='Good Morning.'
  cssStyle.color='green';
}else if(currentdate>=12 && currentdate<19){
  greeting='Good AfterNoon.'
  cssStyle.color='Orange';
}else{
  greeting='Good Night.'
  cssStyle.color='Black';
}
return (
    <>
    <div>
   <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
   </div>
   </>
);
}

export default App1;
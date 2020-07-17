import React from 'react'

function add(a,b){
    let sum=a+b;
    return sum;

}

function sub(a,b){
    let subs=a-b;
    return subs;

}

function mul(a,b){
    let muls=a*b;
    return muls;

}

function div(a,b){
    let divs=a/b;
    return divs;

}

export default add;
export {sub,mul,div};
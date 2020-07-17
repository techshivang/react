import React from 'react';
import Header from './component/Header';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer,toast} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';

const App12 = () =>{
    const btnHandle=()=>{
        // toast("This is My First Message");
        toast.error("done",{
            position:"top-center",
        })
    };
    return (
        <>
            <div>
                <Home/>
                <ToastContainer/>
                <Header name="TechyShivang" />
                <hr/>
                <Header  name="Shivang"/>
                <hr/>
                <h1>This is React App</h1>
                <button className="btn btn-secondary" onClick={btnHandle}>Fisrt button</button>
                <p>TechyShivang is Ready to launch something New.</p>
                <Header  name="Shiv"/>
            </div>
        </>
    );
}

export default App12;
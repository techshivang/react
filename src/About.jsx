import React from 'react';
// use Bootstrap -5
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const About =(props)=>{

    return (
        <>
            <div className='container'>
                
                <h1 className="text-center mt-2"> Hello I'm a {props.name} Page. </h1>
                <br/>
                <div className='text-center'>
                    <button className="btn btn-outline-success"> Welcome In This </button>
                </div>
            </div>
        </>
    );
};

export default About;
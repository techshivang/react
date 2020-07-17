import React, { useState } from 'react';

const Contact1 = () => {
    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',        
    });

    const inputEvent =(event) =>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        });
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`
            Your Name is ${data.fullname} and your Mobile Number is ${data.phone} and your Email is ${data.email} and the Message you type is ${data.message}
        
        `);
    };
    return (
        <>
            <div className="my-5">

                <h1 className='text-center'> Contact Us </h1>

            </div>

            <div className="container conatact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input 
                                type="text" 
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                                name="fullname"
                                value={data.fullname}
                                onChange={inputEvent} 

                                />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input 
                                type="number" 
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number "
                                name="phone"
                                value={data.phone}
                                onChange={inputEvent}  

                                 />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                                name="email"
                                value={data.email}
                                onChange={inputEvent}     
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea 
                                className="form-control" id="exampleFormControlTextarea1" 
                                rows="3"
                                name='message'
                                value={data.message}
                                onChange={inputEvent}
                                >


                                </textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact1;
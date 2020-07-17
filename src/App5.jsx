import React from 'react';

const SlotM=(props)=>{
    // let x='😀';
    // let y='😀';
    // let z='😆';

    // let x=props.x;
    // let y=props.y;
    // let z=props.z;

    // by object destrycturing
    let {x,y,z}=props;

    if((x===y) && (y===z)){
        return (
            <>
            <div className='slot_inner'>
            <h1>{x} {y} {z}</h1>
            <h1>This is Matching</h1>
            <hr></hr>

            </div>
            </>
        );
    }else{
        return (
            <>
            <div className='slot_inner'>
            <h1>{x} {y} {z}</h1>
            <h1>This is Not Matching</h1>
            <hr></hr>

            </div>
            </>
        );

    }

}

const App5=()=>{

    return <>
        <h1 className='heading_style'> 🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot machine game</span> 🎰 </h1>
        
        <div className='slotmachine'>
        <SlotM x='😃'  y='😃'  z='😃'/>
        <SlotM x='😃'  y='😃'  z='😃'/>
        <SlotM x='😃'  y='😃'  z='😃'/>
        </div>
        
    </>;

};

export default App5;
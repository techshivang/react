import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNode = (props) =>{
    const [expand,setExpand]=useState(false);
    const [note,setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent =(event)=>{
        // const value=event.target.value;
        // const name=event.target.value;

        const {name,value}=event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value,
            };
        });
    };

    const AddEvent =()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    }

    const expandit=()=>{
        setExpand(true);
    };

    const backtoNormal=()=>{
        setExpand(false);
    };

    return (
        <>

            <div className='main_node' onDoubleClick={backtoNormal} >

                <form>
                    {expand?
                    <input type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Title'/>:null}
                    <br></br>
                    <textarea rows='' column='' name='content' value={note.content} onChange={InputEvent} placeholder='Write a Note...' onClick={expandit} />
                    <br/>
                    {expand?
                        <Button onClick={AddEvent}>
                            <AddIcon/>
                        </Button>:null}
                    
                </form>

            </div>
           
        </>
    );

};

export default CreateNode;
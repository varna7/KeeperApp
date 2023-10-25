import React, { useState } from 'react'


const CreateArea = (props) => {

    const [note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(e){
        const {name,value} = e.target;

        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]:value
            };
        })
    }
    function submitNote(e){

        props.onAdd(note);
        setNote({
            content:"",
            title:""
        })
        e.preventDefault();
    }

  return (
    <div>
        <form action="" className='create'>
            <input type="text" onChange={handleChange} value={note.title} name="title" id="title" placeholder='Title'/>
            <textarea name="content" onChange={handleChange} value={note.content} id="content" cols="30" rows="3" placeholder='Take a note...'></textarea>
            <button onClick={submitNote}>+</button>
        </form>
    </div>
  )
}

export default CreateArea
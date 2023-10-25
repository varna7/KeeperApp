import React from 'react'


const Note = (props) => {

  function handleClick(e){
    props.onDelete(props.id);
    console.log(e)
  }

  return (
    
      <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
   
    
  )
}

export default Note
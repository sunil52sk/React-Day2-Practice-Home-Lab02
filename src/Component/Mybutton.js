import React from 'react'

function Mybutton(props) { 
  let count=0;
    function handleClick(){
      count++
        alert("Hey !!!You Clicked :"+count);
    }
  return (
    <div><button onClick={handleClick}>{props.Text}</button>
    <p></p></div>
  )
}

export default Mybutton

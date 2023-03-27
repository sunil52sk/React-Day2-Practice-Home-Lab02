import React from 'react'
function Mybutton(props) {
    function handleClick(){
        alert("Hey !!!You Clicked :"+props.Text);
    }
  return (
    <div><button onClick={handleClick}>Click me{props.num}</button>
    <p></p></div>
  )
}

export default Mybutton
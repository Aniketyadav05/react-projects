import React from 'react'

const Dabba = () => {
  const submit= () => {
    let a=  document.getElementById("name").value;
    let sting = `My name is ${a}`
    document.getElementById("str").innerHTML = sting;

  }
  
  return (
    
    <>
    <input type="text border-1 name" id='name'/>
    <button onClick={submit}>submit</button>
      <div className='h-10 flex justify-center items-center'>
      
      <h1 id='str'></h1>
    </div>
    </>

  )
}

export default Dabba
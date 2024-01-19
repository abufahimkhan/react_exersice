import React,{useState} from 'react'


const Practice=()=> {
const [count,setCount]=useState(0);
const [on,setOn]=useState(true);
const handleClick=()=>{
    setOn((prevState)=>!prevState)
}
   const person=[
        {name:'shanto',age:27},
        {name:'aysha',age:21},
    ];
  const MiniComponent=({personName,personAge})=>{
    return(
        <ul>
            <li>{personName}</li>
            <li>{personAge}</li>
        </ul>
    );
  };
  return (
    <div>
        <h2 style={{color:'green'}}>Toggle Button</h2>
        <button
        id='toggle'
        onClick={handleClick}
        >
            {on?'ON':'OFF'}
        </button>
        <h2 style={{color:'yellow'}}>Counter</h2>
        <p style={{fontSize:'30px',backgroundColor:'red'}}>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>reset</button>
        <h2 style={{color:'aqua'}}>List Item</h2>
        {
            person.map((person,index)=>(
                <div key={`${index}`}>
                    <div>Name:<span>{person.name}</span></div>
                    <div>Age:<span>{person.age}</span></div>
                </div>
            ))
        }
        {
            person.map((person,index)=>(
                <MiniComponent
                key={`${index}`}
                personName={person.name}
                personAge={person.age}
                />
            ))
        }
        <h2 style={{color:'grey'}}>Toggle Button</h2>

    </div>
  )
}
export default Practice;

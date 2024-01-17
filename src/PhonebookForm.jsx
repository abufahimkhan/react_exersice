import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function PhonebookForm() {

  const [entries,setEntries]=useState
  ([
    {
      firstname:'Coder',
      lastname:'byte',
      phone:'8885559999',
    },
  ]);
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [phone,setPhone]=useState('');

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(entries);
    console.log(firstname);
    console.log(lastname);
    console.log(phone);

    
    const stateValue={firstname,lastname,phone};
    setEntries([...entries,stateValue]);

    
    setFirstName('');
    setLastName('');
    setPhone('');

  }


  return (
    <div className="container">
      <form className='form'
     onSubmit={handleSubmit}
      >
        <label>First name:</label>
        <input
        type='text'
        value={firstname}
        onChange={(event)=>setFirstName(event.target.value)}
        ></input>
        <label>Last name:</label>
        <input
        type='text'
        value={lastname}
        onChange={(event)=>setLastName(event.target.value)}
        ></input>
         <label>Phone no:</label>
        <input
       type='text'
       value={phone}
       onChange={(event)=>setPhone(event.target.value)}
        ></input>
        <button
        type='submit'
        >Save Contact</button>
      </form>
      <h2>Contact List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone no</th>
          </tr>
        </thead>
        <tbody>
          {
            entries.map((info,index)=>(
              <tr key={`${index}`}>
                <td>{info.firstname}</td>
                <td>{info.lastname}</td>
                <td>{info.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

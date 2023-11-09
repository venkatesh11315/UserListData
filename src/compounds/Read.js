import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams,Link } from 'react-router-dom';

function Read() {

    const [data,Setdata]=useState([]);
    const { id }= useParams();
    useEffect(()=>{
     axios.get('http://localhost:3001/user/'+id)
     .then(result=>
        Setdata(result.data))
     .catch(error=> console.log(error))
    },)
  return (
    <div>
        <div className="container " style={{ width: "20rem", }}>
            <h1 style={{ textAlign: "center", color: "blue" }}>  USER ID  {data.id}</h1>
            <div className='card'>
                <div className='car-body'>

                <div className="m-3">
                  <label htmlFor="nameInput" className="form-label">Name:</label><br/>
                <strong>{data.name}</strong>
                </div>
                <div className="m-3">
                  <label htmlFor="emailInput" className="form-label">Email:</label><br/>
                  <strong>{data.email}</strong>
                </div>
                <Link  to={`/compounds/edit/${data.id}`} >
                <button type="button"    className="btn btn-success m-1"  >edit</button>
                </Link>
                <Link  to='/' >
                <button type="button " className="btn btn-danger m-3">Back</button>
                </Link>
                </div>

            </div>
            

        </div>
     
    </div>
  )
}

export default Read

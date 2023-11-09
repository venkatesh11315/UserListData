import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


function Create() {
  const navigate = useNavigate();
  const [value, Setvalue] = useState({
    name: "",
    email: ""
  });

  function handlesubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/user", value)
      .then(result => {
        console.log(result);
        navigate('/')
      }
      )
      .catch(err => console.log(err))
  }
  function handlechange(e) {
    Setvalue({ ...value, name: e.target.value })
  }

  function handlechangeemail(e) {
    Setvalue({ ...value, email: e.target.value })
  }
  return (
    <div>

      <div>
        <div className="container" style={{ width: "20rem", }}>
          <h1 style={{ textAlign: "center", color: "blue" }}> ADD USER</h1>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handlechange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    onChange={handlechangeemail}


                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' >
                  <button type="button " className="btn btn-danger m-3">Back</button>
                </Link>
              </form>


            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Create

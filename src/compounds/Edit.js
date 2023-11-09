import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

function Edit() {

  const [value, Setvalue] = useState({
    name: "",
    email: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3001/user/' + id)
      .then(result =>
        Setvalue(result.data))
      .catch(error => console.log(error))
  }, [ id])


  function handlechange(e) {
    Setvalue({ ...value, name: e.target.value })
  }

  function handlechangeemail(e) {
    Setvalue({ ...value, email: e.target.value })
  }
  function handlesubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:3001/user/" + id, value)
      .then(result => {
        console.log(result);
        navigate('/')
      }
      )
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div>

        <div className="container" style={{ width: "20rem", }}>
          <h1 style={{ textAlign: "center", color: "blue" }}> UPDATE USER</h1>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handlesubmit} >
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Name</label>
                  <input
                    onChange={handlechange}
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    placeholder="Enter your name"
                    value={value.name}

                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email</label>
                  <input
                    onChange={handlechangeemail}
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    value={value.email}


                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
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

export default Edit
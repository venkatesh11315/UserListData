import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {

    const [data, SetData] = useState([]);
    // const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/user")
            .then(result => SetData(result.data))
            .catch(err => console.log(err))
    }, []);


    const handleDelete = (id) => {

        axios.delete("http://localhost:3001/user/" + id)
            .then(result => {
                console.log(result);
                window.location.reload();
            })
            .catch(err => console.log(err))


    }
    return (
        <div>
            <div>
                <h1 style={{ textAlign: "center", color: "blue" }}>LIST OF USERS</h1>
            </div>
            <div className='container'>

                <div className='card'>

                    <div className='Card-body'>


                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ACTION</th>
                                    <th>
                                        <Link to='/compounds/Create.js' >
                                            <button type="button " className="btn btn-success ml-3">ADD +</button>
                                        </Link>

                                    </th>
                                </tr>

                            </thead>

                            <tbody>
                                {data.map((details, i) => (
                                    <tr key={i} >
                                        <td>{details.id}</td>
                                        <td>{details.name}</td>
                                        <td>{details.email}</td>
                                        <td>

                                            <Link to={`compounds/read/${details.id}`} >
                                                <button type='button' className="btn btn-primary" > Read </button>
                                            </Link>
                                            <Link to={`/compounds/edit/${details.id}`} >
                                                <button type="button" className="btn btn-success m-1"  >edit</button>
                                            </Link>

                                            <button onClick={e => handleDelete(details.id)} type="button" className="btn btn-danger">delete</button>
                                        </td>
                                    </tr>
                                )

                                )}
                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
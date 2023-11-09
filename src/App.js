


import { React  } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './compounds/Home';
import Edit from './compounds/Edit';

import Read from './compounds/Read';
import Create from './compounds/Create';

function App() {
  return (
    <div className="App">
      <div>
       
  <BrowserRouter>
  <Routes>
    <Route    path='/' element={<Home/>}  ></Route>
 <Route path='/compounds/Create.js'element={<Create/>}></Route>
 <Route path='/compounds/read/:id'element={<Read/>}></Route>
    <Route path='/compounds/edit/:id' element={<Edit/>}></Route>
   

  </Routes>
  </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

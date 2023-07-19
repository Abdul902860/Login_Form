import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard' ;
import CreatePro from './CreatePro';
import ProjectList from './ProjectList';
import Graph from './Graph'
import Drop from './Drop'
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='createpro' element={<CreatePro />}></Route>
        <Route path='projectlist' element={<ProjectList />}></Route>
        <Route path='graph' element={<Graph />}></Route>
        <Route path='drop' element={<Drop />}></Route>
      </Routes>
    </BrowserRouter>
    
   
  )
}

export default Routing
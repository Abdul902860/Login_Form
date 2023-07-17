// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import { BrowserRouter, Route , Routes} from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
// import Login  from './Components/Login';
// import Dashboard from './Components/Dashboard';
// import CreatePro from './Components/CreatePro';
// import Graph from './Components/Graph';
import Routing from './Components/Routing';
import Toaster from 'react-hot-toast'
// import ProjectList from './Components/ProjectList';
function App() {
  return (
            <React.Fragment>
            <Toaster />
              <Routing />  
            </React.Fragment> 
      
    
  );
}

export default App;

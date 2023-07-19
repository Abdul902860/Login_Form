import React,{useState} from 'react'
import Graph from "./Graph"
const Dashboard = () => {
  const [data ,setData] = useState('');
  return (
    <>
    <div>
      <img src='Header-bg.svg' alt='dashboard' />

    </div>
      
       
    <div>
      <Graph />
    </div>
    </>
   
  )
}

export default Dashboard
import React from 'react';
import DataTable from 'react-data-table-component';
import { Card } from '@mui/material' ;
const Datatable =()=>{
  const columns = [
    {
      name:"ProjectName",
      selector : row => row.projectname
    }, 
    {
      name:"Reason",
      selector : row => row.reason
    }, 
    {
      name:"Type",
      selector : row => row.type
    }, 
    {
      name:"Division",
      selector : row => row.division
    }, 
    {
      name:"Category",
      selector : row => row.category
    }, 
    {
      name:"Priority",
      selector : row => row.priority
    }, 
    {
      name:"Dept.",
      selector : row => row.dept
    }, 
    {
      name:"Location",
      selector : row => row.status
    }
   
  ];

    const data = [
      {
        id:1,
        projectname: "Line Filter Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:2,
        projectname: "Sticker Management  Jun-21,2020 to Jan-01,2021",
        reason : "Dealership",
        type : "External",
        division : "Filters",
        catrgory : "Quality B" ,
        priority : "Low",
        dept :"Strategy",
        location :"Delhi" ,
        status : "Running"
      },
      {
        id:3,
        projectname: "Pumps Connector Filter Jun-21,2020 to Jan-01,2021",
        reason : "Transport",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality C" ,
        priority : "Medium",
        dept :"Quality",
        location :"Mumbai" ,
        status : "Registered"
      },
      {
        id:4,
        projectname: "Wall Reflector Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:5,
        projectname: "Tank Filter Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:6,
        projectname: "Water Heater  Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:7,
        projectname: "Large Mixer Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:8,
        projectname: "Line Filter Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:9,
        projectname: "Line Filter Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:10,
        projectname: "Line Filter Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      },
      {
        id:11,
        projectname: "Line Filter Jun-21,2020 to Jan-01,2021",
        reason : "Business",
        type : "Internal",
        division : "Compressor",
        catrgory : "Quality A" ,
        priority : "High",
        dept :"Strategy",
        location :"Pune" ,
        status : "Running"
      }
    ]
  return (
      <Card>
      <DataTable 
        columns={columns}
        data = {data}
      />

      </Card>
  )
}
export default Datatable 
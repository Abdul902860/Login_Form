// import React from 'react'

// const ProjectList = () => {
//   return (
//     <div className='d-flex justify-content-center vh-100'>
//       <div>

//       </div>
      
      
//     </div>
//   )
// }

// export default ProjectList

import React, { useState } from 'react';
// import DataTable from 'react-datatable' ;
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectList = () => {

  const [data, setData] = useState([
    {
      id: 1,
      projectName: 'Project A',
      type: 'Type A',
      reason: 'Reason A',
      division: 'Division A',
      category: 'Category A',
      priority: 'Priority A',
      department: 'Department A',
      location: 'Location A',
      status: 'Status A',
    },
    {
      id: 2,
      projectName: 'Project A',
      type: 'Type A',
      reason: 'Reason A',
      division: 'Division A',
      category: 'Category A',
      priority: 'Priority A',
      department: 'Department A',
      location: 'Location A',
      status: 'Status A',
    },
    {
      id: 2,
      projectName: 'Project A',
      type: 'Type A',
      reason: 'Reason A',
      division: 'Division A',
      category: 'Category A',
      priority: 'Priority A',
      department: 'Department A',
      location: 'Location A',
      status: 'Status A',
    },
    {
      id: 3,
      projectName: 'Project A',
      type: 'Type A',
      reason: 'Reason A',
      division: 'Division A',
      category: 'Category A',
      priority: 'Priority A',
      department: 'Department A',
      location: 'Location A',
      status: 'Status A',
    },
    {
      id: 4,
      projectName: 'Project A',
      type: 'Type A',
      reason: 'Reason A',
      division: 'Division A',
      category: 'Category A',
      priority: 'Priority A',
      department: 'Department A',
      location: 'Location A',
      status: 'Status A',
    },
    // Add more data rows here...
  ]);

 
  // const handleSave = (row, _, rowIndex) => {
  //   const newData = [...data];
  //   newData[rowIndex] = row;
  //   setData(newData);
  // };

  // const handleDelete = (rowIndex) => {
  //   const newData = [...data];
  //   newData.splice(rowIndex, 1);
  //   setData(newData);
  // };

  // const handleAdd = () => {
  //   setData((prevData) => [
  //     ...prevData,
  //     {
  //       // ...formData,
  //       id: Date.now(),
  //     },
  //   ]);
    // setFormData({
    //   projectName: '',
    //   type: '',
    //   reason: '',
    //   division: '',
    //   category: '',
    //   priority: '',
    //   department: '',
    //   location: '',
    //   status: '',
    // });
  // };

  
  const columns = [
    {
      dataField: 'projectName',
      text: 'Project Name',
        },
    {
      dataField: 'type',
      text: 'Type',
    },
    {
      dataField: 'reason',
      text: 'Reason',
      
    },
    {
      dataField: 'division',
      text: 'Division',
     
    },
    {
      dataField: 'category',
      text: 'Category',
    },
    {
      dataField: 'priority',
      text: 'Priority',
     
    },
    {
      dataField: 'department',
      text: 'Department',
    },
    {
      dataField: 'location',
      text: 'Location',
    },
    {
      dataField: 'status',
      text: 'Status',
    },
    // {
    //   text: 'Actions',
    //   formatter: actionFormatter,
    //   headerStyle: { textAlign: 'center' },
    //   style: { textAlign: 'center' },
    // },
  ];

  // function actionFormatter(_, row, rowIndex) {
  //   return (
  //     <div>
  //       <Button
  //         color="danger"
  //         size="sm"
  //         onClick={() => handleDelete(rowIndex)}
  //       >
  //         Delete
  //       </Button>
  //     </div>
  //   );
  // }

  return (
    <div >
      {/* <DataTable
        keyField="id"
        data={data} 
        columns={columns}
        pagination={paginationFactory()}
       /> */}
    </div>
  );
};

export default ProjectList;

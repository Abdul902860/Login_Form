import React, { useState } from 'react';
import { Form, Button, Container, Row, Col ,Card } from 'react-bootstrap';
import Select from "react-select"
const MyForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    reason: '',
    division: '',
    category: '',
    priority: '',
    department: '',
    startDate: '',
    endDate: '',
    location: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const options = [
    { value: 'Type A', label: 'Type A' },
    { value: 'Type B', label: 'Type B' },
    { value: 'Type C', label: 'Type C' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <>
    <div className='d-flex justify-content-center'>
    <img src='logo.svg' alt="logo" style={{position:"relative", marginLeft:'300px'}}/>
    <img src='Header-bg.svg' alt='svgpro' style={{position:"absolute"}}/>
    </div>
    <div className=' p-2 bg-white rounded m-1 vh-100'    >
    <Card style={{ boxShadow:" 3px 5px 10px #888888"}}>
      <Container>
        <Row className="justify-content-lg-center m-2">
,          <Row>
            <Col xs={12} lg={6}>
              <Form.Control
                type="text"
                name="projecttheme"
                placeholder='Enter Project Theme'
                value={formData.reason}
                style={{ height: "70px" }}
                onChange={(e)=>handleChange(e)}
              />
            </Col>
            <Col xs={12} lg={6} className='d-flex justify-content-end' style={{ height: "40px" }}>
              <button className='btn btn-primary' style={{ borderRadius: "50px", width: "150px" }}>Save Project</button>
            </Col>
          </Row>
          <Row className='p-3 mb-3'>
            <Col xs={12} lg={4}>
              <Form.Label className='font-fade'>Reason</Form.Label>
              <Select
                placeholder="For Business"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
            <Col xs={12} lg={4}>
              <Form.Label>Type</Form.Label>
              <Select
                placeholder="Internal"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
            <Col xs={12} lg={4}>
              <Form.Label>Division</Form.Label>
              <Select
                placeholder="Filters"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
          </Row>
          <Row className='p-3 mb-3'>
            <Col xs={12} lg={4}>
              <Form.Label>Category</Form.Label>
              <Select
                placeholder="Quality A"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
            <Col xs={12} lg={4}>
              <Form.Label>Priority</Form.Label>
              <Select
                placeholder="High"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
            <Col xs={12} lg={4}>
              <Form.Label>Department</Form.Label>
              <Select
                placeholder="Strategy"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
          </Row>
          <Row className='p-3 mb-3'>
            <Col xs={12} lg={4}>
              <Form.Label>StartDate</Form.Label>
              <Select
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
            <Col xs={12} lg={4}>
              <Form.Label>EndDate</Form.Label>
              <Select
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
            <Col xs={12} lg={4}>
              <Form.Label>Location</Form.Label>
              <Select
                placeholder="Pune"
                options={options}
                value={options.find((option) => option.value === formData.type)}
                onChange={(selectedOption) => handleChange('type', selectedOption)}
              />
            </Col>
          </Row>
        </Row>
      </Container>
      </Card>
    </div>
</>

  )
};

export default MyForm;

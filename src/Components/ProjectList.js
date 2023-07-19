import React from 'react'
import Datatable from './Datatable'
const ProjectList =()=>{
  return(
    <div>
      <div>
        <img src='Header-bg.svg' alt='logo' width="100%" margin="0" padding= "0" />
      </div>
      <div className='justify-content-center align-items-center p-2'>
        <Datatable />
      </div>
    </div>
  )
}

export default ProjectList
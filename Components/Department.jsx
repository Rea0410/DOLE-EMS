import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Department List</h3>
        </div>
        <Link to='/dashboard/add_department' className='btn btn-secondary'>Add Department</Link>
    </div>
  )
}

export default Category
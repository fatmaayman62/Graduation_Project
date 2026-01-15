import React from 'react'
import { Link } from 'react-router-dom'

function ChooseUserPage() {
  return (
    <div className='h-screen bg-black flex justify-center items-center gap-4'>

        <Link to="/user" className='text-white bg-blue-500 px-5 py-4 rounded-2xl'>user</Link>
        <Link to="/pharmacy" className='text-black bg-white px-5 py-4 rounded-2xl'>Pharmacy</Link>
        
    </div>
  )
}

export default ChooseUserPage
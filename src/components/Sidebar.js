import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className='sidebar'>
      <h2>Sidebar</h2>
      <p>Hi {name}</p>
    </div>
  )
}

export default Sidebar
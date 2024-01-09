import React from 'react'
import { useSelector } from 'react-redux';

const Rightbar = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className='rightbar'>
      <h2>Rightbar</h2>
      <p>Recommended post for the user - {name}</p>
    </div>
  )
}

export default Rightbar
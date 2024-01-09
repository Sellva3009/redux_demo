import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className='header'>
      <h1>Header</h1>
      <p>Login in as {name}</p>
    </div>
  )
}

export default Header
import React from 'react'

const NavBar = () => {
  return (
   <nav className='flex flex-row justify-between items-center'>
    <span>LOGO</span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Books</li>
        <li>Contact</li>
      </ul>
      <button >Add Book</button>
    </nav>
  )
}

export default NavBar
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "orange" })}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "orange" })}>About</NavLink>
          </li>
          <li>
            <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? "red" : "orange" })}>Profile</NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  )
}

export default Navbar
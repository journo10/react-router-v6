import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? "red" : "orange"})}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => ({ backgroundColor: isActive ? "red" : "orange" })}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" style={({ isActive }) => ({ backgroundColor: isActive ? "red" : "orange" })}>
              Users
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  )
}

export default Navbar;
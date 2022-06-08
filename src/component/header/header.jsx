import React from 'react'
import logo from "../../asset/wealth-logo.jpeg"

import { NavLink } from 'react-router-dom'

import Title from '../title/Title'

export default function Header() {
  return (
    <div className='header'>
        <div><a href='/'><img className='header_img' src={logo} alt="logo"/></a></div>
        <Title title="HRnet" className='header__title'/>
        <NavLink className="header__Link" to="/">Home</NavLink>
        <NavLink to='/employees' className="header__Link">View Current Employees</NavLink>
    </div>
  )
}

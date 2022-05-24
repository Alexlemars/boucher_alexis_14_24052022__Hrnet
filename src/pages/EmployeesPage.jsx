import React from 'react'

import { NavLink } from 'react-router-dom'

import Title from '../component/title/Title'

export default function EmployeesPage() {
  return (
    <div>
        <Title className="employees-page__title" title="Current Employees"/>
        <NavLink className="home-page__Link" to="/">Home</NavLink>
    </div>
  )
}

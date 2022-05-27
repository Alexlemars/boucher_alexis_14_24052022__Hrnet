import React from 'react'

import { NavLink } from 'react-router-dom'

import Title from '../component/title/Title'
import Table from '../component/table/Table'

export default function EmployeesPage() {
  return (
    <div className='employees-page'>
        <Title className="employees-page__title" title="Current Employees"/>
        <NavLink className="home-page__Link" to="/">Home</NavLink>
        <Table/>
    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

import Title from '../component/title/Title'
import EmployeesForm from '../component/employees-form/EmployeesForm'




export default function HomePage() {

  
  return (
    <div>
        <main className='home-page'>
            <Title title="HRnet" className='home-page__title'/>
            <NavLink to='/employees' className="home-page__Link">View Current Employees</NavLink>
            <Title title="Create Employees" className="home-page__subtitle"/>
            <EmployeesForm/>
       
        </main>
    </div>
  )
}
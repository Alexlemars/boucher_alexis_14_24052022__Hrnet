import React from 'react'

import Title from '../component/title/Title'
import EmployeesForm from '../component/employees-form/EmployeesForm'




export default function HomePage() {

  
  return (
    <div>
        <main className='home-page'>
            <Title title="Create Employees" className="home-page__subtitle"/>
            <EmployeesForm/>
       
        </main>
    </div>
  )
}
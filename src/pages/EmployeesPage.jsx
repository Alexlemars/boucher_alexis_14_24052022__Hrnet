import React from 'react'



import Title from '../component/title/Title'
import Table from '../component/table/Table'

export default function EmployeesPage() {
  return (
    <div className='employees-page'>
        <Title className="employees-page__title" title="Current Employees"/>
        <Table/>
    </div>
  )
}

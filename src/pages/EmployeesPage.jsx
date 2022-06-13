import React from 'react'



import Title from '../component/title/Title'
import Table from '../component/table/Table'
import Loading from '../component/loading/loading'

export default function EmployeesPage() {
  return (
    <div className='employees-page'>
        <Loading/>
        <Title className="employees-page__title" title="Current Employees"/>
        <Table/>
    </div>
  )
}

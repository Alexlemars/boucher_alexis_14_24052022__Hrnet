import React,{useState} from 'react'

import Title from '../component/title/Title'
import EmployeesForm from '../component/employees-form/EmployeesForm'

import {Modal} from '@alexlemars_75/npm-modal'




export default function HomePage() {

  const [visible,setVisible] = useState(false)

  const handleVisible = (e)=>{
    e.preventDefault()
    setVisible(true)
  }
  const handleNotVisible = (e)=>{
    e.preventDefault()
    setVisible(false)
  }

  
  return (
    <div>
        <main className='home-page'>
            <Title title="Create Employees" className="home-page__subtitle"/>
            <EmployeesForm handleVisible={handleVisible}/>
            <Modal message="Employee Created !"  className={visible ? 'modalVisible' : 'modalNotVisible'}  handleNotVisible={handleNotVisible}/> 
        </main>
    </div>
  )
}
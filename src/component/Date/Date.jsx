import React ,{useState}from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Input from '../input/Input'

export default function Dates({className,fors,type,id,name,label,onChanges,value}) {

    const [date,setDate]=useState(new Date())

    const [toggleDate,setToggleDate]=useState(false)

    const onChange = (dates)=>{
         setDate(dates)
         if(toggleDate){
          setToggleDate(false)
        }else{
          setToggleDate(true)
        } 
        onChanges(date.toLocaleDateString())
    }


    const calendarToggle = ()=>{
      if(toggleDate){
        setToggleDate(false)
      }else{
        setToggleDate(true)
      }
    }

  
    const onChangeInput = (e)=>{
      const {value} = e.target
      onChanges(value)
      if(toggleDate){
        setToggleDate(false)
      } 
    }

    
  return (
    <div>
        <Input 
          className={className}
          fors={fors}
          type={type}
          id={id}
          name={name}
          label={label}
          value={value}
          onClick={calendarToggle}
          onChange={onChangeInput}
          
           />  

           <div>
           <Calendar className={toggleDate ? "show-calendar" : "hide-calendar"} onChange={onChange} value={date} />
           </div>                   
    </div>
  )
}

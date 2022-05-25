import React,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
export default function SelectTag({title,value,content,onChange}) {


    const [values,setValues]= useState(content)
    const [dropdownToggle,setDropdownToggle]=useState(false)


    const handleChange = (e)=>{

        if(dropdownToggle){
            setDropdownToggle(false)

        }else{
            setDropdownToggle(true)
        }
    }

    const handleSelected = (e)=>{
        onChange(e)
        setValues(e.target.id)
        setDropdownToggle(false)
    }

    const element = <FontAwesomeIcon icon={faAngleDown} />
    
  return (
      
    
          <div>
          <div className='select_title'>{title}</div>
          <div className='select' value={values} onClick={handleChange}>
            {values}<span className={dropdownToggle ? 'icon_bottom icon' : 'icon_top icon'}>{element}</span>
            </div>
            <div className= {dropdownToggle ? 'select_dropdown' : 'select_none'} >

            {value.map((elements)=>{
                return <div key={elements.id} className='select_select' onClick={handleSelected} id={elements.id}>{elements.value}</div>
            })}
            </div>
          
          </div>
        
  )
}

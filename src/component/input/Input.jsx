import React from 'react'

export default function Input({className,fors,type,onChange,name,id,label,value,onClick}) {
  return (
    <div className={className}>
          <label htmlFor={fors}>{label}</label>
          <input type={type} onChange={onChange} onClick={onClick}  name={name} id={id} value={value}   />
    </div>
  )
}

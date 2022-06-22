import React from 'react'

export default function Button({type,className,onClick,value,defaultValue}) {
  return (
    <div>
        <button data-testid={`button-${value}`} type={type} className={className} onClick={onClick} defaultValue={defaultValue} value={value} >{value}</button>
    </div>
  )
}

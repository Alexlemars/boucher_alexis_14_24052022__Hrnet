import React from 'react'

export default function Button({type,className,onClick,value}) {
  return (
    <div>
        <button type={type} className={className} onClick={onClick} value={value} >{value}</button>
    </div>
  )
}

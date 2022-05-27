import React from 'react'
import Input from '../input/Input'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/Button';





export default function Table() {


    const icon = ()=>{
        return <span className='icon-carret'><FontAwesomeIcon className='icon-carret_down' icon={faCaretDown}/></span>
    }

    const onClick = ()=>{

    }

    const Users = () => {
        return <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    }





  return (
    <div className='table-container'>
    <div className='table_flex'>
        
    <div>
    
        Show <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
            </select> entries
    </div>
    <Input className="table_flex_search" label="Search : "/>
    </div>
        <table className='table_style'>
            <thead>
                <tr>
                    <th onClick={onClick}>First Name {icon()}</th>
                    <th>Last Name {icon()}</th>
                    <th>Start Date {icon()}</th>
                    <th>Departement {icon()}</th>
                    <th>Date of Birth {icon()}</th>
                    <th> Street {icon()}</th>
                    <th>City {icon()}</th>
                    <th>State {icon()}</th>
                    <th>Zip Code {icon()}</th>
                </tr>
            </thead>
            <tbody>
                {Users()}
            </tbody>
            
        </table>
        <div className='table_page'><Button className="table_page_previous" value="Previous" /> <Button className="table_page_button " value="1"/> <Button className='table_page_next' value="Next"/> </div>
        
    </div>
  )
}

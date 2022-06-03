import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

import Input from '../input/Input'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/Button';


export default function Table() {

    const [search,setSearch]= useState("")
    
    const employees = useSelector(state => state.employees.employees)
    const [dataArray,setDataArray]= useState([])

    const [dataSorted, setDataSorted] = useState(false);
    const [order, setOrder] = useState("ascending");

    const sorting = (col) => {
      if (order === "ascending") {
        const sorted = [...dataArray].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setDataArray(sorted);
        setOrder("descending");
        setDataSorted(true);
      }
      if (order === "descending") {
        const sorted = [...dataArray].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setDataArray(sorted);
        setOrder("ascending");
        setDataSorted(false);
      }
    };

  


    useEffect(()=>{
        setDataArray(employees)
    },[employees])
    



    const icon = ()=>{
        return <span className='icon-carret-up'><FontAwesomeIcon className={dataSorted ? 'icon-carret_down' : "icon-carret-up" } icon={faCaretDown}/></span>
    }

    

   
     
    

    const Users = () => {
        return dataArray.filter((element)=>(
            element.firstName.toLowerCase().includes(search)||
            element.lastName.toLowerCase().includes(search) ||
            element.startDate.toLowerCase().includes(search) ||
            element.department.toLowerCase().includes(search) ||
            element.dateOfBirth.toLowerCase().includes(search) ||
            element.street.toLowerCase().includes(search) ||
            element.city.toLowerCase().includes(search) ||
            element.state.toLowerCase().includes(search) ||
            element.zipCode.toLowerCase().includes(search)


        )).map(element =>(
            
            <tbody key={element.firstName}>
            <tr>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.startDate}</td>
            <td>{element.department}</td>
            <td>{element.dateOfBirth}</td>
            <td>{element.street}</td>
            <td>{element.city}</td>
            <td>{element.state}</td>
            <td>{element.zipCode}</td>
        </tr>
        </tbody>      
        )) 
         
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
    
    <Input value={search}  onChange={(e) => setSearch(e.target.value.toLowerCase())} className="table_flex_search" label="Search : "/>
    </div>
        <table className='table_style'>
            <thead>
                <tr>
                    <th onClick={()=> sorting("firstName")} >First Name {icon()}</th>
                    <th onClick={()=> sorting("lastName")}>Last Name </th>
                    <th onClick={()=> sorting("startDate")}>Start Date </th>
                    <th onClick={()=> sorting("department")}>Departement </th>
                    <th onClick={()=> sorting("dateOfBirth")}>Date of Birth </th>
                    <th onClick={()=> sorting("street")}> Street </th>
                    <th onClick={()=> sorting("city")}>City </th>
                    <th onClick={()=> sorting("state")}>State </th>
                    <th onClick={()=> sorting("zipCode")}>Zip Code</th>
                </tr>
            </thead>
           
            {Users()}
            

            
        
        </table>
        <div className='table_page'><Button  className="table_page_previous" value="Previous" /> <Button  className="table_page_button " value="1"/> <Button className='table_page_next' value="Next"/> </div>
        
        
    </div>
  )
}

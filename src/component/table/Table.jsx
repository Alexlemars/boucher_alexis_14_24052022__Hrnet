import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useTable,useSortBy,useGlobalFilter,usePagination } from "react-table";

import Input from "../input/Input";
import Button from '../button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { COLUMNS } from "../../data/columns";

export default function Table() {

  const employees = useSelector((state) => state.employees.employees);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    setDataArray(employees);
  }, [employees]);

  const iconDown = () => {
    return (
      <span className="icon-carret">
        <FontAwesomeIcon className="icon-carret_down" icon={faCaretDown} />
      </span>
    );
  };
  const iconUp = () => {
    return (
      <span className="icon-carret">
        <FontAwesomeIcon className="icon-carret_down" icon={faCaretUp} />
      </span>
    );
  };

  const tableInstance = useTable({
    columns: COLUMNS,
    data: dataArray,
  },useGlobalFilter,useSortBy,usePagination);

  const { getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageOptions,
      gotoPage,
      setPageSize,
      state,
      setGlobalFilter,
      prepareRow } =
    tableInstance;

    const {GlobalFilter,pageSize} = state

    const pagesNumber = (e)=>{
      const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
      gotoPage(pageNumber)
    }

  return (
    <div className="table-container">
      <div className="table_flex">
      <div>
        
    
        Show <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))} >
           {
             [10,25,50,100].map(pageSize=>(
               <option key={pageSize} value={pageSize}>
                 {pageSize}
               </option>
             ))
           }
            
            </select> entries
    </div>
        <Input
          value={GlobalFilter}
          onChange={(e) => setGlobalFilter(e.target.value.toLowerCase())}
          className="table_flex_search"
          label="Search : "
        />
      </div>
      <table {...getTableProps()} className="table_style">
        <thead>
          {
            headerGroups.map((headerGroup)=>(
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                      <span> 
                        {column.isSorted ? (column.isSortedDesc ? iconDown() : iconUp()) : ""}
                      </span>
                      </th>  
                  ))
                }
              </tr>
              
            ))
          }
          
          
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='table_page'>
        <Button onClick={()=>previousPage()} disabled={!canPreviousPage}  className="table_page_previous" value="Previous" />

        {
          pageOptions.map(page => (
            <Button onClick={e=>pagesNumber(e)}   className="table_page_button "  value={page + 1}/> ))
        }
        
        <Button onClick={()=>nextPage()} disabled={!canNextPage} className='table_page_next' value="Next"/> </div>
    </div>
    
  );
}

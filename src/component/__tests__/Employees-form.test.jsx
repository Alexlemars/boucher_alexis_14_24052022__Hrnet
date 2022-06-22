import {render , screen , cleanup, fireEvent} from '@testing-library/react'
import  renderer  from 'react-test-renderer'
import EmployeesForm from '../employees-form/EmployeesForm';

afterEach(()=>{
    cleanup();
})



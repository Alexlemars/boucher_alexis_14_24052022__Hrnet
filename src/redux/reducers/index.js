
import { combineReducers } from 'redux';
import employees from './employees.js';


const rootReducer = combineReducers({
    employees:employees,
});

export default rootReducer;
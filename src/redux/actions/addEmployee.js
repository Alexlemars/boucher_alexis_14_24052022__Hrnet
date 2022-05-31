const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE"


export const addEmployee = employeeData => async dispatch => {
    dispatch({
        type: ADD_NEW_EMPLOYEE,
        payload: employeeData,
    });
};
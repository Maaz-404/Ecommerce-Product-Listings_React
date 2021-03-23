import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
// import axios from 'axios';

const initialState = {
    employees: [
        {  name:'Loading Data...', stock: '+-+-+-+-+-+-+-+-' }
    ]
}

//separate the functions & dispatcher for routing & http api request

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeEmployee(_id) {
        
        fetch(`http://localhost:8080/api/products/${_id}`, {
            
            method: 'DELETE',
            
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            mode: 'cors',
            
//             body:JSON.stringify(_id) ,
//         
        })
            
        .then(response => response.json())
        .then(data => {
            // let employees=data;
        // We got the data so lets add it to the state
        dispatch({ type: 'REMOVE_EMPLOYEE', payload: _id })
        console.log(data);
        })
    };

    function addEmployee(employees) {
        
        fetch('http://localhost:8080/api/products', {
            
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            mode: 'cors',
            
            body:JSON.stringify(employees) ,
//         
        })
            
        .then(response => response.json())
        .then(data => {
            // let employees=data;
        // We got the data so lets add it to the state
        dispatch({ type: 'ADD_EMPLOYEES', payload: employees })
        console.log(data);
        })
    };

    function editEmployee(employees) {
        
        fetch(`http://localhost:8080/api/products/${employees._id}`, {
            
            method: 'PUT',
            
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            mode: 'cors',
            
            body:JSON.stringify(employees) ,
//         
        })
            
        .then(response => response.json())
        .then(data => {
            // let employees=data;
        // We got the data so lets add it to the state
        dispatch({ type: 'EDIT_EMPLOYEE', payload: employees })
        console.log(data);
        
        })
        
    };
    
    function editRoute(employees) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        });
    };
    
    function getEmployees(){
        
	  // Start fetching and fire up the loading state
	  fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => {
        // let employees=data;
      // We got the data so lets add it to the state
      dispatch({ type: 'listing', payload: data.data })
      console.log(data.data);
    })
    }

	
    return (<GlobalContext.Provider value={{
        employees:state.employees,
        getEmployees,
        removeEmployee,
        addEmployee,
        editEmployee,
        editRoute
    }}>
        {children}
    </GlobalContext.Provider>);
}

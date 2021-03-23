import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
// import axios from 'axios';

const initialState = {
    products: [
        {  name:'Loading Data...', stock: '+-+-+-+-+-+-+-+-' }
    ]
}

//separate the functions & dispatcher for routing & http api request

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeProduct(_id) {
        
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
        dispatch({ type: 'REMOVE_PRODUCT', payload: _id })
        console.log(data);
        })
    };

    function addProduct(products) {
        
        fetch('http://localhost:8080/api/products', {
            
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            mode: 'cors',
            
            body:JSON.stringify(products) ,
//         
        })
            
        .then(response => response.json())
        .then(data => {
            // let employees=data;
        // We got the data so lets add it to the state
        dispatch({ type: 'ADD_PRODUCTS', payload: products })
        console.log(data);
        })
    };

    function editProducts(products) {
        
        fetch(`http://localhost:8080/api/products/${products._id}`, {
            
            method: 'PUT',
            
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            mode: 'cors',
            
            body:JSON.stringify(products) ,
//         
        })
            
        .then(response => response.json())
        .then(data => {
            // let employees=data;
        // We got the data so lets add it to the state
        dispatch({ type: 'EDIT_PRODUCT', payload: products})
        console.log(data);
        
        })
        
    };
    
    function editRoute(products) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: products
        });
    };
    
    function getProducts(){
        
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
        products:state.products,
        getProducts,
        removeProduct,
        addProduct,
        editProduct,
        editRoute
    }}>
        {children}
    </GlobalContext.Provider>);
}

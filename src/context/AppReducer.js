export default (state, action) => {
    switch (action.type) {		
		// case 'Listings':
        //     return {
        //         ...state,
        //         employees: [...state.employees, action.payload]
        //     };
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee._id !== action.payload)
            };
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case 'EDIT_EMPLOYEE':
            const updatedEmployee = action.payload;

            const updatedEmployees = state.employees.map(employee => {
                if (employee.name === updatedEmployee.name) {
                    return updatedEmployee;
                }
                return employee;
            });


            return {
                ...state,
                employees: updatedEmployees
            };
       case "listing": 
            // let updatedstate = action.payload;
        return {
            // updatedstate,

            // ...state,
            employees:action.payload
        
        };

        default: return{
            ...state
            
        };
    }
}

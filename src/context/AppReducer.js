export default (state, action) => {
    switch (action.type) {		
		// case 'Listings':
        //     return {
        //         ...state,
        //         employees: [...state.employees, action.payload]
        //     };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product=> product._id !== action.payload)
            };
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case 'EDIT_PRODUCT':
            const updatedProduct= action.payload;

            const updatedProducts= state.products.map(product => {
                if (product.name === updatedProduct.name) {
                    return updatedProduct;
                }
                return product;
            });


            return {
                ...state,
                products: updatedProducts
            };
       case "listing": 
            // let updatedstate = action.payload;
        return {
            // updatedstate,

            // ...state,
            products:action.payload
        
        };

        default: return{
            ...state
            
        };
    }
}

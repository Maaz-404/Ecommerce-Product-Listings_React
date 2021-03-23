import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editproduct= (route) => {
    let history = useHistory();
    const { products, editProduct} = useContext(GlobalContext);
    const [selectedProduct, setSeletedProduct] = useState({ _id: null, name: '', price: '', stock: '' });
    const currentProductID = route.match.params._id; 
    // Match _id with the name to check 

    useEffect(() => {
        const productName= currentProductID;
        const selectedProduct= products.find(pro => pro._name === productName);
        setSeletedProduct(selectedProduct);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editProduct(selectedProduct);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedProduct({ ...selectedProduct, [userKey]: value })

    if (!selectedProduct|| !selectedProduct.name) {
        return <div>404 not found</div>
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of Product
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedProduct.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedProduct.price} onChange={(e) => handleOnChange('price', e.target.value)} type="text" placeholder="Enter price" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                            Stock
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedProduct.stock} onChange={(e) => handleOnChange('stock', e.target.value)} type="text" placeholder="Enter Stock" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}

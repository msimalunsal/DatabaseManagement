import React, {useState, createContext} from 'react';

export const CustomerContext =createContext();

export const CustomerContextProvider = (props) => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState([]);
    return(
        <CustomerContext.Provider value={{customers,setCustomers,selectedCustomer,setSelectedCustomer,}}>
            {props.children}
        </CustomerContext.Provider>
    );
};
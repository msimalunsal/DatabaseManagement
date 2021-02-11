import React , {useEffect} from "react";
import CustomerFinder from "../apis/CustomeFinder";
import { CustomerContext } from "../context/CustomerContext";
import { useContext } from 'react';
import '../style/list.css'

const ListCustomers = (props) => {
    const {customers, setCustomers}= useContext(CustomerContext)
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response =await CustomerFinder.get("/customers");
                console.log(response.data);
                setCustomers(response.data.data.customers)
            } catch (error) {
                
            }
        };
        fetchData();
       
    },[]);
    return (
        
        <div class="table-wrapper">
            <h2>All Customers</h2>
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Passaport No</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Customer Name</th>
                        <th>Customer Phone</th>
                    </tr>
                      
                </thead>
                <tbody>
                    {customers && customers.map(customer => {
                        return(
                            <tr key={customer.pass_no}>
                                <td>{customer.pass_no}</td>
                                <td>{customer.country}</td>
                                <td>{customer.address}</td>
                                <td>{customer.email}</td>
                                <td>{customer.customer_name}</td>
                                <td>{customer.cphone}</td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default ListCustomers

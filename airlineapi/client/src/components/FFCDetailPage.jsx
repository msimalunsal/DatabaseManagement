import React , {useEffect} from "react";
import CustomerFinder from "../apis/CustomeFinder";
import { CustomerContext } from "../context/CustomerContext";
import { useContext } from 'react';
import '../style/list.css'
import { useParams } from "react-router-dom";

const ListCustomers = (props) => {
    const {id} =useParams();
    const {customers, setCustomers}= useContext(CustomerContext)
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response =await CustomerFinder.get(`ffc/customers/${id}`);
                setCustomers(response.data.data.customers)
                console.log(response.data.customers);
            } catch (error) {
                
            }
        };
        fetchData();
       
    },[]);
    return (
        
        <div className="table-wrapper">
            <h2>Customer Detail</h2>
            <table className="fl-table">
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
                            <tr>
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

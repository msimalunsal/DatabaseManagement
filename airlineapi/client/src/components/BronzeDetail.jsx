import React , {useEffect} from "react";
import CustomerFinder from "../apis/CustomeFinder";
import { useContext } from 'react';
import { CustomerContext } from "../context/CustomerContext";
import '../style/list.css';
import {Link} from 'react-router-dom'
const ListBronze = (props) => {
    const {customers, setCustomers}= useContext(CustomerContext)
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response =await CustomerFinder.get("/ffc/bronze");
                setCustomers(response.data.data.customers)
            } catch (error) {
                
            }
        };
        fetchData();
       
    },[]);
    return (
        
        <div class="table-wrapper">
            <h2>Bronze Customers</h2>
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Frequently Customer No</th>
                        <th>Customer Passaport No</th>
                        <th>Total Millage</th>
                        <th>See Detail</th>
                    </tr>
                      
                </thead>
                <tbody>
                    {customers && customers.map(customers => {
                        return(
                            <tr key={customers.freq_cust_no}>
                                <td>{customers.freq_cust_no}</td>
                                <td>{customers.cust_pass_no}</td>
                                <td>{customers.total_millage}</td>
                                <td><Link to={`customers/${customers.cust_pass_no}`}>GO</Link></td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default ListBronze

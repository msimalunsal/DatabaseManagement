import React , {useEffect} from "react";
import CustomerFinder from "../apis/CustomeFinder";
import { useContext } from 'react';
import { CustomerContext } from "../context/CustomerContext";
import '../style/list.css';
const ListSilver = (props) => {
    const {customers, setCustomers}= useContext(CustomerContext)
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response =await CustomerFinder.get("/ffc/silver");
                setCustomers(response.data.data.customers)
            } catch (error) {
                
            }
        };
        fetchData();
       
    },[]);
    return (
        
        <div class="table-wrapper">
            <h2>Silver Customers</h2>
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Frequently Customer No</th>
                        <th>Customer Passaport No</th>
                        <th>Total Millage</th>
                    </tr>
                      
                </thead>
                <tbody>
                    {customers && customers.map(customers => {
                        return(
                            <tr key={customers.freq_cust_no}>
                                <td>{customers.freq_cust_no}</td>
                                <td>{customers.cust_pass_no}</td>
                                <td>{customers.total_millage}</td>
                               
                            </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default ListSilver

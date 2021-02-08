import React , {useEffect} from "react";
import CustomerFinder from "../apis/CustomeFinder";
import { CustomerContext } from "../context/CustomerContext";
import { useContext } from 'react';

const ListCustomers = (props) => {
    const {customers, setCustomers}= useContext(CustomerContext)
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response =await CustomerFinder.get("");
                console.log(response.data);
                setCustomers(response.data.data.customers)
            } catch (error) {
                
            }
        };
        fetchData();
       
    },[]);
    return (
        <div className="list-group">
            <table className="table-primary">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Passaport No</th>
                        <th scope="col">Country</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Email</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Phone</th>

                    </tr>
                </thead>
                <tbody>
                    {customers && customers.map(customer => {
                        return(
                            <tr key={customer.pass_no}>
                                <td>{customer.pass_no}</td>
                                <td>{customer.country}</td>
                                <td>{customer.adress}</td>
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

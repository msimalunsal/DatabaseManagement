import React , {useEffect} from "react";
import CustomerFinder from "../apis/CustomeFinder";
import { CustomerContext } from "../context/CustomerContext";
import { useContext } from 'react';
import '../style/list.css'
import { useParams } from "react-router-dom";

const ListCustomers = (props) => {
    const {id} =useParams();
    const {selectedCustomer, setSelectedCustomer}= useContext(CustomerContext)
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response =await CustomerFinder.get(`/ffc/customers/${id}`);
                setSelectedCustomer(response.data.data.customers)
                console.log(id);
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
                        <th>Total Mileage</th>
                    </tr>
                      
                </thead>
                <tbody>
                            <tr key={selectedCustomer.pass_no}>
                                <td>{selectedCustomer.pass_no}</td>
                                <td>{selectedCustomer.country}</td>
                                <td>{selectedCustomer.address}</td>
                                <td>{selectedCustomer.email}</td>
                                <td>{selectedCustomer.customer_name}</td>
                                <td>{selectedCustomer.cphone}</td>
                                <td>{selectedCustomer.total_mileage}</td>

                            </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListCustomers

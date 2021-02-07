import React from 'react'
import Header from '../components/Header'
import ListCustomers from '../components/ListCustomers'
import SearchCustomer from '../components/SearchCustomer'

const Home = () => {
    return (
        <div>
            <Header/>
            <SearchCustomer/>
            <ListCustomers/>
        </div>
    )
}

export default Home

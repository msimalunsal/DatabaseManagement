import React from 'react'

const SearchCustomer = () => {
    return (
        <div className ="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter the passport number of the customer you want to search"/>
                        <button className="button">Search with Passport No</button>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter the name of the customer you want to search"/>
                        <button className="button">Search with Name</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default SearchCustomer

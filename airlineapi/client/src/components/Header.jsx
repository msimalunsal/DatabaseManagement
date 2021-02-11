import React from 'react'
import '../style/navbar.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/api/v1/customers">DATABASE API</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/api/v1/ffc">Frequently Flyer Customer</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header

import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Home from './routes/Home'
import BronzeCustomers from './routes/BronzeCustomers'
import SilverCustomers from './routes/SilverCustomers'
import GoldCustomers from './routes/GoldCustomers'
import FFC from './routes/FFC'
import { CustomerContextProvider } from './context/CustomerContext';

const App = () => (
    <CustomerContextProvider>
        <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/api/v1/customers" render = {props => <Home {...props} />} />
                        <Route exact path="/api/v1/ffc" render = {props => <FFC {...props} />} />
                        <Route exact path="/api/v1/ffc/bronze" render = {props => <BronzeCustomers {...props} />} />
                        <Route exact path="/api/v1/ffc/silver" render = {props => <SilverCustomers {...props} />} />
                        <Route exact path="/api/v1/ffc/gold" render = {props => <GoldCustomers {...props} />} />

                    </Switch>
                    
                </Router>
        </div>
    </CustomerContextProvider>
)

export default App;
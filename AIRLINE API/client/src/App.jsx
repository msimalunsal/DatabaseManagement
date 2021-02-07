import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Home from './routes/Home'
import CustomerDetailPage from './routes/CustomerDetailPage'
import FFC from './routes/FFC'
import { CustomerContextProvider } from './context/CustomerContext';

const App = () => (
    <CustomerContextProvider>
        <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/api/v1/customers" render = {props => <Home {...props} />} />
                        <Route exact path="/api/ffc" render = {props => <FFC {...props} />} />
                    </Switch>
                    
                </Router>
        </div>
    </CustomerContextProvider>
)

export default App;
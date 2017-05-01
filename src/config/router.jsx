import React, { Component } from 'react'
import { Route, Router, browserHistory, IndexRoute } from "react-router";
import {
    Signup,
    Signin,
    Home,
    CreateBranchContainer,
    CreateDepartContainer,
    CreateSupplierContainer,
    CreateCustomerContainer,
    AllCustomersContainer
} from '../container'
import { NavBar } from '../components'

// material UI Component And Config
import injectTabEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// call Tab Event Plugin
injectTabEventPlugin()

// Redux Store
import { Provider } from "react-redux";
import { store } from '../store'

export class AllRoutes extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Provider store={store}>

                        <Router history={browserHistory}>

                            <Route path="/registration" component={Signup} />
                            <Route path="/login" component={Signin} />
                            <Route path="/" component={NavBar}>
                                <IndexRoute component={Signin} />
                                <Route path="/home" component={Home} />
                                <Route path="/create_branch" component={CreateBranchContainer} />
                                <Route path="/create_branch_depart" component={CreateDepartContainer} />
                                <Route path="/create_supplier" component={CreateSupplierContainer} />
                                <Route path="/create_customer" component={CreateCustomerContainer} />
                                <Route path="/get_customer" component={AllCustomersContainer} />
                            </Route>
                            {/*<Route path></Route>*/}


                        </Router>
                    </Provider>
                </MuiThemeProvider>
            </div>
        )
    }
}
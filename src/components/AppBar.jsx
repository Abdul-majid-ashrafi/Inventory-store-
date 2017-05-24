import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as mat from 'material-ui';
import { AuthActions } from '../store/actions'

import { Link } from "react-router"
class NavBar extends Component {

    componentWillMount() {
        setTimeout(() => {
            if (!this.props.isLoggedin.isLoggedIn) {
                browserHistory.push('/login')
            }
        }, 1000)
    }

    logout() {
        AuthActions.logout()
    }
    render() {
        const container = {
            marginTop: '-8px',
            marginLeft: '-8px',
            marginRight: '-8px',
        }
        const header = {
            background: "darkCyan",
            marginTop: '-8px',
            marginBottom: '-8px'
        }
        return (
            <div>
                {(this.props.isLoggedin.isLoggedIn) ?
                    <div style={container}>
                        <mat.AppBar style={{ border: 'none', background: "darkCyan" }}
                            showMenuIconButton={false}
                            title="TITLE"
                            iconElementRight={
                                <div style={{ width: '900px', margin: '0 auto' }}>
                                    {/*<mat.IconMenu
                                        iconButtonElement={<mat.FlatButton label="Branches" labelStyle={{ color: "white" }} />}
                                    >
                                        <div style={header}>
                                            <Link to="/create_branch">
                                                <mat.MenuItem primaryText="Create Branch" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/create_branch_depart">
                                                <mat.MenuItem primaryText="Create Department" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/get_depart">
                                            <mat.MenuItem primaryText="All Department" style={{ color: "white" }} />
                                            </Link>
                                        </div>
                                    </mat.IconMenu>*/}

                                    <Link to="/get_suppleirs">
                                        <mat.IconMenu open={false} iconButtonElement={<mat.FlatButton label="Suppliers" labelStyle={{ color: "white" }} />}>
                                        </mat.IconMenu>
                                    </Link>

                                    <Link to="/get_customer">
                                        <mat.IconMenu open={false} iconButtonElement={<mat.FlatButton label="Customers" labelStyle={{ color: "white" }} />} >
                                        </mat.IconMenu>
                                    </Link>

                                    <mat.IconMenu
                                        iconButtonElement={<mat.FlatButton label="Inventory*" labelStyle={{ color: "white" }} />}
                                    >
                                        <div style={header}>
                                            <Link to="/create_sell">
                                                <mat.MenuItem primaryText="New Sale" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/veiw_Sell_Item">
                                                <mat.MenuItem primaryText="View Sales" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/add_purchase">
                                                <mat.MenuItem primaryText="New Purchase" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/view_purchase">
                                                <mat.MenuItem primaryText="View Purchases" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/add_product">
                                                <mat.MenuItem primaryText="New Product" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/get_product">
                                                <mat.MenuItem primaryText="View Products" style={{ color: "white" }} />
                                            </Link>
                                            <Link to="/stock">
                                                <mat.MenuItem primaryText="View Stocks" style={{ color: "white" }} />
                                            </Link>
                                        </div>
                                    </mat.IconMenu>

                                    {/*<mat.FlatButton label="Dashboard" labelStyle={{ color: 'white' }} />*/}

                                    <mat.FlatButton label="Logout" onClick={this.logout.bind(this)} labelStyle={{ color: 'white' }} />
                                </div>
                            }>
                        </mat.AppBar>
                        {this.props.children}
                    </div>
                    : this.props.children
                }

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedin: state.authReducer
    }
}
export default connect(mapStateToProps, null)(NavBar);
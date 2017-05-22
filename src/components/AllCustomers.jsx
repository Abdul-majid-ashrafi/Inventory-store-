import React, { Component } from 'react'
import * as mat from 'material-ui';
import { browserHistory } from 'react-router'
export class AllCustomersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerArray: []
        }
    }
    componentWillMount() {
        let customers = this.props.isCustomers.customers;
        let vm = this
        Object.keys(customers).forEach(function (key) {
            var obj = customers[key]
            obj.id = key
            vm.state.customerArray.push(obj)
            vm.setState({ customerArray: vm.state.customerArray })
        });
    }
    createCustomer() {
        browserHistory.push('/create_customer')
    }

    render() {
        const center = {
            width: '98%',
            margin: '0 auto',
            background: '#3da3b1',//00bcd4
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        const container = {
            width: '90%',
            margin: '0 auto',
        }
        return (
            <div style={{ marginTop: '30px' }}>
                <div style={container}>
                    <mat.AppBar title="Customers"
                        showMenuIconButton={false}
                        style={{ borderBottomLeftRadius: '1em', borderBottomRightRadius: '1em' }}
                        iconElementRight={
                            <mat.RaisedButton label="Create" primary={true} onClick={this.createCustomer.bind(this)} />}
                    />
                    <mat.Table style={center}>
                        <mat.TableBody displayRowCheckbox={false}>
                            <mat.TableRow style={{ color: 'white', fontWeight: '600' }}>
                                <mat.TableRowColumn>Name</mat.TableRowColumn>
                                <mat.TableRowColumn>Number</mat.TableRowColumn>
                                <mat.TableRowColumn>Address</mat.TableRowColumn>
                            </mat.TableRow>

                            {this.state.customerArray.map((value, index) => {
                                return (
                                    <mat.TableRow style={{ color: 'white' }} key={index}>
                                        <mat.TableRowColumn>{value.customerName}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.customerNumber}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.customerAddress}</mat.TableRowColumn>
                                    </mat.TableRow>
                                )
                            })}
                        </mat.TableBody>
                    </mat.Table>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}
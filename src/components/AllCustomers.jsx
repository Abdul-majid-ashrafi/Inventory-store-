import React, { Component } from 'react'
import * as mat from 'material-ui';

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


    render() {
        const center = {
            width: '70%',
            margin: '0 auto',
            background: 'darkCyan',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        const container = {
            textAlign: 'center',
            width: '100%',
            margin: '0 auto',
            background: '#fff2e6',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        return (
            <div style={container}>
                <br />
                <br />
                <h1>Customers</h1>
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
        )
    }
}
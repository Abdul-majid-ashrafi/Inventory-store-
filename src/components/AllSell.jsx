import React, { Component } from 'react'
import * as mat from 'material-ui';

export class AllSellComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sellArray: []
        }
    }
    componentWillMount() {
        let sell = this.props.isSell.sell;
        let vm = this
        Object.keys(sell).forEach(function (key) {
            var obj = sell[key]
            obj.id = key
            vm.state.sellArray.push(obj)
            vm.setState({ sellArray: vm.state.sellArray })
        });
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
                    <mat.AppBar title="Sell Inventory" showMenuIconButton={false} style={{ borderBottomLeftRadius: '1em', borderBottomRightRadius: '1em' }} />
                    <mat.Table style={center}>
                        <mat.TableBody displayRowCheckbox={false}>
                            <mat.TableRow style={{ color: 'white', fontWeight: '600' }}>
                                <mat.TableRowColumn>Item</mat.TableRowColumn>
                                <mat.TableRowColumn>Price</mat.TableRowColumn>
                                <mat.TableRowColumn>Quantity</mat.TableRowColumn>
                                <mat.TableRowColumn>Total Price</mat.TableRowColumn>
                                <mat.TableRowColumn>Customer</mat.TableRowColumn>
                                <mat.TableRowColumn>Time</mat.TableRowColumn>
                                <mat.TableRowColumn>Department</mat.TableRowColumn>
                                <mat.TableRowColumn>Branch</mat.TableRowColumn>
                            </mat.TableRow>

                            {this.state.sellArray.map((value, index) => {
                                return (
                                    <mat.TableRow style={{ color: 'white' }} key={index}>
                                        <mat.TableRowColumn>{value.ProName}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.price}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.quantity}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.totalPrice}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.customer}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{new Date(value.createdAt).getHours() + ":" + new Date(value.createdAt).getMinutes() + "-" + new Date(value.createdAt).toLocaleDateString()}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.department}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.branch}</mat.TableRowColumn>
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
import React, { Component } from 'react'
import * as mat from 'material-ui';

export class StockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stockArray: []
        }
    }
    componentWillMount() {
        let stocks = this.props.isStock.products;
        console.log(stocks)
        let vm = this
        Object.keys(stocks).forEach(function (key) {
            var obj = stocks[key]
            obj.id = key
            vm.state.stockArray.push(obj)
            vm.setState({ stockArray: vm.state.stockArray })
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
                <mat.RaisedButton label="Stock" primary={true} style={center} />
                <mat.Table style={center}>
                    <mat.TableBody displayRowCheckbox={false}>
                        <mat.TableRow style={{ color: 'white', fontWeight: '600' }}>
                            <mat.TableRowColumn>Item</mat.TableRowColumn>
                            <mat.TableRowColumn>Discription</mat.TableRowColumn>
                            <mat.TableRowColumn>Price</mat.TableRowColumn>
                            <mat.TableRowColumn>Quantity</mat.TableRowColumn>
                            <mat.TableRowColumn>Total Price</mat.TableRowColumn>
                            <mat.TableRowColumn>Department</mat.TableRowColumn>
                        </mat.TableRow>

                        {this.state.stockArray.map((value, index) => {
                            return (
                                <mat.TableRow style={{ color: 'white' }} key={index}>
                                    <mat.TableRowColumn>{value.productName}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{value.description}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{value.eachPrice}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{value.quantity}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{value.totalPrice}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{value.department}</mat.TableRowColumn>
                                    {/*{(value.description) ?
                                        <mat.TableRowColumn>{value.description}</mat.TableRowColumn> :
                                        'null'
                                    }*/}
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
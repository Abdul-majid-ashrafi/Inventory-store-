import React, { Component } from 'react'
import * as mat from 'material-ui';

export class AllProductsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productArray: []
        }
    }
    componentWillMount() {
        let products = this.props.isProducts.products;
        let vm = this
        Object.keys(products).forEach(function (key) {
            var obj = products[key]
            obj.id = key
            vm.state.productArray.push(obj)
            vm.setState({ productArray: vm.state.productArray })
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
                    <mat.AppBar title="Products " showMenuIconButton={false} style={{ borderBottomLeftRadius: '1em', borderBottomRightRadius: '1em' }} />
                    <mat.Table style={center}>
                    <mat.TableBody displayRowCheckbox={false}>
                        <mat.TableRow style={{ color: 'white', fontWeight: '600' }}>
                            <mat.TableRowColumn>Name</mat.TableRowColumn>
                            <mat.TableRowColumn>Price</mat.TableRowColumn>
                            <mat.TableRowColumn>Description</mat.TableRowColumn>
                        </mat.TableRow>

                        {this.state.productArray.map((value, index) => {
                            return (
                                <mat.TableRow style={{ color: 'white' }} key={index}>
                                    <mat.TableRowColumn>{value.productName}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{value.eachPrice}</mat.TableRowColumn>
                                    {(value.description) ?
                                        <mat.TableRowColumn>{value.description}</mat.TableRowColumn> :
                                        'null'
                                    }
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
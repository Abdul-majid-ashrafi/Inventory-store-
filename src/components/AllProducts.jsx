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
            // color : 'white',
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
                 {/*<mat.RaisedButton label="New" primary={true} style={{float : 'right',backgroundColor : 'red !important'}}/>*/}
                <br />
                <br />
                {/*<h1>Products</h1>*/}
                     <mat.RaisedButton label="Products" primary={true} style={center}/>

                <mat.Table style={center}>
                    <mat.TableBody displayRowCheckbox={false}>
                        <mat.TableRow style={{ color: 'white', fontWeight: '600' }}>
                            <mat.TableRowColumn>Name</mat.TableRowColumn>
                            <mat.TableRowColumn>Description</mat.TableRowColumn>
                            {/*<mat.TableRowColumn>Address</mat.TableRowColumn>*/}
                        </mat.TableRow>

                        {this.state.productArray.map((value, index) => {
                            return (
                                <mat.TableRow style={{ color: 'white' }} key={index}>
                                    <mat.TableRowColumn>{value.productName}</mat.TableRowColumn>
                                    {(value.description) ?
                                        <mat.TableRowColumn>{value.description}</mat.TableRowColumn> :
                                        'null'
                                    }
                                    {/*<mat.TableRowColumn>{value.customerAddress}</mat.TableRowColumn>*/}
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
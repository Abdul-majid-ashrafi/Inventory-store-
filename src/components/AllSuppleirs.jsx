import React, { Component } from 'react'
import * as mat from 'material-ui';
import { browserHistory } from 'react-router'

export class AllSupplierComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            supplierArray: []
        }
    }
    componentWillMount() {
        console.log(this.props.isSupplier)
        let supplier = this.props.isSupplier.suppleir;
        let vm = this
        Object.keys(supplier).forEach(function (key) {
            var obj = supplier[key]
            obj.id = key
            vm.state.supplierArray.push(obj)
            vm.setState({ supplierArray: vm.state.supplierArray })
        });
    }

    createSupplier() {
        browserHistory.push('/create_supplier')
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
                    <mat.AppBar title="Suppliers" showMenuIconButton={false}
                        style={{ borderBottomLeftRadius: '1em', borderBottomRightRadius: '1em' }}
                        iconElementRight={
                            <mat.RaisedButton label="Create" primary={true} onClick={this.createSupplier.bind(this)} />}
                    />
                    <mat.Table style={center}>
                        <mat.TableBody displayRowCheckbox={false}>
                            <mat.TableRow style={{ color: 'white', fontWeight: '600' }}>
                                <mat.TableRowColumn>Name</mat.TableRowColumn>
                                <mat.TableRowColumn>Number</mat.TableRowColumn>
                                <mat.TableRowColumn>Address</mat.TableRowColumn>
                            </mat.TableRow>

                            {this.state.supplierArray.map((value, index) => {
                                return (
                                    <mat.TableRow style={{ color: 'white' }} key={index}>
                                        <mat.TableRowColumn>{value.supplierName}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.supplierNumber}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{value.supplierAddress}</mat.TableRowColumn>
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
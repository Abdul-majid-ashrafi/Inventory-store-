import React, { Component } from 'react'
import * as mat from 'material-ui';
// import { browserHistory } from 'react-router'

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


    render() {
        const center = {
            width: '70%',
            margin: '0 auto',
            background: 'darkCyan',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        const container = {
            textAlign : 'center',
            width: '100%',
            margin: '0 auto',
            background: '#fff2e6',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        return (
            <div style={container}>
                <br />
                <br />
                <h1>Suppleir</h1>
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
        )
    }
}
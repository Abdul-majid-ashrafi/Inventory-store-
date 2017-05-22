import React, { Component } from 'react'
import * as mat from 'material-ui';
import { browserHistory } from 'react-router'

export class CreatePurchaseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            productArray: [],
            supplierArray: [],
            // branchArray: [],
            // departArray: []
        }
    }

    componentWillMount() {
        let products = this.props.isProducts.products;
        let suppleirs = this.props.isSupplier.suppleir;
        // let branches = this.props.isBranche.branches;
        // let departments = this.props.isDepartment.departments;
        let vm = this

        Object.keys(products).forEach(function (key) {
            var obj = products[key]
            obj.id = key
            vm.state.productArray.push(obj)
            vm.setState({ productArray: vm.state.productArray })
        });

        Object.keys(suppleirs).forEach(function (key) {
            var obj = suppleirs[key]
            obj.id = key
            vm.state.supplierArray.push(obj)
            vm.setState({ supplierArray: vm.state.supplierArray })
        });

        // Object.keys(branches).forEach(function (key) {
        //     var obj = branches[key]
        //     obj.id = key
        //     vm.state.branchArray.push(obj)
        //     vm.setState({ branchArray: vm.state.branchArray })
        // });

        // Object.keys(departments).forEach(function (key) {
        //     var obj = departments[key]
        //     obj.id = key
        //     vm.state.departArray.push(obj)
        //     vm.setState({ departArray: vm.state.departArray })
        // });
    }


    handleRequestClose = () => {
        this.props.changeResult()
        browserHistory.push('/home')
    };

    render() {
        const center = {
            width: '60%',
            margin: '0 auto',
            background: '#fff',
            padding: '30px',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)',
            color: 'white'
        }
        const header = {
            width: '65%',
            margin: '0 auto',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)',
            color: 'white'
        }
        const dropDownStyle = {
            margin: 10,
            background: '#00bcd4',
            padding: '10px',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        const dropDownStyle2 = {
            marginLeft: 65,
            background: '#00bcd4',
            padding: '10px',
            width: 300,
            display: 'inline-block',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        const style = {
            color: 'white',
            background: '#00bcd4',
            paddingLeft: '30px',
            paddingRight: '30px',
            border: 'none',
            fontSize: 19,
            float: 'right',
            marginRight: 20,
        };
        return (
            <div style={{ marginTop: '30px' }}>

                <mat.AppBar style={header} title="Purchase product" showMenuIconButton={false} />
                <div style={center}>
                    <form onSubmit={this.props._submit}>
                        <div style={{ margin: 10 }}>
                            <mat.TextField
                                hintText="Quantity"
                                name="quantity"
                                value={this.props.state.quantity}
                                onChange={this.props._inputHandler}
                                required fullWidth autoFocus
                            />
                            <br />
                        </div>

                        {(this.props.state.totalPrice) ?
                            <div style={dropDownStyle2}>
                                <label style={{ fontSize: 21 }}>Price</label>
                                <b style={style}> {this.props.state.eachPrice}</b>
                            </div>
                            : ''}
                        {(this.props.state.totalPrice) ?
                            <div style={dropDownStyle2}>
                                <label style={{ fontSize: 21 }}>Total Price</label>
                                <b style={style}> {this.props.state.totalPrice}</b>
                            </div>
                            : ''}

                        <div style={dropDownStyle}>
                            <label style={{ fontSize: 21 }}>Product</label>
                            <select style={style} name="ProName" onChange={this.props._inputHandler} value={this.props.state.ProName}>
                                <option>  Not selected</option>
                                {this.state.productArray.map((value, index) => {
                                    return (
                                        <option value={JSON.stringify(value)} key={index}> {value.productName} </option>
                                    )
                                })}
                            </select>
                            <br />
                        </div>
                        {/*<div style={dropDownStyle}>
                            <label style={{ fontSize: 21 }}>Branch</label>
                            <select style={style} name="branch" onChange={this.props._inputHandler} value={this.props.state.branch}>
                                <option> Not selected</option>
                                {this.state.branchArray.map((value, index) => {
                                    return (
                                        <option value={value.branchName} key={index}> {value.branchName} </option>
                                    )
                                })}
                            </select>
                            <br />
                        </div>
                        <div style={dropDownStyle}>
                            <label style={{ fontSize: 21 }}>Depart</label>
                            <select style={style} name="department" onChange={this.props._inputHandler} value={this.props.state.department}>
                                <option>   Not selected </option>
                                {this.state.departArray.map((value, index) => {
                                    return (
                                        <option value={value.departName} key={index}> {value.departName} </option>
                                    )
                                })}
                            </select>
                            <br />
                        </div>*/}
                        <div style={dropDownStyle}>
                            <label style={{ fontSize: 21 }}>Supplier</label>

                            <select style={style} name="supplier" onChange={this.props._inputHandler} value={this.props.state.supplier}>
                                <option> Not selected </option>
                                {this.state.supplierArray.map((value, index) => {
                                    return (
                                        <option value={value.supplierName} key={index}> {value.supplierName} </option>
                                    )
                                })}
                            </select>
                            <br />
                        </div>
                        <br />
                        <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        {this.props.loading && <mat.CircularProgress size={30} color="cyan" style={{ top: 10, left: 10 }} />}
                        {this.props.isResult && <mat.Snackbar
                            open={this.state.open}
                            message="Create successfully"
                            autoHideDuration={3000}
                            onRequestClose={this.handleRequestClose}
                        />}
                    </form>
                </div>
            </div >
        )
    }
}
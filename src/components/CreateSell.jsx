import React, { Component } from 'react'
import * as mat from 'material-ui';
import { browserHistory } from 'react-router'

export class CreateSellComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            productArray: [],
            customerArray: [],
            branchArray: [],
            departArray: []
        }
    }

    componentWillMount() {
        let products = this.props.isProducts.products;
        let customers = this.props.isCustomer.customers;
        let branches = this.props.isBranche.branches;
        let departments = this.props.isDepartment.departments;
        let vm = this

        Object.keys(products).forEach(function (key) {
            var obj = products[key]
            obj.id = key
            vm.state.productArray.push(obj)
            vm.setState({ productArray: vm.state.productArray })
        });

        Object.keys(customers).forEach(function (key) {
            var obj = customers[key]
            obj.id = key
            vm.state.customerArray.push(obj)
            vm.setState({ customerArray: vm.state.customerArray })
        });

        Object.keys(branches).forEach(function (key) {
            var obj = branches[key]
            obj.id = key
            vm.state.branchArray.push(obj)
            vm.setState({ branchArray: vm.state.branchArray })
        });

        Object.keys(departments).forEach(function (key) {
            var obj = departments[key]
            obj.id = key
            vm.state.departArray.push(obj)
            vm.setState({ departArray: vm.state.departArray })
        });
    }


    handleRequestClose = () => {
        this.props.changeResult()
        // browserHistory.push('/home')
    };

    render() {
        const center = {
            width: '70%',
            margin: '0 auto',
            background: '#fff',
            padding: '30px',
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

                <div style={center}>
                    <mat.AppBar title="Sell Product" showMenuIconButton={false} />
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
                        <div style={dropDownStyle}>
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
                        </div>
                        <div style={dropDownStyle}>
                            <label style={{ fontSize: 21 }}>Customer</label>

                            <select style={style} name="customer" onChange={this.props._inputHandler} value={this.props.state.customer}>
                                <option> Not selected </option>
                                {this.state.customerArray.map((value, index) => {
                                    return (
                                        <option value={value.customerName} key={index}> {value.customerName} </option>
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
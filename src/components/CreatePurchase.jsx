import React, { Component } from 'react'
import * as mat from 'material-ui';

export class CreatePurchaseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            productArray: []
        }
    }
    // componentWillMount() {
    //     let products = this.props.isProducts.products;
    //     let vm = this
    //     Object.keys(products).forEach(function (key) {
    //         var obj = products[key]
    //         obj.id = key
    //         vm.state.productArray.push(obj)
    //         vm.setState({ productArray: vm.state.productArray })
    //     });
    // }
    handleRequestClose = () => {
        this.props.changeResult()
        // browserHistory.push('/home')
    };
    //  ProductCheck() {
      
        
        // this.props.ProductPrice(SelectedProduct);
    // }

    render() {
        const center = {
            width: '60%',
            margin: '0 auto',
            background: 'darkCyan',
            padding: '30px',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)',
            color : 'white'
        }
         const dropDownStyle = {
            margin: 10,
            background: 'darkCyan',
            padding: '10px',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
         }
         const style = {
            color : 'white',
            background: 'darkCyan',
            paddingLeft: '30px',
            paddingRight: '30px',
            border : 'none',
            fontSize : 19,
            float : 'right',
            marginRight : 20,
        };
        return (
            <div style={{ marginTop: '30px' }}>

                <div style={center}>
                    <mat.AppBar title="Purchase Product" showMenuIconButton={false} />
                    <form onSubmit={this.props._submit}>
                        <mat.TextField
                            hintText=" Each price"
                            name="price"
                            value={this.props.state.price}
                            onChange={this.props._inputHandler}
                            required fullWidth autoFocus
                        /><br />
                        <mat.TextField
                            hintText="Quantity"
                            name="quantity"
                            value={this.props.state.quantity}
                            onChange={this.props._inputHandler}
                            required fullWidth
                        />
                        <br />
                   
                 <div style={dropDownStyle}>
                       <label style={{fontSize : 21}}>Product</label>
                        <select style={style}  required name="ProductName"  onChange={this.props._inputHandler}  value={this.props.state.ProductName}>
                                                <option value="store"> store </option>
                                            <option value="table"> table </option>
                                            <option value="last"> last </option>
                                    </select>
                        <br />
                 </div>

                   
                 <div style={dropDownStyle}>
                   <label  style={{fontSize : 21}}>Select Branch</label>
                        <select style={style}  required name="branch"  onChange={this.props._inputHandler}  value={this.props.state.branch}>
                                                <option value="store"> store </option>
                                            <option value="table"> table </option>
                                            <option value="last"> last </option>
                                    </select>
                        <br />
                 </div>

                 <div style={dropDownStyle}>                   
                   <label  style={{fontSize : 21}}>Select Depart</label>
                        <select style={style}  required name="department"  onChange={this.props._inputHandler}  value={this.props.state.department}>
                                                <option value="store"> store </option>
                                            <option value="table"> table </option>
                                            <option value="last"> last </option>
                                    </select>
                        <br />
                 </div>
                 <div style={dropDownStyle}>                   
                   <label  style={{fontSize : 21}}>Select Supplier</label>
                        <select style={style}  required name="supplier"  onChange={this.props._inputHandler}  value={this.props.state.supplier}>
                                                <option value="store"> store </option>
                                            <option value="table"> table </option>
                                            <option value="last"> last </option>
                                            <option value="m ani"> m ani </option>
                                    </select>
                        <br />
                     </div>
                        <br />
                        <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        {this.props.loading && <mat.CircularProgress size={30} color="cyan" style={{ top: 10, left: 10 }} />}
                        {this.props.isResult && <mat.Snackbar
                            open={this.state.open}
                            message="Create successfully"
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose}
                        />}
                    </form>
                </div>
            </div>
        )
    }
}
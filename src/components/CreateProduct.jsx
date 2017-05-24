import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import * as mat from 'material-ui';

export class CreateProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
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
        return (
            <div style={{ marginTop: '30px' }}>

                <mat.AppBar style={header} title="Create your product" showMenuIconButton={false} />
                <div style={center}>
                    <form onSubmit={this.props._submit}>
                        <mat.TextField
                            hintText="Product Name"
                            name="productName"
                            value={this.props.state.productName}
                            onChange={this.props._inputHandler}
                            required fullWidth autoFocus
                        /><br />
                        <br />
                        <mat.TextField
                            hintText="Purchsing Price"
                            name="eachPrice"
                            value={this.props.state.eachPrice}
                            onChange={this.props._inputHandler}
                            required fullWidth
                        /><br />
                        <br />
                        <mat.TextField
                            hintText="Selling Price"
                            name="sellPrice"
                            value={this.props.state.sellPrice}
                            onChange={this.props._inputHandler}
                            required fullWidth
                        /><br />
                        <br />
                        <mat.TextField
                            hintText="Description"
                            name="description"
                            value={this.props.state.description}
                            onChange={this.props._inputHandler}
                            fullWidth
                        /><br />
                        <br />
                        <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        {this.props.loading && <mat.CircularProgress size={30} color="cyan" style={{ top: 10, left: 10 }} />}
                        {this.props.isResult && <mat.Snackbar
                            open={this.state.open}
                            message="Product create successfully"
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose}
                        />}
                    </form>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import * as mat from 'material-ui';

export class CreateCustomerComponent extends Component {
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

                <mat.AppBar style={header} title="Create your customer" showMenuIconButton={false} />
                <div style={center}>
                    <form onSubmit={this.props._submit}>
                        <mat.TextField
                            hintText="Customer Name"
                            name="customerName"
                            value={this.props.state.customerName}
                            onChange={this.props._inputHandler}
                            required fullWidth autoFocus
                        /><br />
                        <mat.TextField
                            hintText="Customer Number"
                            name="customerNumber"
                            value={this.props.state.customerNumber}
                            onChange={this.props._inputHandler}
                            required fullWidth
                        /><br />
                        <mat.TextField
                            hintText="Customer Address"
                            name="customerAddress"
                            value={this.props.state.customerAddress}
                            onChange={this.props._inputHandler}
                            required fullWidth
                        /><br />
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
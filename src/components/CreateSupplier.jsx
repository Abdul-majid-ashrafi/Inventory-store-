import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import * as mat from 'material-ui';

export class CreateSupplierComponent extends Component {
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
            borderBottomRightRadius: '250px',
            color: 'white'
        }
        const header = {
            width: '65%',
            margin: '0 auto',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)',
            borderTopRightRadius: '250px',
            color: 'white'
        }
        return (
            <div style={{ marginTop: '40px' }}>

                <mat.AppBar style={header} title="Create your Supplier/Compony" showMenuIconButton={false} />
                <div style={center}>
                    <form onSubmit={this.props._submit}>
                        <mat.TextField
                            hintText="Supplier/Compony Name"
                            name="supplierName"
                            value={this.props.state.supplierName}
                            onChange={this.props._inputHandler}
                            required fullWidth autoFocus
                        /><br />
                        <mat.TextField
                            hintText="Supplier/Compony Number"
                            name="supplierNumber"
                            value={this.props.state.supplierNumber}
                            onChange={this.props._inputHandler}
                            required fullWidth
                        /><br />
                        <mat.TextField
                            hintText="Supplier/Compony Address"
                            name="supplierAddress"
                            value={this.props.state.supplierAddress}
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateCustomerComponent } from '../components'
import { BranchesActions } from '../store/actions'


class CreateCustomerContainer extends Component {
    constructor() {
        super()
        this.state = {
            customerName: '',
            customerNumber: '',
            customerAddress: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        this.props.newCustomer(this.state)
    }
    render() {
        return (
            <div>
                <CreateCustomerComponent changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.branchReducer.isLoading,
        isResult: state.branchReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newCustomer: (customerInfo) => dispatch(BranchesActions.addData(customerInfo, "customer")),
        resutlFalse: () => dispatch(BranchesActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomerContainer)
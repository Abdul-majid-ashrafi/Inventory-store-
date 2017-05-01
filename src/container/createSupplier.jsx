import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateSupplierComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreateSupplierContainer extends Component {
    constructor() {
        super()
        this.state = {
            supplierName: '',
            supplierNumber: '',
            supplierAddress: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        this.props.newSupplier(this.state)
    }
    render() {
        return (
            <div>
                <CreateSupplierComponent changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.supplierReducer.isLoading,
        isResult: state.supplierReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newSupplier: (supplierInfo) => dispatch(BranchAndOtherActions.addSupplier(supplierInfo)),
        resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateSupplierContainer)
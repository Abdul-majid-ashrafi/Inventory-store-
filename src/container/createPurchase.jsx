import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreatePurchaseComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreatePurchaseContainer extends Component {
    constructor() {
        super()
        this.state = {
            ProName: '', // pro select karega name khud ajaega
            quantity: '',
            eachPrice: '',
            // branch: '',
            // department: '',
            supplier: '',
            totalPrice: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        setTimeout(() => {
            this.setState({
                totalPrice: this.state.quantity * JSON.parse(this.state.ProName).eachPrice,
                eachPrice: JSON.parse(this.state.ProName).eachPrice
            })
        }, 10)
    }

    submit(e) {
        e.preventDefault();
        this.setState({
            ProName: JSON.parse(this.state.ProName)
        })
        setTimeout(() => {
            this.props.purchase(this.state)
        })
    }
    render() {
        return (
            <div>
                <CreatePurchaseComponent isProducts={this.props.isProducts} isSupplier={this.props.isSupplier} changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isProducts: state.productReducer,//.products,
        isSupplier: state.supplierReducer,//.suppleir,
        // isBranche: state.branchReducer,//.branches,
        // isDepartment: state.departReducer,//.departments,
        isLoading: state.purchaseReducer.isLoading,
        isResult: state.purchaseReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        purchase: (obj) => dispatch(BranchAndOtherActions.addPurchase(obj)),
        resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseContainer)
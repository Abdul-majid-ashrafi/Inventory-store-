import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateSellComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreateSellContainer extends Component {
    constructor() {
        super()
        this.state = {
            ProName: '', // pro select karega name khud ajaega
            quantity: '',
            eachPrice: '',
            branch: '',
            department: '',
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
            console.log()
            // this.props.purchase(this.state)
        })
    }
    render() {
        return (
            <div>
                <CreateSellComponent isDepartment={this.props.isDepartment} isBranche={this.props.isBranche} isProducts={this.props.isProducts} isCustomer={this.props.isCustomer} changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isProducts: state.productReducer,//.products,
        isCustomer: state.customerReducer,//.suppleir,
        isBranche: state.branchReducer,//.branches,
        isDepartment: state.departReducer,//.departments,
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateSellContainer)
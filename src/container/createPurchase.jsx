import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreatePurchaseComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreatePurchaseContainer extends Component {
    constructor() {
        super()
        this.state = {
            ProName: '',
            eachPrice: '',
            quantity: '',
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
                totalPrice: this.state.eachPrice * this.state.quantity
            })
        }, 10)
    }
    submit(e) {
        e.preventDefault();
        this.setState({
            ProName: JSON.parse(this.state.ProName)
        })
        setTimeout(() => {
            console.log(this.state)
        }, 10)

        // this.state.ProName = JSON.parse(this.state.ProName)
        // console.log(JSON.parse(this.state.ProName))
        // this.props.newBranch(this.state)
    }
    render() {
        return (
            <div>

                <CreatePurchaseComponent isDepartment={this.props.isDepartment} isBranche={this.props.isBranche} isProducts={this.props.isProducts} isSupplier={this.props.isSupplier} changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isProducts: state.productReducer,//.products,
        isSupplier: state.supplierReducer,//.suppleir,
        isBranche: state.branchReducer,//.branches,
        isDepartment: state.departReducer,//.departments,
        // isLoading: state.branchReducer.isLoading,
        // isResult: state.branchReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newBranch: (branxh) => dispatch(BranchAndOtherActions.addBranch(branxh)),
        resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseContainer)
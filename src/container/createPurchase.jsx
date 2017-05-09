import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreatePurchaseComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreatePurchaseContainer extends Component {
    constructor() {
        super()
        this.state = {
            ProName: '',
            price: '',
            quantity: '',
            branch: '',
            department: '',
            supplier: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        console.log(this.state)
        // console.log(this.state)
        //   var SelectedProduct = this.refs.store.value;
        // console.log("productName",SelectedProduct);
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
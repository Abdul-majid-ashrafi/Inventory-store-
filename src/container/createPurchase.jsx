import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreatePurchaseComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreatePurchaseContainer extends Component {
    constructor() {
        super()
        this.state = {
            ProductName: '',
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
                
                <CreatePurchaseComponent changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
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
        newBranch: (branxh) => dispatch(BranchAndOtherActions.addBranch(branxh)),
        resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseContainer)
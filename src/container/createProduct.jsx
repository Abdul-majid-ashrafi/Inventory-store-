import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateProductComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreateProductContainer extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            description: '',
            quantity: 0,
            eachPrice: '',
            sellPrice: '',
            totalPrice: 0
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        this.props.newProduct(this.state)
    }
    render() {
        return (
            <div>
                <CreateProductComponent changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.productReducer.isLoading,
        isResult: state.productReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newProduct: (product) => dispatch(BranchAndOtherActions.addProduct(product)),
        resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer)
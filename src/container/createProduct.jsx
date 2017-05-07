import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateProductComponent } from '../components'
import { BranchAndOtherActions } from '../store/actions'


class CreateProductContainer extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            description: ''
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
        // this.props.newProduct(this.state)
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <CreateProductComponent changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.departReducer.isLoading,
        isResult: state.departReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // newProduct: (depart) => dispatch(BranchAndOtherActions.addDepart(depart)),
        // resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer)
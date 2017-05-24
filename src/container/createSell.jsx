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
            sellPrice: '',
            // branch: '',
            // department: '',
            customer: '',
            totalPrice: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        setTimeout(() => {
            this.setState({
                totalPrice: this.state.quantity * this.state.sellPrice
            })
        }, 10)
    }
    productChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        setTimeout(() => {
            this.setState({
                totalPrice: this.state.quantity * JSON.parse(this.state.ProName).sellPrice,
                sellPrice: JSON.parse(this.state.ProName).sellPrice
            })
            if (this.state.quantity > JSON.parse(this.state.ProName).quantity) {
                alert('Have Just' + JSON.parse(this.state.ProName).quantity + ' ' + JSON.parse(this.state.ProName).productName + " Items in your store")
                this.setState({
                    quantity: '', ProName: '', totalPrice: '', sellPrice: ''
                })
            }
        }, 10)
    }

    submit(e) {
        e.preventDefault();
        this.setState({
            ProName: JSON.parse(this.state.ProName)
        })
        setTimeout(() => {
            this.props.sell(this.state)
        })
    }
    render() {
        return (
            <div>
                <CreateSellComponent isProducts={this.props.isProducts} isCustomer={this.props.isCustomer} _P_C_Handler={this.productChangeHandler.bind(this)} changeResult={this.props.resutlFalse} loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isProducts: state.productReducer,//.products,
        isCustomer: state.customerReducer,//.customer,
        // isBranche: state.branchReducer,//.branches,
        // isDepartment: state.departReducer,//.departments,
        isLoading: state.sellReducer.isLoading,
        isResult: state.sellReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sell: (obj) => dispatch(BranchAndOtherActions.addSell(obj)),
        resutlFalse: () => dispatch(BranchAndOtherActions.setResultFalse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateSellContainer)
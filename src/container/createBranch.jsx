import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateBranchComponent } from '../components'
import { BranchesActions } from '../store/actions'


export class CreateBranchContainer extends Component {
    constructor() {
        super()
        this.state = {
            branchName: '',
            branchAddress: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        this.props.newBranch(this.state)
    }
    render() {
        return (
            <div>
                <CreateBranchComponent loading={this.props.isLoading} isResult={this.props.isResult} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.branchReducer.isLoading,
        isResult: state.branchReducer.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newBranch: (branxh) => dispatch(BranchesActions.createBranch(branxh))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateBranchContainer)
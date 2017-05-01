import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllCustomersComponent } from '../components'
import { BranchesActions } from '../store/actions'


class AllCustomersContainer extends Component {
    // constructor() {
    //     super()
    // }
myFunc(){
this.props.customers(34)
}
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.myFunc.bind(this)}>Click me!</button>
                <AllCustomersComponent />
            </div>
        );
    }
}

// export default AllCustomersContainer

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // isLoading: state.branchReducer.isLoading,
        // isResult: state.branchReducer.isResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // newBranch: (branxh) => dispatch(BranchesActions.addData(branxh, "branches")),
        customers: (q) => dispatch(BranchesActions.getData(q))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllCustomersContainer)
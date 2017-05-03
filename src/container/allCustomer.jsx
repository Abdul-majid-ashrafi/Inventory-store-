import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllCustomersComponent } from '../components'


class AllCustomersContainer extends Component {
    render() {
        return (
            <div>
                <AllCustomersComponent isCustomers={this.props.isCustomers} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isCustomers: state.customerReducer,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // newBranch: (branxh) => dispatch(BranchAndOtherActions.addData(branxh, "branches")),
//         customers: () => dispatch(BranchAndOtherActions.getCustomers())
//     }
// }
export default connect(mapStateToProps, null)(AllCustomersContainer)
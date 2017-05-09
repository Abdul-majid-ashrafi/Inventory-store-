import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllCustomersComponent } from '../components'


class AllProductsContainer extends Component {
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
        // isCustomers: state.customerReducer,
    }
}
export default connect(mapStateToProps, null)(AllCustomersContainer)
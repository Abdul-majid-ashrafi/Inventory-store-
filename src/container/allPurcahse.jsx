import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllPurcahseComponent } from '../components'


class AllPurchaseContainer extends Component {
    render() {
        return (
            <div>
                <AllPurcahseComponent isPurchase={this.props.isPurchase} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isPurchase: state.purchaseReducer,
    }
}
export default connect(mapStateToProps, null)(AllPurchaseContainer)
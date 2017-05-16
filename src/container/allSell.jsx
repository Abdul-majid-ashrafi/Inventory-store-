import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllSellComponent } from '../components'


class AllSellContainer extends Component {
    render() {
        return (
            <div>
                <AllSellComponent isSell={this.props.isSell} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSell: state.sellReducer,
    }
}
export default connect(mapStateToProps, null)(AllSellContainer)
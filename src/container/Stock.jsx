import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StockComponent } from '../components'


class StockContainer extends Component {
    render() {
        return (
            <div>
                <StockComponent isStock={this.props.isStock} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isStock: state.productReducer,
    }
}
export default connect(mapStateToProps, null)(StockContainer)
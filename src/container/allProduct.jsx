import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllProductsComponent } from '../components'


class AllProductsContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <AllProductsComponent isProducts={this.props.isProducts} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isProducts: state.productReducer,
    }
}
export default connect(mapStateToProps, null)(AllProductsContainer)
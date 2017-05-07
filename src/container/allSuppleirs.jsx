import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllSupplierComponent } from '../components'


class AllSuppleirContainer extends Component {
    render() {
        return (
            <div>
                <AllSupplierComponent isSupplier={this.props.isSupplier} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isSupplier: state.supplierReducer,
    }
}
export default connect(mapStateToProps, null)(AllSuppleirContainer)
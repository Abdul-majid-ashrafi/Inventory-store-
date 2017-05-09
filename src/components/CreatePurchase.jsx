import React, { Component } from 'react'
import * as mat from 'material-ui';

export class CreatePurchaseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productArray: []
        }
    }
    // componentWillMount() {
    //     let products = this.props.isProducts.products;
    //     let vm = this
    //     Object.keys(products).forEach(function (key) {
    //         var obj = products[key]
    //         obj.id = key
    //         vm.state.productArray.push(obj)
    //         vm.setState({ productArray: vm.state.productArray })
    //     });
    // }


    render() {
        // const center = {
        //     // color : 'white',
        //     width: '70%',
        //     margin: '0 auto',
        //     background: 'darkCyan',
        //     boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        // }
        const container = {
            textAlign: 'center',
            width: '100%',
            margin: '0 auto',
            background: '#fff2e6',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }

        return (
            <div style={container}>
                hello
            </div>
        )
    }
}
import React, { Component } from 'react'
// import * as mat from 'material-ui';

export class Dashboard extends Component {
    // state = {
    //     valueSingle: '3',
    //     valueMultiple: ['3', '5'],
    // };

    // handleChangeSingle = (event, value) => {
    //     this.setState({
    //         valueSingle: value,
    //     });
    // };

    // handleChangeMultiple = (event, value) => {
    //     this.setState({
    //         valueMultiple: value,
    //     });
    // };

    // handleOpenMenu = () => {
    //     this.setState({
    //         openMenu: true,
    //     });
    // }

    // handleOnRequestChange = (value) => {
    //     this.setState({
    //         openMenu: value,
    //     });
    // }

    render() {
        const styleHeading = {
            color: 'white',
            textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',
            textAlign: 'jistify',
            margin : 50
        }
        return (
            <h2 style={styleHeading}>
                The Inventory Management System is a real-time inventory database capable of handling large inventories of an organization. This can be used to track the inventory of a single store, or to manage the distribution of stock between several stores of a larger franchise. However, the system merely records sales and restocking data and provides notification of low stock at any location at a specified interval. The goal is to reduce the strain of tracking rather than to handle all store maintenance. Objectives The main goal of Inventory Management System is to ensure consistent availability of supplies for consumers. Thus, Inventory Management System is directed toward owners of small to large stores and stock managers who are responsible of maintaining sufficient goods on hand in a retail or manufacturing business. It can scale from a single computer running both client and server software up to multiple stores and warehouses. At last, the owner can use predict module to predict the sales which would be very helpful for decision-making.
                {/*<IconMenu
                    iconButtonElement={<IconButton> <RaisedButton label="Primary" primary={true} /></IconButton>}
                    open={this.state.openMenu}
                    onRequestChange={this.handleOnRequestChange} >
                    <MenuItem value="1" primaryText="Windows App" />
                    <MenuItem value="2" primaryText="Mac App" />
                    <MenuItem value="3" primaryText="Android App" />
                    <MenuItem value="4" primaryText="iOS App" />
                </IconMenu>*/}
                {/*<RaisedButton onTouchTap={this.handleOpenMenu} label="Downloads" />*/}
            </h2>
        );
    }
}

// export const Dashboard = (props) => {
//     const style = {
//         marginRight: 20,
//     };
//     return (

//     )
// }

//  default Dashboard
import React, { Component } from 'react'
import * as mat from 'material-ui';
// import { browserHistory } from 'react-router'

export class AllCustomersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerArray: []
        }
    }
    componentWillMount() {
        let customers = this.props.isCustomers.customers;
        let vm = this
        Object.keys(customers).forEach(function (key) {
            var obj = customers[key]
            obj.id = key
            vm.state.customerArray.push(obj)
            vm.setState({ customerArray: vm.state.customerArray })
        });
    }


    render() {
        // const center = {
        //     width: '100%',
        //     margin: '0 auto',
        //     background: 'darkCyan',
        //     color : 'white !important',
        //     padding: '30px',
        //     boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        // }
        const center = {
            width: '80%',
            margin: '0 auto',
            background: 'darkCyan',
            color: 'white !important',
            padding: '30px',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        const centeres = {
            width: '100%',
            margin: '0 auto',
            background: '#ffe6cc',
            color: 'white !important',
            padding: '30px',
            boxShadow: '0 15px 20px rgba(0, 0, 0, 0.3)'
        }
        console.log(this.state)
        return (
            <div style={centeres}>
                {/*{this.state.customerArray.map((value, index) => {
                    console.log('index', index)
                    console.log('value', value)
                    return (
                        <h2 key={index}>
                            {value.customerName}
                        </h2>
                    )
                })}*/}

                <br />
                <br />
                <mat.Table style={center}>
                    <mat.TableHeader displaySelectAll={false}>
                        <mat.TableRow style={{ color: 'white' }}>
                            <mat.TableHeaderColumn>Name</mat.TableHeaderColumn>
                            <mat.TableHeaderColumn>Number</mat.TableHeaderColumn>
                            <mat.TableHeaderColumn>Address</mat.TableHeaderColumn>
                        </mat.TableRow>
                    </mat.TableHeader>
                    <mat.TableBody displayRowCheckbox={false}>
                        <mat.TableRow style={{ color: 'white' }}>
                            <mat.TableRowColumn>1</mat.TableRowColumn>
                            <mat.TableRowColumn>John Smith</mat.TableRowColumn>
                            <mat.TableRowColumn>Employed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>2</mat.TableRowColumn>
                            <mat.TableRowColumn>Randal White</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>3</mat.TableRowColumn>
                            <mat.TableRowColumn>Stephanie Sanders</mat.TableRowColumn>
                            <mat.TableRowColumn>Employed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>4</mat.TableRowColumn>
                            <mat.TableRowColumn>Steve Brown</mat.TableRowColumn>
                            <mat.TableRowColumn>Employed</mat.TableRowColumn>
                        </mat.TableRow>
                        <mat.TableRow>
                            <mat.TableRowColumn>5</mat.TableRowColumn>
                            <mat.TableRowColumn>Christopher Nolan</mat.TableRowColumn>
                            <mat.TableRowColumn>Unemployed</mat.TableRowColumn>
                        </mat.TableRow>
                    </mat.TableBody>
                </mat.Table>
            </div>
        )
    }
}
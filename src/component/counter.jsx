import React, { Component } from 'react';
import Output from './output';
import  Button from './button';

class Counter extends Component {
    state = { 
     value:4
     }

     handleIncrement=()=>{
         this.setState({value:this.state.value+1});
        // console.log("clicked")
     }
     handleIncrement=()=>{
        this.setState({value:this.state.value-1});
       // console.log("clicked")
    }

    render() { 
        return ( 
<div>
           <Output value={this.state.value}> </Output>
           <Button Increment={this.handleIncrement}></Button>
           </div>
         );
    }
}
 
export default Counter;
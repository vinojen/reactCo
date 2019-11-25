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
     handleDecrement=()=>{
        this.setState({value:this.state.value-1});
       // console.log("clicked")
    }

    handleReset=()=>{
        this.setState({value:0});
       // console.log("clicked")
    }

    render() { 
        const{value}=this.state
        return ( 
<div>
           <Output value={value}> </Output>
           <Button Increment={this.handleIncrement} Decrement={this.handleDecrement} Reset={this.handleReset}></Button>
           </div>
         );
    }
}
 
export default Counter;
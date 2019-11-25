import React, { Component } from 'react';
import Output from './output';
import  Button from './button';
import {connect} from 'react-redux'
import {Increment, Decrement} from './counterActiom'

const mapStateToProps=(state)=>({

  Count :state.count 
});

const mapDispatchProps={
  Increment,
  Decrement
};
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
           <Output value={this.props.Count}> </Output>
           <Button Increment={this.props.Increment} 
           Decrement={this.props.Decrement} 
           Reset={this.handleReset}></Button>
           </div>
         );
    }
}
 
export default connect(mapStateToProps,mapDispatchProps) (Counter);
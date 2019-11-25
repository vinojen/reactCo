import React from 'react'



const Button=({Increment,Decrement,Reset})=>{


 
        return (
            <div>
              
                <input type="button" value="Increment" onClick={Increment} className="btn btn-primary m-4"/>
                <input type="button" value="Decrement" onClick={Decrement} className="btn btn-secondary m-4"/>
                <input type="button" value="Reset" onClick={Reset} className="btn btn-danger m-4"/>

            </div>
        );
    
}
export default Button;

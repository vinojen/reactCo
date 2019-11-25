import React from 'react'



const Button=({Increment})=>{


 
        return (
            <div>
                <h1>select on</h1>
                <input type="button" value="Increment" onClick={Increment}/>
                <input type="button" value="Decrement" onClick={Decrement}/>
                <input type="button" value="Reset"/>

            </div>
        );
    
}
export default Button;

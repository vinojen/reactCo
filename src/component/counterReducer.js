import {INCREMENT,DECREMENT} from './counterConstant'


const InitialState={

    count:4
};

const counterReduce=(state=InitialState,action)=>{
switch(action.type){

    case INCREMENT:
        return{
            count:state.count+1
        };
        case DECREMENT:
            return{

                count:state.count-1
            };
            default:
                return state;

}
  
}
export default counterReduce;
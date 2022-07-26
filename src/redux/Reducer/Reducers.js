// import { ActionsTypes } from "../constants/ActionTypes.js";
// import { Increment,Decrement } from "../Actions/Action.js";

const initialstate=0;

export const IncrementDecrementReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "INCREMENT": return  state+1;
        case "DECREMENT": return  state-1;
        default:return state;
    };
    }


    // export const DecrementtReducer=(state=initialstate,{type,payload})=>{
    //     switch(type){
    //         case ActionsTypes.DECREMENT:
    //             return  state-1;    
    //     }
    //     }

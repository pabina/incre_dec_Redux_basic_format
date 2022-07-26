//for combining reducer
import {combineReducers} from "redux" ;
import {IncrementDecrementReducer } from "./Reducers.js";


export const reducers=combineReducers(
    {IncrementDecrementReducer});
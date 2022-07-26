import React from 'react';
import {Card,CardActions,CardContent,Button,Typography,styled} from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { Increment ,Decrement} from './redux/Actions/Action.js';
// import {ActionsTypes}  from "./redux/constants/ActionTypes.js"
import {reducers } from './redux/Reducer/index.js';




const CardStyle=styled(Card)`
margin:6rem 4rem;
width:50%`





const App = () => {
  //state.rootreducer
  
  const mystate=useSelector((state)=>state.reducers);
  //to call actions we need dispatch function
  const dispatch=useDispatch();
  // const increFunction=()=>{
  //   dispatch(Increment)
  // }
//   const decreFunction=()=>{
// dispatch(Decrement);
//   }
  return (
    <div>
      <CardStyle>
    <CardContent>
     <Button variant="contained" onClick={()=>{dispatch(Increment)}}>decre</Button>
     <input value={mystate} />
     <Button variant="contained" onClick={()=>{dispatch(Decrement)}}>incre</Button>
    </CardContent>
      </CardStyle>


    </div>
  )
}

export default App;
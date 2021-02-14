import React,{useReducer} from 'react'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
const Actions={
    increment:"increment",
    decrement:"decrement"
}
function reducer(state,action){
     switch (action.type){
        case  Actions.increment:
            return {count:state.count+1}
        case Actions.decrement:
            return {count:state.count-1}
        default:
            return state
     }
}
function ReducerSample(){
    const  [state,dispatch]=useReducer(reducer,{count:0})
    function increment(){
        dispatch({type:Actions.increment})
    }
    function decrement(){
        dispatch({type:Actions.decrement})
    }
    return(
        <div className="reducer">
             <h1>Reducer Sample(useReducer from react hook)</h1>
            <div className="reducerDiv">
                <Button variant="contained" color="info" onClick={decrement}>-</Button>
                <span>{state.count}</span>
                <Button variant="contained" color="info" onClick={increment}>+</Button>
            </div>
        </div>
    )
}
export default ReducerSample
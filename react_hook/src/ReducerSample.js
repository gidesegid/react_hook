import React,{useReducer} from 'react'
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
             <h1>Reducer Sample:useReducer</h1>
            <div>
                <Button variant="contained"  onClick={decrement}>-</Button>
                <span>{state.count}</span>
                <Button variant="contained"  onClick={increment}>+</Button>
            </div>
        </div>
    )
}
export default ReducerSample
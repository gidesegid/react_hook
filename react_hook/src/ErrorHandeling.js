import React, { useState ,useReducer} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useUsers from './usersHook';
export default function ErrorHandeling() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [executionOutput, setExecutionOutput] = useState("");
  const [hasError, setHasError] = useState(false);
  const [output,setOutput]=useState(false)
  const [fieldsFilled,setFieldsFilled]=useState(false)

  function getDivision() {
    try {
       if(height=='' || weight=='') return setFieldsFilled(true)
      if (height === "0") throw new Error("Division By 0 is not allowed.Please fill your height");
      let heightSquare=height*height
      let BMI=weight/heightSquare
      setFieldsFilled(false)
      setOutput(true)
      setExecutionOutput(BMI);
    } catch {
      setHasError(true);
    }
  }
  function updateValue(event) {
      if (event.target.id === "yourHeight") return setHeight(event.target.value);
      setWeight(event.target.value);
  }
  function back(){
      setHasError(false)
  }
  return (
    <div className="ErrorHandeling">
        <h1>Sample for Error handeling</h1>
      {!hasError && (
        <section>
          <div>
          <label>Your weight in kgs:</label>
            <TextField id="yourWeight" type="number" value={weight} onChange={updateValue} />
          </div>
          <br></br>
          <div>
            <label>Your height in meters:</label>
            <TextField id="yourHeight" type="number" value={height} onChange={updateValue}/>
          </div>
         <br></br>
          <div>
              <div>
              <Button onClick={getDivision} variant="contained" >Calculate BMI</Button>
              </div>
              <div>
              {fieldsFilled==true ? <p>Fill the fields</p>:<div>{output===true ? <span className="output">Your BMI: {executionOutput}</span>:""}</div> }
                 
              </div>
               {
                 output===true ? <ul><li>Underweight less than 18.5 </li><li>Normal weight = 18.5–24.9</li><li>Overweight = 25–29.9</li><li> Obesity = BMI of 30 or greater</li></ul>:""
               } 
          </div>
        </section>
      )}
      {hasError ? <div><ErrorComponent></ErrorComponent> <button onClick={back}>back</button></div>:""}
    </div>
  );
}
function ErrorComponent() {
  return <p>Division By 0 is not allowed.Please fill your height</p>
}
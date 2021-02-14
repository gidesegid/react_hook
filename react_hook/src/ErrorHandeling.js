import React, { useState } from "react";
import Button from '@material-ui/core/Button';

export default function ErrorHandeling() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [executionOutput, setExecutionOutput] = useState("");
  const [hasError, setHasError] = useState(false);
  const [output,setOutput]=useState(false)
  

  function getDivision() {
    try {
      if (height === "0") throw new Error("Division By 0 is not allowed.Please fill your height");
      let heightSquare=height*height
      let BMI=weight/heightSquare
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
        <h1>Error handeling</h1>
      {!hasError && (
        <section>
          <div>
          <label>Your weight in kg:{" "}</label>
            <input id="yourWeight" type="text" value={weight} onChange={updateValue} />
          </div>
          <div>
            <label>Your height in meter:{" "}</label>
            <input id="yourHeight" type="text" value={height} onChange={updateValue} />
          </div>
          <div>
               <Button onClick={getDivision} variant="contained" color="alert">Calculate BMI</Button>
              <div>
                 {output===true ? <span>Your BMI: {executionOutput}</span>:""} 
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
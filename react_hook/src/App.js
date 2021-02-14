import React, {useState, useEffect} from 'react';
import './App.css';
import ReducerSample from './ReducerSample'
import ErrorHandeling from './ErrorHandeling'
//uncomment below to fetch data from your own API
  // import axios from "axios";
  // const carriersApi="https://www.yourhelplab.com/..../"
function App() {
  //useState is simillar to State in class component in react
   const [data,setData]=useState([{}]);
 //useEffect is similar to mount and unmount component of a class component in reacct
  useEffect(()=>{
    getData()
  },[])

  function  getData(){
    // assign the function Async before using await in your fetch data from api
    // const response = await axios.get(carriersApi);
    //setData(Response.data)
    setData([
      {
        "id": "PNL",
        "name": "Post NL",
        "price": 5,
        "countries": ["nl", "be"]
      },
      {
        "id": "DHP",
        "name": "DHL",
        "price": 5,
        "countries": ["nl", "be", "fr"]
      },
      {
        "id": "DHP_EXPRESS",
        "name": "DHL ochtend levering",
        "price": 7.5,
        "countries": ["nl", "be"]
      },
      {
        "id": "DPD",
        "name": "DPD",
        "price": 7,
        "countries": ["nl", "fr"]
      },
      {
        "id": "RTG",
        "name": "Koerier",
        "price": 25,
        "countries": ["nl", "be"]
      }
    ]
    )
  }
  return (
    <div className="container">
        <div>
          <strong><h1>Sample carriers details</h1> <small>(using useState,useEffect from React hook)</small></strong>
         <div className="lists">
            {/* {data.map((item)=>
              <div>
                <div> <strong>Id:</strong><span>{item.id} </span></div>
                <div><strong>Name:</strong><span>{item.name} </span></div>
                <div><strong>Price:</strong><span>{item.price}</span></div>
                <div><strong>Country:</strong><ul className="country">{item.countries.map((ele)=><li>{ele}</li>)}</ul></div>
              </div>
            )} */}
          </div>
          </div>
          <ReducerSample/>
          <ErrorHandeling/>
    </div>
  );
}
export default App;

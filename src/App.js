import React, { useState } from "react";
import FunctionComp from "./Handsonone/FunctionComp"
import './App.css';
import ClassComp from "./Handsonone/ClassComp";

function App() {
const [fState,setFState] = useState(false)
const [cState,setCState] = useState(false);
  return (
    <div className="App">
     <h1 className='heading'>Styling using functional and class component</h1>
     <button onClick={()=>setFState(!fState)}>To see Styling in functional component</button>
     <button onClick={()=>setCState(!cState)}>To see Styling in class component</button>
    {fState?<FunctionComp/>:" "}
    {cState?<ClassComp/>:" "}
     
    </div>
  );
}

export default App;

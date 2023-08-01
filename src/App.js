import './App.css';
import { useEffect, useState } from 'react';
import './Style.css'


function App() {
  const [no, setNo] = useState(0);
  const cntPlus = () =>{
     setNo(
       no + 1
     )
  }
  const cntMin = () =>{
    if (no > 0) {
      setNo(no - 1);
    }
 }
 
 
 const resetCounter = () => {
  setNo(0);
}
  useEffect(() => {
     
  },[no]);
  return (
    <>
     <div class="container">
        <h1>Counter App</h1>
        <div class="counter">
            <button id="increment-btn" onClick={()=> cntPlus()}>+</button>
            <div id="counter-value">{no}</div>
            <button id="decrement-btn" onClick={()=> cntMin()}>-</button>
        </div>
        <button id="reset" onClick={()=> resetCounter()}>Reset</button>
    </div>
    </>
  );
}
export default App;

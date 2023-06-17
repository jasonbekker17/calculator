import Button from "./components/Button";
import Screen from "./components/Screen";
import { useState } from "react";
import * as math from "mathjs";
function App() {

  const [text, setTEXT]=useState("")
  const [result,setResult] = useState("")



  const addToText =(val) => {
    setTEXT((text) => [...text, val+ ""]);

  };

  const clearText =() => {
    setTEXT("");
    setResult("");

  }
  const calcualatedResult =() => {
    const input=text.join("");
    setResult(math.evaluate(input));

  }
   
  return (
    <div className="border rounded-xl w-80 h-96 w-56 bg-orange-200 flex  text-black font-bold items-center   m-10 p-6"> 
      
        <div className=" ">
        <div>
        <h1 className="text-1xl font-bold text-center"> The Calculator</h1>

        </div>
          
         <div className="p-1 rounded-sm  bg-black">
         <Screen text={text} result={result} />
         <div className="grid grid-cols-4 gap-4">
         <Button symbol={"C"}handleClick={clearText}/>
         <Button symbol={"%"}handleClick={addToText} color="orange" />
         <Button symbol={"/"}handleClick={addToText} color="orange" />
         <Button symbol={"7"}handleClick={addToText} />
         <Button symbol={"8"}handleClick={addToText}/>
         <Button symbol={"9"}handleClick={addToText}/>
         <Button symbol={"*"}handleClick={addToText} color="orange"/>
         <Button symbol={"4"}handleClick={addToText}/>
         <Button symbol={"5"}handleClick={addToText}/>
         <Button symbol={"6"}handleClick={addToText}/>
         <Button symbol={"-"}handleClick={addToText} color="orange"/>
         <Button symbol={"1"}handleClick={addToText}/>
         <Button symbol={"2"}handleClick={addToText}/>
         <Button symbol={"3"}handleClick={addToText}/>
         <Button symbol={"+"}handleClick={addToText} color="orange"/>
         <Button symbol={"0"}handleClick={addToText}/>
         <Button symbol={"."}handleClick={addToText}/>
         
         <Button symbol={"="} handleClick={calcualatedResult} color="#f2a33c"/>
         
         
         </div>
        
        
        </div >
        </div>
        
        
        
        
      </div>
  );
}

export default App;

import React from "react";
import { evaluate,format } from "mathjs";


function App() {

  const [Value,SetValue]=React.useState("");

 const eq=/^([(]*\s*\d+(\.\d+)?)(\s*[)]*\s*[-*/+]\s*[(]*\s*[-]?\s*\d+(\.\d+)?\s*[)]*)*$/;
 const eq_2=/\d*/;
 function calculate(){
 if(eq.test(Value)||eq_2.test(Value)){
  try{
  let result=evaluate(Value);
  if(result===Infinity||result===(-Infinity)){
      SetValue("can't divide by zero");
  }
  else{
      SetValue(`${format(result,{precision:14})}`)
      console.log(result)
  }
  
  }
  catch{
  SetValue("Invalid expression")
  }

}
else{
  SetValue("Invalid expression")
}
}

  return (
    <div className="container">

    <div className="eq_container">
    <input className="expression" type="text" value={Value} readOnly /> 
    </div>

    <div className="calculator">
    

    <div className="numbers">
      <button onClick={()=>SetValue(prew=>prew+"1")}>1</button>
      <button onClick={()=>SetValue(prew=>prew+"2")}>2</button>
      <button onClick={()=>SetValue(prew=>prew+"3")}>3</button>
      <button onClick={()=>SetValue(prew=>prew+"4")}>4</button>
      <button onClick={()=>SetValue(prew=>prew+"5")}>5</button>
      <button onClick={()=>SetValue(prew=>prew+"6")}>6</button>
      <button onClick={()=>SetValue(prew=>prew+"7")}>7</button>
      <button onClick={()=>SetValue(prew=>prew+"8")}>8</button>
      <button onClick={()=>SetValue(prew=>prew+"9")}>9</button>
      <button onClick={()=>SetValue(prew=>prew+".")}>.</button>
      <button onClick={()=>SetValue(prew=>prew+"0")}>0</button>
      <button onClick={calculate}>=</button>
    </div>

    <div className="signs">
      <button onClick={()=>SetValue(prew=>prew+"+")}>+</button>
      <button onClick={()=>SetValue(prew=>prew+"-")}>-</button>
      <button onClick={()=>SetValue(prew=>prew+"*")}>*</button>
      <button onClick={()=>SetValue(prew=>prew+"/")}>/</button>
      <button onClick={()=>SetValue(prew=>prew+"(")}>&#40;</button>
      <button onClick={()=>SetValue(prew=>prew+")")}>&#41;</button>
      <button onClick={()=>SetValue(Value.slice(0,-1))}>&lt;</button>
      <button onClick={()=>SetValue("")}>C</button>
    </div>

    </div>
  </div>

  );
}

export default App;

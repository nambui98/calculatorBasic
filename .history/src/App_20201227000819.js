import { useState } from "react";
import Tilt from "react-vanilla-tilt";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleChange = (value) => {
    if (value === "=") {
      setText(eval(parseFloat(text.replace(",",""))).toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," ));
    } else if(text==="" && ["/","*","-","+"].includes(value)){
      return false
    } else if(value===""){
      setText("")
    }
    else {
      setText((text + value).toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," ));
    }
  };
  const list = [
    { key: "c", value: "" },
    { key: "/", value: "/" },
    { key: "*", value: "*" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "-", value: "-" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "+", value: "+" },
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "0", value: "0" },
    { key: "00", value: "00" },
    { key: ".", value: "." },
    { key: "=", value: "=" },
  ];
  return (
    <div className="App">
      <Tilt
        className="container"
        style={null}
        options={{
          scale: 2,
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        }}
      >
        <form nameName="calc" class="calculator">
          <input
            type="text"
            readonly
            name="txt"
            // pattern="([0-9]{1,3}).([0-9]{1,3})"
            value={text}
            className="value"
          />
          {
            list.map(item=>{
              let style =""
              if (item.value==="") {
                style = "num clear"
              }else if(item.value==="+"){
                style = "num plus"
              }else if(item.value==="="){
                style = "num equal"
              }
              return  <span className={style} onClick={() => handleChange(item.value)}>{item.key}</span>
            })
          }    
        </form>
      </Tilt>
    </div>
  );
}

export default App;

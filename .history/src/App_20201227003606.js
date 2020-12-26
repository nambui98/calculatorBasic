import { useState } from "react";
import Tilt from "react-vanilla-tilt";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleChange = (value) => {
    if (value === "=") {
      setText(eval(text));
    } else if(text==="" && ["/","*","-","+"].includes(value)){
      return false
    } else if(value===""){
      setText("")
    }
    else {
      let test=handleReConvert(text)
      let result=handleConvert(test+value);
      console.log(result);
      setText(result);
    }
  };
  const handleConvert = (number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  const handleReConvert = (string)=>{
    if(string===""){
      return ""
    }
    return parseFloat(string.replaceAll(",",""))
  }
  console.log('====================================');
  console.log(typeof parseFloat("5,555,555".replaceAll(",","")));
  console.log('====================================');
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

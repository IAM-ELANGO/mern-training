import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  // const [count , setCount] = useState(0);

  // return (
  //   <>
  //     <p> {count}</p>
  //     <button onClick={
  //       () => {setCount(count + 1)}
  //     }>ClickMe</button>

  //   </>

  // )

  const [text, changeText] = useState("Elango");

  return (
    <>
      <NavBar />
      <h1>Text Area:</h1>
      <textarea
        value={text}
        onChange={(event) => {
          changeText(event.target.value);
        }}

        // {/* <textarea
        // value={text}
        // onChange={
        //   changeText
        // } */}
      ></textarea>
      <p>The value is: {text}</p>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ColorNameInput from "./ColorNameInput";
import Content from "./Content";

function App() {
  const [backGroundColor, setBackGroundColor] = useState("Empty Value");
  return (
    <div className="App">
      <Content backGroundColor={backGroundColor} />
      <ColorNameInput
        backGroundColor={setBackGroundColor}
        setBackGroundColor={setBackGroundColor}
      />
    </div>
  );
}

export default App;

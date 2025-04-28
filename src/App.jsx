import { useEffect, useState } from "react";
import "./App.css";
import ControlComp from "./components/ControlComp";
import Counter from "./components/Counter";
import HOCComp from "./components/HOC";
import ListComp from "./components/ListComp";
import UnControlComp from "./components/UnControlComp";
import ValidationForm from "./components/ValidationForm";

const HOCFORM = HOCComp(ValidationForm);

function App() {
  let [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(false);
    }, 3000);
  });

  return (
    <>
      {/* <Counter name="Virat Kohli" team="RCB" /> */}
      {/* <ListComp /> */}
      {/* <ControlComp />
      <UnControlComp /> */}
      {/* <ValidationForm /> */}
      <HOCFORM isLoading={isLoading} title="ABC Validation" name="Hello" />
    </>
  );
}

export default App;
